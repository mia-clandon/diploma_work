import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FeedDocument, RemoveFilterRuleDocument } from '../../hooks';
import * as Types from '../../operations';

function useRemoveFilterRule() {
  const apolloClient = useApolloClient();

  return ({
    variables: { feedId, ...variables },
    ...opts
  }: Apollo.MutationHookOptions<
    Types.RemoveFilterRuleMutation,
    Types.RemoveFilterRuleMutationVariables & { feedId: string }
  >) => {
    return apolloClient.mutate<
      Types.RemoveFilterRuleMutation,
      Types.RemoveFilterRuleMutationVariables
    >({
      mutation: RemoveFilterRuleDocument,
      variables,
      ...opts,
      refetchQueries: [{ query: FeedDocument, variables: { id: feedId } }],
    });
  };
}

export default useRemoveFilterRule;
