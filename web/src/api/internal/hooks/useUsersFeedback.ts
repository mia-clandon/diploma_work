import { useQuery } from '@apollo/client';
import FEEDBACK from '../mutation/FEEDBACK';
import { IAdminFeed } from './useUserFeeds';

const defaultState = { rows: [], count: 0 };

function useUserFeedback(opts: { page: number; rowsPerPage: number; period: string }) {
  const { data: { admin: { getUserFeedback = defaultState } = {} } = {} } = useQuery(FEEDBACK, {
    variables: { page: opts.page, rowsPerPage: opts.rowsPerPage, period: opts.period },
  });

  return {
    data: getUserFeedback,
  };
}

export default useUserFeedback;
