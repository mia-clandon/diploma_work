import gql from 'graphql-tag';

const DISABLE_FEED = gql`
  mutation disableFeed($id: String!) {
    admin {
      disableFeed(id: $id)
    }
  }
`;
const DISABLE_ALL_FEED = gql`
  mutation disableAllUserFeeds($userId: String!) {
    admin {
      disableAllUserFeeds(userId: $userId)
    }
  }
`;

export { DISABLE_FEED, DISABLE_ALL_FEED };
