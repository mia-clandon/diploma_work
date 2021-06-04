import gql from 'graphql-tag';

const VERIFY_EMAIL = gql`
  mutation verifyEmail($token: String!) {
    verifyEmail(token: $token)
  }
`;

export default VERIFY_EMAIL;
