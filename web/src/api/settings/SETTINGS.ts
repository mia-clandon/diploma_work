import gql from 'graphql-tag';

const SETTINGS = gql`
  query settings {
    settings {
      id
      imageInEnclosure
      imageInDescription
      youtubeVideoIframe
      youtubeDescription
      instagramVideos
      twitterEmbeds
      twitterPrefixWithUsername
      twitterRemoveUrlFromTitle
      imageInMedia
      includeIFramesWhenPossible

      postLimit
      bundlePostLimit
      maxPostFeedLimit
      maxPostBundleLimit

      onlyAscii
      
      ouoToken
      enableOuo
    }
  }
`;

export default SETTINGS;
