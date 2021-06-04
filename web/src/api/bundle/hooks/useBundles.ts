// import React from 'react';
import orderByFunc from 'lodash/orderBy';
import { QueryHookOptions } from '@apollo/client/react/types/types';
import React from "react";
import useUserSettings from '../../user/hooks/useUserSettings';
import { useGroupsQuery } from '../../hooks';

const initialLoad = 200;
const defaultState = { rows: [], count: 0 };

function useBundles(opts: QueryHookOptions<any, any> = {}) {
  const settings = useUserSettings();

  const order = settings.state.bundlesOrder || 'DESC';
  const orderBy = settings.state.bundlesOrderBy || 'createdAt';

  // const isInitialLoading = React.useRef(true);

  const { data: { groups = defaultState } = {}, error, loading, fetchMore, refetch } = useGroupsQuery({
    displayName: 'Groups',
    ...opts,
    variables: {
      offset: 0,
      limit: initialLoad,
      order,
      orderBy,
      ...(opts.variables || {}),
    },
  });

  // React.useEffect(() => {
  //   if (isInitialLoading.current) {
  //     if (groups.rows.length < groups.count) {
  //       fetchMore({
  //         updateQuery: (prev, { fetchMoreResult }) => {
  //           if (!fetchMoreResult) return prev;
  //
  //           return {
  //             groups: {
  //               count: fetchMoreResult.groups.count,
  //               rows: [...prev.groups.rows, ...fetchMoreResult.groups.rows],
  //             },
  //           };
  //         },
  //         variables: {
  //           offset: itinialLoad,
  //           limit: 100000,
  //           order,
  //           orderBy,
  //         },
  //       }).then();
  //     }
  //
  //     isInitialLoading.current = false;
  //   }
  // }, [groups]);

  // // sort rows
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

export default useBundles;
