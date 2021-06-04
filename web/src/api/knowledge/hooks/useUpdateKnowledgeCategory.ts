import * as Apollo from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { UpdateKnowledgeCategoryDocument } from '../../hooks';
import * as Types from '../../operations';

function useUpdateKnowledgeCategory() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.UpdateKnowledgeCategoryMutation, Types.UpdateKnowledgeCategoryMutationVariables> = {}
  ) => {
    await apolloClient.mutate({ mutation: UpdateKnowledgeCategoryDocument, ...opts });
  };
}

export default useUpdateKnowledgeCategory;
