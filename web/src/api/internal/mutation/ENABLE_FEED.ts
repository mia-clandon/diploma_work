import gql from 'graphql-tag';

const ENABLE_FEED = gql`
  mutation enableFeed($id: String!) {
    admin {
      enableFeed(id: $id)
    }
  }
`;

const ENABLE_ALL_FEEDS = gql`
  mutation enableAllUserFeeds($userId: String!) {
    admin {
      enableAllUserFeeds(userId: $userId)
    }
  }
`;

export { ENABLE_FEED, ENABLE_ALL_FEEDS };
