import gql from 'graphql-tag';

const WIDGET_FEED = gql`
  query widgetFeed($id: ID!) {
    widgetFeed(id: $id) {
      id
      status
      feed {
        id
        title
        description
        feedUrl
        siteUrl
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
      settings {
        ...EmbedFeedSettings
      }
    }
  }
`;

export default WIDGET_FEED;
