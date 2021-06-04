import gql from 'graphql-tag';

const ALL_USER_FEEDS = gql`
  query allUserFeeds($id: String!) {
    admin {
      allUserFeeds(id: $id) {
        id
        linkToFeed
        title
        disabled
        providerId
        lastRefreshed
        lastNewPosts
        deleted
      }
    }
  }
`;

export default ALL_USER_FEEDS;
