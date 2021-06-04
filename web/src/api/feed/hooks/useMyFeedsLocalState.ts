import { useQuery } from '@apollo/client';
import React from 'react';
import gql from 'graphql-tag';

export interface MyFeedsLocal {
  myFeedsSearch: string;
  myFeedsPage: number;
}

const MY_FEEDS_LOCAL = gql`
  {
    myFeedsSearch @client
    myFeedsPage @client
  }
`;

function useMyFeedsLocalState() {
  const { data: { myFeedsSearch = '', myFeedsPage = 0 } = {}, client } = useQuery<MyFeedsLocal>(MY_FEEDS_LOCAL);
  const onChangeSearch = React.useCallback(
    (v) => {
      client.cache.writeQuery<MyFeedsLocal>({
        query: MY_FEEDS_LOCAL,
        data: {
          myFeedsSearch: v,
          myFeedsPage: 0,
        },
      });
    },
    [client]
  );
  const onChangePage = React.useCallback(
    (v) => {
      client.cache.writeQuery<MyFeedsLocal>({
        query: MY_FEEDS_LOCAL,
        data: {
          myFeedsSearch,
          myFeedsPage: v,
        },
      });
    },
    [client, myFeedsSearch]
  );

  return {
    myFeedsPage,
    myFeedsSearch,
    onChangePage,
    onChangeSearch,
  };
}

export default useMyFeedsLocalState;
