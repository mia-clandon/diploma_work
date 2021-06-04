import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { GetCollectionArticleDocument } from '../../hooks';
import * as Types from '../../operations';

function useCollectionGetArticle() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.QueryHookOptions<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables> = {}
  ) => {
    try {
      const data = apolloClient.readQuery<Types.GetCollectionArticleQuery>({
        id: 'ROOT_QUERY',
        query: GetCollectionArticleDocument,
        ...opts,
      });

      if (data) {
        return {
          data,
        };
      }
    } catch (e) {
      return apolloClient.query<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables>({
        query: GetCollectionArticleDocument,
        fetchPolicy: 'network-only' as any,
        ...opts,
      });
    }
  };
}

export default useCollectionGetArticle;
