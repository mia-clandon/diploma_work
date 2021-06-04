import gql from 'graphql-tag';

const FEED = gql`
  query feed($id: ID!, $after: Int, $isPreview: Boolean) {
    feed(id: $id, after: $after, isPreview: $isPreview) {
      ...Feed
    }
  }

  fragment Feed on Feed {
    id
    title
    description
    feedUrl
    siteUrl
    imageUrl
    generator
    isCollection
    items {
      ...FeedItem
    }
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
    enableGlobalSettings
    settings {
      id
      imageInDescription
      imageInEnclosure
      imageInMedia
      youtubeVideoIframe
      youtubeDescription
      instagramVideos
      twitterEmbeds
      twitterPrefixWithUsername
      twitterRemoveUrlFromTitle
      includeIFramesWhenPossible
      postLimit
      bundlePostLimit
      maxPostFeedLimit
      maxPostBundleLimit
      onlyAscii
    }
  }

  fragment FeedItem on FeedItem {
    id
    title
    url
    description
    date
    enclosure {
      url
    }
  }
`;

export default FEED;
