import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { DeleteCollectionDocument } from '../../hooks';
import * as Types from '../../operations';

function useDeleteCollection() {
  const apolloClient = useApolloClient();

  return async ({
    variables,
    ...opts
  }: Apollo.MutationHookOptions<Types.DeleteCollectionMutation, Types.DeleteCollectionMutationVariables> = {}) => {
    await apolloClient.mutate({
      mutation: DeleteCollectionDocument,
      variables,
      ...opts,
      update: (cache) => {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            collections: (state, { readField }) => {
              const arr = state.rows.filter((itemRef) => readField('id', itemRef) !== variables.id.toString());

              return {
                ...state,
                rows: arr,
                count: state.count - 1,
              };
            },
          },
        });
      },
    });
  };
}

export default useDeleteCollection;
