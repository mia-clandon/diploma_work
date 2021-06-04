import gql from 'graphql-tag';

const DELETE_BUNDLE = gql`
  mutation deleteOneGroup($id: String!, $userId: String!) {
    admin {
      deleteOneGroup(id: $id, userId: $userId)
    }
  }
`;
const DELETE_ALL_BUNDLES = gql`
  mutation deleteAllGroups($userId: String!) {
    admin {
      deleteAllGroups(userId: $userId)
    }
  }
`;

export { DELETE_BUNDLE, DELETE_ALL_BUNDLES };
