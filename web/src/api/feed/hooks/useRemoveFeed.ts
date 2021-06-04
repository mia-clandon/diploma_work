import { useMutation } from '@apollo/client';
import FEED_DELETE from '../mutation/FEED_DELETE';
import modifyMyFeeds from '../../../features/app/feed-list/utils/modify';

function useRemoveFeed() {
  const [mutate] = useMutation(FEED_DELETE);

  return async (feed) => {
    await mutate({
      variables: { id: feed.id },
      update: (cache, { data: { deleteFeed } }) => {
        if (deleteFeed) {
          cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              myFeeds: (state, { readField }) => {
                const arr = state.rows.filter((itemRef) => readField('id', itemRef) !== feed.id.toString());

                return {
                  ...state,
                  rows: arr,
                  count: state.count - 1,
                };
              },
            },
          });

          cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              collections: (state, { readField }) => {
                const arr = state.rows.filter((itemRef) => readField('id', itemRef) !== feed.id.toString());

                return {
                  ...state,
                  rows: arr,
                  count: state.count - 1,
                };
              },
            },
          });
        }
      },
    });
  };
}

export default useRemoveFeed;
