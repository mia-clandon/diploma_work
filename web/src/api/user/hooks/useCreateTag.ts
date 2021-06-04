import { useApolloClient, useMutation, defaultDataIdFromObject } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/store';
import TAG_CREATE from '../query/TAG_CREATE';
import getGqlError from '../../../lib/apollo/utils/getGqlError';

function useCreateTag() {
  const apolloClient = useApolloClient();
  const [create] = useMutation(TAG_CREATE);

  return async (label: string, target?: { resourceId: string; resourceType: 'feed' | 'group' }) => {
    try {
      const { data: { createTag: res = null } = {} } = await create({
        variables: { label, ...target },
        update: (
          proxy,
          {
            data: {
              createTag: { tag, featureTag },
            },
          }
        ) => {
          proxy.modify({
            id: 'ROOT_QUERY',
            fields: {
              tags: (state) => {
                const ref = defaultDataIdFromObject({ __typename: 'Tag', ...tag });

                return [{ __ref: ref }, ...state];
              },
            },
          });

          if (target && featureTag) {
            const featureTagRef = { __ref: defaultDataIdFromObject({ __typename: 'FeatureTag', ...featureTag }) };

            if (target.resourceType === 'feed') {
              apolloClient.cache.modify({
                id: `Feed:${target.resourceId}`,
                fields: {
                  tags: (s) => [...s, featureTagRef],
                },
              });
            } else {
              apolloClient.cache.modify({
                id: `Group:${target.resourceId}`,
                fields: {
                  tags: (s) => [...s, featureTagRef],
                },
              });
            }
          }
        },
      });

      return res;
    } catch (e) {
      errorMessage(getGqlError(e));
    }
  };
}

export default useCreateTag;
