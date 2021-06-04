import gql from 'graphql-tag';

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    admin {
      deleteUser(id: $id) {
        id
      }
    }
  }
`;

export default DELETE_USER;
