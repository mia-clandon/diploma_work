import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ModerationDocument } from '../../hooks';

function useFilter(feedId?: string) {
  const router = useRouter();
  const id = router.query.id as string;

  const {
    loading,
    error,
    data: {
      moderation: { filter = null, feed = null, prefixList = [] as string[], postfixList = [] as string[] } = {},
    } = {},
  } = useQuery<{ moderation: any }, any>(ModerationDocument, {
    variables: { id },
  });

  return {
    id: feedId || id,

    error,
    loading,

    data: {
      feed,
      filter,
      prefixList,
      postfixList,
    },
  };
}

export default useFilter;
