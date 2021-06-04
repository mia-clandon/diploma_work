import { useApolloClient } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import ALL_USER_FEEDS from '../mutation/ALL_USER_FEEDS';
import { DELETE_ALL_FEEDS, DELETE_FEED } from '../mutation/DELETE_FEED';
import { RESTORE_ALL_FEEDS, RESTORE_FEED } from '../mutation/RESTORE_FEED';

function useDeleteFeed(userId: string) {
  const apolloClient = useApolloClient();

  return async ({ feedId, deleted }: { feedId?: string; deleted: boolean }) => {
    try {
      if (feedId) {
        if (deleted) {
          await apolloClient.mutate({
            mutation: DELETE_FEED,
            variables: { id: feedId, userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        } else {
          await apolloClient.mutate({
            mutation: RESTORE_FEED,
            variables: { id: feedId, userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        }
      } else if (deleted) {
          await apolloClient.mutate({
            mutation: DELETE_ALL_FEEDS,
            variables: { userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        } else {
          await apolloClient.mutate({
            mutation: RESTORE_ALL_FEEDS,
            variables: { userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        }
    } catch (error) {
      errorMessage(getGqlError(error));
    }
  };
}

export default useDeleteFeed;
