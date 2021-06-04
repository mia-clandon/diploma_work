import { useApolloClient } from '@apollo/client';
import { errorMessage, infoMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import ENABLE_FEEDS from '../mutation/ENABLE_FEEDS';

function useEnableFeeds() {
  const apolloClient = useApolloClient();
  return async (userId: string) => {
    try {
      await apolloClient.mutate({
        mutation: ENABLE_FEEDS,
        variables: { userId },
      });
      infoMessage('All user feeds enabled');
    } catch (e) {
      errorMessage(getGqlError(e));
    }
  };
}

export default useEnableFeeds;
