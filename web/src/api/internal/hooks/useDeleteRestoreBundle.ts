import { useApolloClient } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import getGqlError from 'src/lib/apollo/utils/getGqlError';
import ALL_USER_FEEDS from '../mutation/ALL_USER_FEEDS';
import { DELETE_ALL_BUNDLES, DELETE_BUNDLE } from '../mutation/DELETE_BUNDLE';
import { RESTORE_ALL_BUNDLES, RESTORE_BUNDLE } from '../mutation/RESTORE_BUNDLE';
import ALL_USER_BUNDLES from '../query/ALL_USER_BUNDLES';

export function useDeleteGroup(userId: string) {
  const apolloClient = useApolloClient();

  return async (bundleId?: string) => {
    try {
      if (bundleId) {
        await apolloClient.mutate({
          mutation: DELETE_BUNDLE,
          variables: { id: bundleId, userId },
          refetchQueries: [{ query: ALL_USER_BUNDLES, variables: { id: userId } }],
        });
      } else {
        await apolloClient.mutate({
          mutation: DELETE_ALL_BUNDLES,
          variables: { userId },
          refetchQueries: [{ query: ALL_USER_BUNDLES, variables: { id: userId } }],
        });
      }
    } catch (error) {
      errorMessage(getGqlError(error));
    }
  };
}

export function useRestoreGroup(userId: string) {
  const apolloClient = useApolloClient();

  return async (bundleId?: string) => {
    try {
      if (bundleId) {
        await apolloClient.mutate({
          mutation: RESTORE_BUNDLE,
          variables: { id: bundleId, userId },
          refetchQueries: [{ query: ALL_USER_BUNDLES, variables: { id: userId } }],
        });
      } else {
        await apolloClient.mutate({
          mutation: RESTORE_ALL_BUNDLES,
          variables: { userId },
          refetchQueries: [{ query: ALL_USER_BUNDLES, variables: { id: userId } }],
        });
      }
    } catch (error) {
      errorMessage(getGqlError(error));
    }
  };
}
