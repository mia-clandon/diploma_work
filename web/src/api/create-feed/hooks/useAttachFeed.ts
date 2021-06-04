import { useMutation } from '@apollo/client';
import ATTACH_FEED from '../../feed/mutation/ATTACH_FEED';

function useAttachFeed() {
  const [mutate] = useMutation(ATTACH_FEED);

  return async (feedId: string) => {
    const {
      data: { attachFeed },
    } = await mutate({
      variables: { feedId },
      update: (cache, { data: { attachFeed: feed } }) => {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            myFeeds: (state) => {
              return {
                rows: [feed, ...state.rows],
                count: state.count,
              };
            },
          },
        });
      },
    });

    return attachFeed;
  };
}

export default useAttachFeed;
