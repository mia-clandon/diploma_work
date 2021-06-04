import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, RemoveArticleFromCollectionDocument } from '../../hooks';
import * as Types from '../../operations';

function useRemoveArticleFromCollection() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<
    Types.RemoveArticleFromCollectionMutation,
    Types.RemoveArticleFromCollectionMutationVariables
  > = {}) => {
    await apolloClient.mutate({
      mutation: RemoveArticleFromCollectionDocument,
      ...opts,
      variables,
      update: (cache, { data: { removeArticleFromCollection: card } = {} }) => {
        if (!card) {
          return;
        }

        cache.modify({
          id: `Collection:${variables.input.collectionId}`,
          fields: {
            items: (value, { readField }) => {
              return value.filter((el) => readField('id', el) !== variables.input.articleId);
            },
          },
        });
      },
      refetchQueries: [{ query: FeedDocument, variables: { id: variables.input.collectionId } }],
    });
  };
}

export default useRemoveArticleFromCollection;
