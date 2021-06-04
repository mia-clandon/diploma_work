import gql from 'graphql-tag';

const ENABLE_FEEDS = gql`
  mutation enableFeeds($userId: String!) {
    admin {
      enableFeeds(userId: $userId)
    }
  }
`;

export default ENABLE_FEEDS;
