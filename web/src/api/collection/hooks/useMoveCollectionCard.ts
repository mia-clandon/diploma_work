import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, MoveCollectionCardDocument } from '../../hooks';
import * as Types from '../../operations';
import moveCollectionCard from '../utils/moveCollectionCard';

function useMoveCollectionCard() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<Types.MoveCollectionCardMutation, Types.MoveCollectionCardMutationVariables> = {}) => {
    await apolloClient.mutate({
      mutation: MoveCollectionCardDocument,
      ...opts,
      variables,
      update: (cache, { data: { moveCollectionCard: card } = {} }) => {
        if (!card) {
          return;
        }

        moveCollectionCard(cache, card, variables.fromCollection, variables.toCollection);
      },
      refetchQueries: [
        { query: FeedDocument, variables: { id: variables.fromCollection } },
        { query: FeedDocument, variables: { id: variables.toCollection } },
      ],
    });
  };
}

export default useMoveCollectionCard;
