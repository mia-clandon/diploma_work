import gql from 'graphql-tag';

const SETTINGS_UPDATE = gql`
  mutation updateSettings(
    $id: ID
    $imageInEnclosure: Boolean!
    $imageInDescription: Boolean!
    $youtubeVideoIframe: Boolean!
    $youtubeDescription: Boolean!
    $instagramVideos: Boolean!
    $twitterEmbeds: Boolean!
    $twitterRemoveUrlFromTitle: Boolean!
    $twitterPrefixWithUsername: Boolean!
    $includeIFramesWhenPossible: Boolean!
    $imageInMedia: Boolean!
    $postLimit: Int
    $bundlePostLimit: Int
    $onlyAscii: Boolean!
    $ouoToken: String
    $enableOuo: Boolean
  ) {
    updateSettings(
      id: $id
      imageInEnclosure: $imageInEnclosure
      imageInDescription: $imageInDescription
      youtubeVideoIframe: $youtubeVideoIframe
      youtubeDescription: $youtubeDescription
      instagramVideos: $instagramVideos
      twitterEmbeds: $twitterEmbeds
      twitterRemoveUrlFromTitle: $twitterRemoveUrlFromTitle
      twitterPrefixWithUsername: $twitterPrefixWithUsername
      includeIFramesWhenPossible: $includeIFramesWhenPossible
      imageInMedia: $imageInMedia
      postLimit: $postLimit
      bundlePostLimit: $bundlePostLimit
      onlyAscii: $onlyAscii
      ouoToken: $ouoToken
      enableOuo: $enableOuo
    ) {
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
      bundlePostLimit
      maxPostFeedLimit
      maxPostBundleLimit

      onlyAscii
      
      enableOuo
      ouoToken
    }
  }
`;

export default SETTINGS_UPDATE;
