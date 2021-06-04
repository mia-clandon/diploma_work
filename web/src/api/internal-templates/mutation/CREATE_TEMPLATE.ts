import gql from 'graphql-tag';

const CREATE_TEMPLATE = gql`
  mutation createTemplate($title: String!, $type: String!, $feedId: ID!) {
    admin {
      createTemplate(title: $title, type: $type, feedId: $feedId) {
        ...EmbedTemplate
      }
    }
  }

  fragment EmbedTemplate on EmbedTemplate {
    id
    title
    feedId
    type
    active
    weight
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

    modifiedAt
    createdAt
  }
`;

export default CREATE_TEMPLATE;
