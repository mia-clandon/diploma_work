import { useQuery } from '@apollo/client';
import React from 'react';
import gql from 'graphql-tag';

export interface MyBundlesLocal {
  myBundlesSearch: string;
  myBundlesPage: number;
}

const MY_BUNDLES_LOCAL = gql`
  {
    myBundlesSearch @client
    myBundlesPage @client
  }
`;

function useMyBundlesLocalState() {
  const { data: { myBundlesSearch = '', myBundlesPage = 0 } = {}, client } = useQuery<MyBundlesLocal>(MY_BUNDLES_LOCAL);
  const onChangeSearch = React.useCallback(
    (v: string) => {
      client.cache.writeQuery<MyBundlesLocal>({
        query: MY_BUNDLES_LOCAL,
        data: {
          myBundlesSearch: v,
          myBundlesPage: 0,
        },
      });
    },
    [client]
  );
  const onChangePage = React.useCallback(
    (v: number) => {
      client.cache.writeQuery<MyBundlesLocal>({
        query: MY_BUNDLES_LOCAL,
        data: {
          myBundlesSearch,
          myBundlesPage: v,
        },
      });
    },
    [client, myBundlesSearch]
  );

  return {
    myBundlesPage,
    myBundlesSearch,
    onChangePage,
    onChangeSearch,
  };
}

export default useMyBundlesLocalState;
