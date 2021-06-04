import gql from 'graphql-tag';

const FEED_DELETE = gql`
  mutation deleteFeed($id: ID!) {
    deleteFeed(id: $id)
  }
`;

export default FEED_DELETE;
