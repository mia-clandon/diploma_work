import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { UpdateCollectionDocument } from '../../hooks';
import * as Types from '../../operations';

function useUpdateCollection() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.UpdateCollectionMutation, Types.UpdateCollectionMutationVariables> = {}
  ) => {
    await apolloClient.mutate({
      mutation: UpdateCollectionDocument,
      ...opts,
    });
  };
}

export default useUpdateCollection;
