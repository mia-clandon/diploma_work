import * as Apollo from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { UpdateTemplateDocument, useCreateTemplateMutation } from '../../hooks';
import * as Types from '../../operations';

function useUpdateTemplate() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables> = {}
  ) => {
    await apolloClient.mutate({ mutation: UpdateTemplateDocument, ...opts });
  };
}

export default useUpdateTemplate;
