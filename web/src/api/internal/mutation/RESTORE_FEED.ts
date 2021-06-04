import gql from 'graphql-tag';

const RESTORE_FEED = gql`
  mutation restoreOneFeed($id: String!) {
    admin {
      restoreOneFeed(id: $id)
    }
  }
`;
const RESTORE_ALL_FEEDS = gql`
  mutation restoreAllFeeds($userId: String!) {
    admin {
      restoreAllFeeds(userId: $userId)
    }
  }
`;

export { RESTORE_FEED, RESTORE_ALL_FEEDS };
