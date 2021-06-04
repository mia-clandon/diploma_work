import * as Apollo from '@apollo/client';
import React from 'react';
import orderByFunc from 'lodash/orderBy';
import { useCollectionsQuery } from '../../hooks';
import * as Types from '../../operations';
import useUserSettings from '../../user/hooks/useUserSettings';
import {CollectionsQuery} from "../../operations";

const initialLoad = 200;
const defaultState: Types.CollectionsQuery['collections'] = { rows: [], count: 0 };

function useCollections(opts: Apollo.QueryHookOptions<Types.CollectionsQuery, Types.CollectionsQueryVariables> = {}) {
  const settings = useUserSettings();

  const order = settings.state.collectionsOrder || 'DESC';
  const orderBy = settings.state.collectionsOrderBy || 'createdAt';

  const isInitialLoading = React.useRef(true);

  const { data: { collections = defaultState } = {}, fetchMore, ...other } = useCollectionsQuery({
    variables: { offset: 0, limit: initialLoad, order, orderBy },
    ...opts,
  });

  React.useEffect(() => {
    if (isInitialLoading.current) {
      if (collections.rows.length < collections.count) {
        fetchMore({
          updateQuery: (prev, { fetchMoreResult }) => {
            let result = prev;

            if (fetchMoreResult) {
              result = {
                collections: {
                  rows: [...(prev as CollectionsQuery).collections.rows, ...(fetchMoreResult as CollectionsQuery).collections.rows],
                  count: (fetchMoreResult as CollectionsQuery).collections.count,
                },
              };
            }

            return {
              myFeeds: {
                ...(result as CollectionsQuery).collections,
                __typename: 'Collections',
              },
            };
          },
          variables: {
            offset: initialLoad,
            limit: 100000,
            order,
            orderBy,
          },
        }).then();
      }
      isInitialLoading.current = false;
    }
  }, [collections]);

  // sort rows
  const sortedRows: any = React.useMemo(() => {
    return orderByFunc(collections.rows, [orderBy === 'name' ? 'title' : orderBy], [order.toLowerCase()]);
  }, [order, orderBy, collections]);

  return {
    data: {
      rows: sortedRows,
      count: collections.count,
    },
    ...other,
  };
}

export default useCollections;
