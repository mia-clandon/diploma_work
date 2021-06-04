import gql from 'graphql-tag';

export const EMBED = gql`
  query embed($id: ID!, $type: EmbedType!, $version: String, $create: Boolean) {
    embed(id: $id, type: $type, version: $version, create: $create) {
      ...Embed
    }
  }

  fragment Embed on Embed {
    id
    status

    feed {
      ...FeedData
    }

    settings {
      ... on EmbedWallSettings {
        ...EmbedWallSettings
      }
      ... on EmbedListSettings {
        ...EmbedListSettings
      }
      ... on EmbedCarouselSettings {
        ...EmbedCarouselSettings
      }
      ... on EmbedFeedSettings {
        ...EmbedFeedSettings
      }
      ... on EmbedTickerSettings {
        ...EmbedTickerSettings
      }
      ... on EmbedGridSettings {
        ...EmbedGridSettings
      }
    }
  }

  fragment FeedData on Feed {
    id
    title
    description
    feedUrl
    siteUrl
    imageUrl
    generator
    items {
      ...FeedItem
    }
  }
`;
