import { useApolloClient } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import UPDATE_ISTRIAL from '../mutation/UPDATE_ISTRIAL';

function useUpdateIsTrial(userId: string, isTrial: boolean) {
  const apolloClient = useApolloClient();
  return async () => {
    try {
      await apolloClient.mutate({
        mutation: UPDATE_ISTRIAL,
        variables: { userId, isTrial },
        update: (
          cache,
          {
            data: {
              admin: { updateIsTrial: newTrialValue },
            },
          }
        ) => cache.modify({ id: `UserInfo:${userId}`, fields: { isTrial: () => newTrialValue.isTrial } }),
      });
    } catch (e) {
      errorMessage(getGqlError(e));
    }
  };
}

export default useUpdateIsTrial;
