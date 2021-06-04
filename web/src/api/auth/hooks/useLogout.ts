import { useApolloClient } from '@apollo/client';
import cookie from 'cookie';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

function useLogout() {
  const apolloClient = useApolloClient();
  const router = useRouter();

  return async (target = '/signin') => {
    try {
      await apolloClient.mutate({ mutation: LOGOUT });

      await apolloClient.cache.reset();
      await apolloClient.clearStore();
      // eslint-disable-next-line no-empty

      router.push(target).then();
    } catch (e) {}
  };
}

export default useLogout;
