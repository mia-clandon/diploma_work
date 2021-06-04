import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import USER_FEEDS from '../mutation/USER_FEEDS';

export interface IAdminFeed {
  id: string;
  linkToFeed: string;
  title: string;
  disabled: boolean;
  providerId: string;
  lastRefreshed?: number;
  lastNewPosts?: number;
  deleted: boolean;
}

const defaultState = { feeds: [] };

function useUserFeeds(userId?: string) {
  const router = useRouter();
  const { id } = router.query;

  const { data: { admin: { userFeeds = defaultState } = {} } = {} } = useQuery(USER_FEEDS, {
    variables: { id: userId || id },
  });

  return {
    id: userId || id,
    data: userFeeds.feeds as IAdminFeed[],
  };
}

export default useUserFeeds;
