import gql from 'graphql-tag';

const WIDGET_TICKER = gql`
  query widgetTicker($id: ID!) {
    widgetTicker(id: $id) {
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
        ...EmbedTickerSettings
      }
    }
  }
`;

export default WIDGET_TICKER;
