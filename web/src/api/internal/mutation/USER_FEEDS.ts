import gql from 'graphql-tag';

const USER_FEEDS = gql`
  query userFeeds($id: ID!) {
    admin {
      userFeeds(id: $id) {
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

export default USER_FEEDS;
