import gql from 'graphql-tag';

const CLEAR_CACHE = gql`
  mutation clearUserCache($id: ID!) {
    admin {
      clearUserCache(id: $id) {
        id
      }
    }
  }
`;

export default CLEAR_CACHE;
