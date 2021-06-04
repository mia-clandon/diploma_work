import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const VERIFY_NEW_EMAIL = gql`
  mutation verifyNewEmail($email: String!, $password: String!, $token: String!) {
    verifyNewEmail(email: $email, password: $password, token: $token) {
      user {
        id
        email
      }
    }
  }
`;

function useVerifyNewEmail() {
  const [mutate] = useMutation(VERIFY_NEW_EMAIL);

  return async ({ email, token, password }) => {
    await mutate({
      variables: {
        email,
        token,
        password,
      },
    });
  };
}

export default useVerifyNewEmail;
