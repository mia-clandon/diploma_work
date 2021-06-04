import * as Apollo from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { UpdateKnowledgePostDocument } from '../../hooks';
import * as Types from '../../operations';

function useUpdateKnowledgePost() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.UpdateKnowledgePostMutation, Types.UpdateKnowledgePostMutationVariables> = {}
  ) => {
    await apolloClient.mutate({ mutation: UpdateKnowledgePostDocument, ...opts });
  };
}

export default useUpdateKnowledgePost;
