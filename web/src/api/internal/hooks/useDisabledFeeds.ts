import { useApolloClient } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import ALL_USER_FEEDS from '../mutation/ALL_USER_FEEDS';
import { DISABLE_ALL_FEED, DISABLE_FEED } from '../mutation/DISABLE_FEED';
import { ENABLE_ALL_FEEDS, ENABLE_FEED } from '../mutation/ENABLE_FEED';

function useDisableFeeds(userId: string) {
  const apolloClient = useApolloClient();

  return async ({ feedId, disabled }: { feedId?: string; disabled: boolean }) => {
    try {
      if (feedId) {
        if (disabled) {
          await apolloClient.mutate({
            mutation: DISABLE_FEED,
            variables: { id: feedId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        } else {
          await apolloClient.mutate({
            mutation: ENABLE_FEED,
            variables: { id: feedId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        }
      } else if (disabled) {
          await apolloClient.mutate({
            mutation: DISABLE_ALL_FEED,
            variables: { userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        } else {
          await apolloClient.mutate({
            mutation: ENABLE_ALL_FEEDS,
            variables: { userId },
            refetchQueries: [{ query: ALL_USER_FEEDS, variables: { id: userId } }],
          });
        }
    } catch (error) {
      errorMessage(getGqlError(error));
    }
  };
}

export default useDisableFeeds;
