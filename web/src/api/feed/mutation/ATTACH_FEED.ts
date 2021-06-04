import gql from 'graphql-tag';

const ATTACH_FEED = gql`
  mutation attachFeed($feedId: ID!) {
    attachFeed(feedId: $feedId) {
      id
    }
  }
`;

export default ATTACH_FEED;
