import gql from 'graphql-tag';

const RESTORE_BUNDLE = gql`
  mutation restoreOneGroup($id: String!, $userId: String!) {
    admin {
      restoreOneGroup(id: $id, userId: $userId)
    }
  }
`;
const RESTORE_ALL_BUNDLES = gql`
  mutation restoreAllGroups($userId: String!) {
    admin {
      restoreAllGroups(userId: $userId)
    }
  }
`;

export { RESTORE_BUNDLE, RESTORE_ALL_BUNDLES };
