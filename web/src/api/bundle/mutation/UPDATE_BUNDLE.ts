import gql from 'graphql-tag';

const UPDATE_BUNDLE = gql`
  mutation updateGroup(
    $id: ID!
    $title: String
    $description: String
    $feeds: [String!]
    $isLimitPostsOfFeed: Boolean
    $limitPostsOfFeed: Int
    $tags: [ID!]
    $enableGlobalSettings: Boolean
  ) {
    updateGroup(
      id: $id
      title: $title
      description: $description
      feeds: $feeds
      isLimitPostsOfFeed: $isLimitPostsOfFeed
      limitPostsOfFeed: $limitPostsOfFeed
      tags: $tags
      enableGlobalSettings: $enableGlobalSettings
    ) {
      ...Group
    }
  }
`;

export default UPDATE_BUNDLE;
