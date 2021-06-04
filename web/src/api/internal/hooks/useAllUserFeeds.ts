import { useQuery } from '@apollo/client';
import ALL_USER_FEEDS from '../mutation/ALL_USER_FEEDS';
import { IAdminFeed } from './useUserFeeds';

const feeds: IAdminFeed[] = [];

function useAllUserFeeds(userId?: string) {
  const { data: { admin: { allUserFeeds = feeds } = {} } = {} } = useQuery(ALL_USER_FEEDS, {
    variables: { id: userId },
  });

  return {
    id: userId,
    data: allUserFeeds as IAdminFeed[],
  };
}

export default useAllUserFeeds;
