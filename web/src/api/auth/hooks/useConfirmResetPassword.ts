import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

export const CONFIRM_RESET_PASSWORD = gql`
  mutation ConfirmResetPassword($password: String!, $token: String!) {
    confirmResetPassword(password: $password, token: $token)
  }
`;

function useConfirmResetPassword() {
  const apolloClient = useApolloClient();

  return async (state: { token: string; password: string }, options: any = {}) => {
    const { data: { confirmResetPassword = null } = {} } = await apolloClient.mutate({
      mutation: CONFIRM_RESET_PASSWORD,
      variables: state,
      ...options,
    });

    return confirmResetPassword;
  };
}

export default useConfirmResetPassword;
