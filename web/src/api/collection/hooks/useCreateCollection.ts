import { useApolloClient } from '@apollo/client';
import { defaultDataIdFromObject } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { CreateCollectionDocument } from '../../hooks';
import * as Types from '../../operations';

function useCreateCollection() {
  const apolloClient = useApolloClient();

  return async ({
    update,
    ...opts
  }: Apollo.MutationHookOptions<Types.CreateCollectionMutation, Types.CreateCollectionMutationVariables> = {}) => {
    await apolloClient.mutate({
      mutation: CreateCollectionDocument,
      ...opts,
      update: (cache, mutationResult) => {
        const {
          data: { createCollection: newCollection },
        } = mutationResult;

        cache.modify({
          id: 'ROOT_QUERY',
          // optimistic: true,
          fields: {
            collections: (state) => {
              const ref = { __ref: defaultDataIdFromObject({ __typename: 'Collection', ...newCollection }) };
              const arr = [...state.rows, ref];

              return {
                ...state,
                rows: arr,
                count: state.count + 1,
              };
            },
          },
        });

        if (update) {
          update(cache, mutationResult);
        }
      },
    });
  };
}

export default useCreateCollection;
