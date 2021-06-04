import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { AddFilterRuleDocument, FeedDocument } from '../../hooks';
import * as Types from '../../operations';

function useAddFilterRule() {
  const apolloClient = useApolloClient();

  return ({
    variables: { feedId, ...variables },
    ...opts
  }: Apollo.MutationHookOptions<
    Types.AddFilterRuleMutation,
    Types.AddFilterRuleMutationVariables & { feedId: string }
  >) => {
    return apolloClient.mutate<Types.AddFilterRuleMutation, Types.AddFilterRuleMutationVariables>({
      mutation: AddFilterRuleDocument,
      variables,
      ...opts,
      refetchQueries: [{ query: FeedDocument, variables: { id: feedId } }],
    });
  };
}

export default useAddFilterRule;
