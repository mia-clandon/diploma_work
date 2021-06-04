import gql from 'graphql-tag';

const UPDATE_PASSWORD = gql`
  mutation updatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;

export default UPDATE_PASSWORD;
