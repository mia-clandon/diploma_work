import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { DeleteCollectionCardDocument, FeedDocument } from '../../hooks';
import * as Types from '../../operations';

function useDeleteCollectionCard() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<
    Types.DeleteCollectionCardMutation,
    Types.DeleteCollectionCardMutationVariables
  > = {}) => {
    const id = variables.collectionId;

    await apolloClient.mutate({
      mutation: DeleteCollectionCardDocument,
      variables,
      ...opts,
      update: (cache) => {
        const key = `Collection:${id}`;

        cache.modify({
          id: key,
          fields: {
            items: (state, { readField }) => {
              const arr = state.filter((itemRef) => readField('id', itemRef) !== variables.id.toString());

              return arr;
            },
          },
        });
      },
      refetchQueries: [{ query: FeedDocument, variables: { id } }],
    });
  };
}

export default useDeleteCollectionCard;
