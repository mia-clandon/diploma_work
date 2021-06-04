import gql from 'graphql-tag';

const REFETCH_FEED = gql`
  mutation refetchFeed($feedId: ID!) {
    admin {
      refetchFeed(feedId: $feedId)
    }
  }
`;

export default REFETCH_FEED;
