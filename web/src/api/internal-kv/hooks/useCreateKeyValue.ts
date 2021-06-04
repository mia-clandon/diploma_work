import { useCreateKeyValueMutation } from '../../hooks';

function useCreateKeyValue(...args: Parameters<typeof useCreateKeyValueMutation>) {
  const opts = args[0];
  const res = useCreateKeyValueMutation({
    ...opts,
    update: (cache, { data: { admin: { createKeyValue = null } = {} } = {} }) => {
      if (createKeyValue) {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            admin: (value) => {
              const ref = { __typename: 'KeyValue', ...createKeyValue };
              const keyValues = [...value.keyValues, ref];

              return {
                ...value,
                keyValues,
              };
            },
          },
        });
      }
    },
  });

  return res;
}

export default useCreateKeyValue;
