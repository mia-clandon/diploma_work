import { useApolloClient } from '@apollo/client';
import React from 'react';
import orderByFunc from 'lodash/orderBy';
import { QueryHookOptions } from '@apollo/client/react/types/types';
import useUserSettings from '../../user/hooks/useUserSettings';
import writeGroup from '../utils/writeGroup';
import { useGroupsFullQuery } from '../../hooks';

const defaultState = { rows: [], count: 0 };
let loaded = false;

function useBundlesFull(opts: QueryHookOptions<any, any> = {}) {
  const settings = useUserSettings();
  const apolloClient = useApolloClient();

  const order = settings.state.bundlesOrder || 'DESC';
  const orderBy = settings.state.bundlesOrderBy || 'createdAt';

  const { data: { groups = defaultState } = {}, error, loading, refetch } = useGroupsFullQuery({
    displayName: 'Groups',
    fetchPolicy: loaded ? 'cache-only' : 'network-only',
    nextFetchPolicy: 'cache-only',
    ssr: false,
    ...opts,
    variables: {
      order,
      orderBy,
      ...(opts.variables || {}),
    },
    onCompleted: ({ groups: { rows } = defaultState } = {}) => {
      if (!loaded) {
        for (const row of rows) {
          writeGroup(apolloClient, row);
        }

        // recalculate();

        loaded = true;
      }
    },
  });

  // sort rows
  const sortedRows = React.useMemo(() => {
    return orderByFunc(groups.rows, [orderBy], [order.toLowerCase()]);
  }, [order, orderBy, groups]);

  return {
    error,
    loading,

    data: {
      rows: sortedRows,
      count: groups.count,
    },
    refetch,
  };
}

export default useBundlesFull;
