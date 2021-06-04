import { useApolloClient } from '@apollo/client';

function useClearBundles() {
  const apolloClient = useApolloClient();

  return () => {
    try {
      // @ts-ignore
      const cache = apolloClient.cache.data.data;

      // eslint-disable-next-line no-restricted-syntax
      for (const key in cache) {
        if (key.includes('Group')) {
          apolloClient.cache.evict({ id: key });
        }
      }
    } catch (e) {
      // ignore
    }
    try {
      apolloClient.cache.evict({ id: 'ROOT_QUERY', fieldName: 'groups' });
    } catch (e) {
      // ignore
    }
  };
}

export default useClearBundles;
