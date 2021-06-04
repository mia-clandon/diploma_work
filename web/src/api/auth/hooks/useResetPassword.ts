import { useApolloClient } from '@apollo/client';
import RESET_PASSWORD from '../mutation/RESET_PASSWORD';

function useResetPassword() {
  const apolloClient = useApolloClient();

  return (state: { email: string }, options: any = {}) => {
    return apolloClient.mutate({ mutation: RESET_PASSWORD, variables: state, ...options });
  };
}

export default useResetPassword;
