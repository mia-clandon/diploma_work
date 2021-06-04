import { useApolloClient } from '@apollo/client';
import UPDATE_BUNDLE from '../mutation/UPDATE_BUNDLE';
import FEED from '../../feed/query/FEED';
import { MODERATION } from '../../../.old-to-delete/lib/gql';
import { UpdateGroupDocument } from '../../hooks';

function useUpdateBundle(bundleId?: string) {
  const apolloClient = useApolloClient();

  return async (state: {
    id?: string;
    title?: string;
    description?: string;
    feeds?: string[];
    tags?: string[];
    isLimitPostsOfFeed?: boolean;
    limitPostsOfFeed?: number;
    enableGlobalSettings?: boolean;
  }) => {
    const id = state.id || bundleId;

    await apolloClient.mutate<{ updateGroup: any }, any>({
      mutation: UpdateGroupDocument,
      variables: {
        id,
        title: state.title,
        description: state.description,
        enableGlobalSettings: state.enableGlobalSettings,
        feeds: state.feeds,
        tags: state.tags,
        isLimitPostsOfFeed: state.isLimitPostsOfFeed,
        limitPostsOfFeed: state.limitPostsOfFeed,
      },
      refetchQueries: [
        { query: FEED, variables: { id } },
        { query: MODERATION, variables: { id } },
      ],
    });
  };
}

export default useUpdateBundle;
