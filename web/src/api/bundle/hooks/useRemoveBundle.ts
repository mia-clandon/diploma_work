import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

export const DELETE_GROUP = gql`
  mutation deleteGroup($id: ID!) {
    deleteGroup(id: $id) {
      id
      name
      description
      feeds
      isMaster
    }
  }
`;

function useRemoveBundle() {
  const [deleteBundle] = useMutation<
    { deleteGroup: any },
    any
  >(DELETE_GROUP);

  return (bundle: any) => {
    return deleteBundle({
      variables: { id: bundle.id },
      update: (cache, { data: { deleteGroup } }) => {
        cache.modify({
          id: 'ROOT_QUERY',
          // optimistic: true,
          fields: {
            groups: (state, { readField }) => {
              const arr = state.rows.filter((widgetRef) => readField('id', widgetRef) !== bundle.id.toString());

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

export default useRemoveBundle;
