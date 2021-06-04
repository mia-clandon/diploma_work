import gql from 'graphql-tag';

const GROUP = gql`
  query group($id: ID!) {
    group(id: $id) {
      ...Group
    }
  }

  fragment Group on Group {
    id
    name
    description
    feeds
    feedsData {
      id
      title
      imageUrl
      isCollection
    }
    isMaster
    createdAt
    isLimitPostsOfFeed
    limitPostsOfFeed
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
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
  }
`;

export default GROUP;
