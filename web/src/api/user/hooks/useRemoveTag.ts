import { useMutation } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import TAG_REMOVE from '../query/TAG_REMOVE';
import getGqlError from '@rssapp/storybook/lib/apollo/utils/getGqlError';

function useRemoveTag() {
  const [create] = useMutation(TAG_REMOVE);

  return async (id: string) => {
    try {
      const { data: { removeTag: res = null } = {} } = await create({
        variables: { id },
        update: (proxy, { data: { removeTag } }) => {
          proxy.modify({
            id: 'ROOT_QUERY',
            fields: {
              tags: (state, { readField }) => {
                return state.filter((el) => readField('id', el) !== removeTag.id);
              },
            },
          });
        },
      });

      return res;
    } catch (e) {
      errorMessage(getGqlError(e));
    }
  };
}

export default useRemoveTag;
