import gql from 'graphql-tag';

const ALL_USER_BUNDLES = gql`
  query allUserBundles($id: String!) {
    admin {
      allUserBundles(id: $id) {
        id
        title
        deleted
        isMaster
        createdAt
        feeds
        userId
      }
    }
  }
`;

export default ALL_USER_BUNDLES;
