import gql from 'graphql-tag';

const FEED_UPDATE = gql`
  mutation updateFeed($id: ID!, $title: String, $description: String, $tags: [ID!], $enableGlobalSettings: Boolean) {
    updateFeed(
      id: $id
      title: $title
      description: $description
      tags: $tags
      enableGlobalSettings: $enableGlobalSettings
    ) {
      id
      title
      description
      imageUrl
      siteUrl
      siteName
      enableGlobalSettings
      settings {
        id
        imageInEnclosure
        imageInDescription
        youtubeVideoIframe
        youtubeDescription
        instagramVideos
        twitterRemoveUrlFromTitle
        twitterEmbeds
        twitterPrefixWithUsername
        includeIFramesWhenPossible
        imageInMedia
        postLimit
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
  }
`;

export default FEED_UPDATE;
