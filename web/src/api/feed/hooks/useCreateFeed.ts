import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import modifyMyFeeds from '../../../features/app/feed-list/utils/modify';

export const CREATE_FEED = gql`
  mutation createFeed(
    $url: String
    $simulate: Boolean
    $interfaceType: FeedInterfaceType
    $isPreview: Boolean
    $scrapingRules: ScrapingRulesInput
    $requestObject: RequestObjectInput
  ) {
    createFeed(
      url: $url
      simulate: $simulate
      scrapingRules: $scrapingRules
      requestObject: $requestObject
      isPreview: $isPreview
      interfaceType: $interfaceType
    ) {
      title
      description
      feedUrl
      siteUrl
      siteName
      imageUrl
      generator
      items {
        title
        url
        description
        date
        enclosure {
          url
        }
      }
    }
  }
`;

function useCreateFeed() {
  const [mutate] = useMutation(CREATE_FEED);

  return (params) => {
    mutate({
      variables: params,
      update: (cache, { data: { createFeed: newFeed } }) => {
        modifyMyFeeds(cache, (rows) => [newFeed, ...rows]);
      },
    }).then();
  };
}

export default useCreateFeed;
