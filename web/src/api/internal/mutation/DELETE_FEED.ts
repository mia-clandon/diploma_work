import gql from 'graphql-tag';

const DELETE_FEED = gql`
  mutation deleteOneFeed($id: String!, $userId: String!) {
    admin {
      deleteOneFeed(id: $id, userId: $userId)
    }
  }
`;
const DELETE_ALL_FEEDS = gql`
  mutation deleteAllFeeds($userId: String!) {
    admin {
      deleteAllFeeds(userId: $userId)
    }
  }
`;

export { DELETE_FEED, DELETE_ALL_FEEDS };
