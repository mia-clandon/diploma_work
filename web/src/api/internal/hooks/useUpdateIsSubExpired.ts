import { useApolloClient } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import UPDATE_ISSUBEXPIRED from '../mutation/UPDATE_ISSUBEXPIRED';

function useUpdateIsSubExpired(userId: string, isSubExpired: boolean) {
  const apolloClient = useApolloClient();
  return async () => {
    try {
      await apolloClient.mutate({
        mutation: UPDATE_ISSUBEXPIRED,
        variables: { userId, isSubExpired },
        update: (
          cache,
          {
            data: {
              admin: { updateIsSubExpired: newSubExpired },
            },
          }
        ) => cache.modify({ id: `UserInfo:${userId}`, fields: { isSubExpired: () => newSubExpired.isSubExpired } }),
      });
    } catch (e) {
      errorMessage(getGqlError(e));
    }
  };
}

export default useUpdateIsSubExpired;
