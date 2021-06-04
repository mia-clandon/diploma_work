import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, UpdateFilterRuleDocument } from '../../hooks';
import * as Types from '../../operations';

function useUpdateFilterRule() {
  const apolloClient = useApolloClient();

  return ({
    variables: { feedId, ...variables },
    ...opts
  }: Apollo.MutationHookOptions<
    Types.UpdateFilterRuleMutation,
    Types.UpdateFilterRuleMutationVariables & { feedId: string }
  >) => {
    return apolloClient.mutate<
      Types.UpdateFilterRuleMutation,
      Types.UpdateFilterRuleMutationVariables
    >({
      mutation: UpdateFilterRuleDocument,
      variables,
      ...opts,
      refetchQueries: [{ query: FeedDocument, variables: { id: feedId } }],
    });
  };
}

export default useUpdateFilterRule;
