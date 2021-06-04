import { useApolloClient } from '@apollo/client';
import { useDeleteKeyValueMutation } from '../../hooks';

function useDeleteKeyValue(...args: Parameters<typeof useDeleteKeyValueMutation>) {
  const apolloClient = useApolloClient();

  const [update, info] = useDeleteKeyValueMutation(...args);

  const onUpdate: typeof update = async (...args2) => {
    const res = await update(...args2);
    const {key} = args2[0].variables;

    apolloClient.cache.modify({
      id: 'ROOT_QUERY',
      fields: {
        admin: (value) => {
          const keyValues = value.keyValues.filter((ref) => ref.key !== key.toString());

          return {
            ...value,
            keyValues,
          };
        },
      },
    });

    return res;
  };

  return [onUpdate, info] as const;
}

export default useDeleteKeyValue;
