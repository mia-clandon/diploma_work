import { useQuery } from '@apollo/client';
import React from 'react';
import orderByFunc from 'lodash/orderBy';
import { QueryHookOptions } from '@apollo/client/react/types/types';
import useUserSettings from '../../user/hooks/useUserSettings';
import { MyFeedsDocument } from '../../hooks';

const initialLoad = 200;
const defaultState: any = { rows: [], count: 0 };

function useMyFeeds(opts: QueryHookOptions<any, any> = {}) {
  const settings = useUserSettings();

  const order = settings.state.feedsOrder || 'DESC';
  const orderBy = settings.state.feedsOrderBy || 'createdAt';

  const isInitialLoading = React.useRef(true);

  const { data: { myFeeds = defaultState } = {}, error, loading, fetchMore, refetch } = useQuery<{
    myFeeds: any;
  }>(MyFeedsDocument, {
    variables: {
      offset: 0,
      limit: initialLoad,
      order,
      orderBy,
    },
    ...opts,
  });

  React.useEffect(() => {
    if (isInitialLoading.current) {
      if (myFeeds.rows.length < myFeeds.count) {
        fetchMore({
          updateQuery: (prev, { fetchMoreResult }) => {
            let result = prev;

            if (fetchMoreResult && prev.myFeeds.rows.length < myFeeds.count) {
              result = {
                myFeeds: {
                  rows: [...prev.myFeeds.rows, ...fetchMoreResult.myFeeds.rows],
                  count: fetchMoreResult.myFeeds.count,
                },
              };
            }

            return {
              myFeeds: {
                ...result.myFeeds,
                __typename: 'MyFeeds',
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
  }, [myFeeds]);

  // sort rows
  const sortedRows: any = React.useMemo(() => {
    return orderByFunc(myFeeds.rows, [orderBy === 'name' ? 'title' : orderBy], [order.toLowerCase()]);
  }, [order, orderBy, myFeeds]);

  return {
    error,
    loading,

    data: {
      rows: sortedRows,
      count: myFeeds.count,
    },
    refetch,
  };
}

export default useMyFeeds;
