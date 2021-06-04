import gql from 'graphql-tag';

const RESET_PASSWORD = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;

export default RESET_PASSWORD;
