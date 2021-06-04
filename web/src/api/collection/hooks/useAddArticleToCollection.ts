import { defaultDataIdFromObject, useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, AddArticleToCollectionDocument } from '../../hooks';
import * as Types from '../../operations';

function useAddArticleToCollection() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<
    Types.AddArticleToCollectionMutation,
    Types.AddArticleToCollectionMutationVariables
  > = {}) => {
    await apolloClient.mutate({
      mutation: AddArticleToCollectionDocument,
      ...opts,
      variables,
      update: (cache, { data: { addArticleToCollection: card } = {} }) => {
        if (!card) {
          return;
        }

        cache.modify({
          id: `Collection:${variables.input.collectionId}`,
          fields: {
            items: (value) => {
              const ref = defaultDataIdFromObject({ __typename: 'CollectionCard', ...card });

              return [{ __ref: ref }, ...value];
            },
          },
        });
      },
      refetchQueries: [
        { query: FeedDocument, variables: { id: variables.input.collectionId } },
        // { query: CollectionDocument, variables: { id: variables.input.collectionId } },
      ],
    });
  };
}

export default useAddArticleToCollection;
