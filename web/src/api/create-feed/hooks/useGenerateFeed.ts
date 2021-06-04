import { useMutation } from '@apollo/client';
import { errorMessage } from '@rssapp/storybook/lab/Feedback/Snackbar/Snackbar';
import isValidUrl from '@rssapp/storybook/lib/validation/url';
import { CREATE_FEED } from '../../feed/hooks/useCreateFeed';

const useGenerateFeed = () => {
  const [mutate] = useMutation(CREATE_FEED);

  return async (
    url: string,
    {
      enableJs,
      ...params
    }: {
      simulate?: boolean;
      interfaceType?: 'GENERATOR' | 'BUILDER' | 'PICKER';
      isPreview?: boolean;
      scrapingRules?: any;
      enableJs?: boolean;
    } = {}
  ) => {
    if (!isValidUrl(url)) {
      errorMessage('Please enter valid URL');

      return null;
    }
    if (params.scrapingRules) {
      // eslint-disable-next-line no-param-reassign
      params.scrapingRules.isJS = enableJs;
    }

    const { data: { createFeed = null } = {} } = await mutate({
      variables: { url, isJs: enableJs, ...params },
      update: (proxy, { data: { createFeed: newFeed } }) => {
        if (!params.simulate) {
          proxy.modify({
            id: 'ROOT_QUERY',
            // optimistic: true,
            fields: {
              myFeeds: (state) => {
                return {
                  rows: [newFeed, ...state.rows],
                  count: state.count,
                };
              },
            },
          });
        }
      },
    });

    return createFeed;
  };
};

export default useGenerateFeed;
