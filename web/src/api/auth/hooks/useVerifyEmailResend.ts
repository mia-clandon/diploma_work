import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

export const RESEND_VERIFY_EMAIL = gql`
  mutation ResendVerifyEmail($email: String!) {
    resendVerifyEmail(email: $email)
  }
`;

function useVerifyEmailResend() {
  const apolloClient = useApolloClient();

  return (state: { email: string }, options: any = {}) => {
    return apolloClient.mutate({ mutation: RESEND_VERIFY_EMAIL, variables: state, ...options });
  };
}

export default useVerifyEmailResend;
