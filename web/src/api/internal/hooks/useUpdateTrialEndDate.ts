import { useApolloClient } from '@apollo/client';
import UPDATE_TRIALEND_DATE from '../mutation/UPDATE_TRIALEND_DATE';

function useUpdateTrialEndDate(userId: string, trialEnd: Date) {
  const apolloClient = useApolloClient();
  return async () => {
    await apolloClient.mutate({
      mutation: UPDATE_TRIALEND_DATE,
      variables: { userId, trialEnd: new Date(trialEnd).toISOString() },
      update: (
        cache,
        {
          data: {
            admin: { updateTrialEndDate },
          },
        }
      ) => {
        cache.modify({
          id: `UserInfo:${userId}`,
          fields: { trialEnd: () => updateTrialEndDate.trialEnd },
        });
      },
    });
  };
}

export default useUpdateTrialEndDate;
