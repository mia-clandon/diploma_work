import { useApolloClient } from '@apollo/client';
import { defaultDataIdFromObject } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { CreateCollectionCardDocument, FeedDocument } from '../../hooks';
import * as Types from '../../operations';

function useCreateCollectionCard() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<
    Types.CreateCollectionCardMutation,
    Types.CreateCollectionCardMutationVariables
  > = {}) => {
    const id = variables.input.collectionId;

    await apolloClient.mutate({
      mutation: CreateCollectionCardDocument,
      variables,
      ...opts,
      update: (cache, { data: { createCollectionCard: newCard } }) => {
        const key = `Collection:${id}`;

        cache.modify({
          id: key,
          // optimistic: true,
          fields: {
            items: (state) => {
              const ref = { __ref: defaultDataIdFromObject({ __typename: 'CollectionCard', ...newCard }) };
              const items = [ref, ...state];

              return items;
            },
          },
        });
      },
      refetchQueries: [{ query: FeedDocument, variables: { id } }],
    });
  };
}

export default useCreateCollectionCard;
