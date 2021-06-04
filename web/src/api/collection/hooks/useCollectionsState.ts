import { useQuery } from '@apollo/client';
import React from 'react';
import gql from 'graphql-tag';

export interface CollectionsLocal {
  collectionsSearch: string;
  collectionsPage: number;
}

const COLLECTIONS_LOCAL = gql`
  {
    collectionsSearch @client
    collectionsPage @client
  }
`;

function useLocalState() {
  const { data: { collectionsSearch = '', collectionsPage = 0 } = {}, client } = useQuery<CollectionsLocal>(
    COLLECTIONS_LOCAL
  );
  const onChangeSearch = React.useCallback(
    (v) => {
      client.cache.writeQuery<CollectionsLocal>({
        query: COLLECTIONS_LOCAL,
        data: {
          collectionsSearch: v,
          collectionsPage: 0,
        },
      });
    },
    [client]
  );
  const onChangePage = React.useCallback(
    (v) => {
      client.cache.writeQuery<CollectionsLocal>({
        query: COLLECTIONS_LOCAL,
        data: {
          collectionsSearch,
          collectionsPage: v,
        },
      });
    },
    [client, collectionsSearch]
  );

  return {
    collectionsSearch,
    collectionsPage,
    onChangePage,
    onChangeSearch,
  };
}

export default useLocalState;
