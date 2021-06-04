import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, UpdateCollectionCardDocument } from '../../hooks';
import * as Types from '../../operations';
import moveCollectionCard from '../utils/moveCollectionCard';

function useUpdateCollectionCard() {
  const apolloClient = useApolloClient();

  return async ({
    variables: { fromCollection, ...variables },
    ...opts
  }: Apollo.MutationHookOptions<
    Types.UpdateCollectionCardMutation,
    Types.UpdateCollectionCardMutationVariables & { fromCollection?: string }
  > = {}) => {
    await apolloClient.mutate({
      mutation: UpdateCollectionCardDocument,
      variables,
      ...opts,
      refetchQueries: [{ query: FeedDocument, variables: { id: variables.input.collectionId } }],
      update: (cache, { data: { updateCollectionCard: card } = {} }) => {
        if (!card) {
          return;
        }

        if (fromCollection) {
          moveCollectionCard(cache, card, fromCollection, variables.input.collectionId);
        }
      },
    });
  };
}

export default useUpdateCollectionCard;
