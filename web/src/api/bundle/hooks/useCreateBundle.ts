import { defaultDataIdFromObject } from '@apollo/client';
import { CreateGroupDocument } from '../../hooks';
import { useApolloClient } from '@apollo/client';

function useCreateBundle() {
  const apolloClient = useApolloClient();

  return (params: { title: string; feeds: string[]; tags?: string[] }) => {
    return apolloClient.mutate<{ createGroup: any }, any>({
      mutation: CreateGroupDocument,
      variables: params,
      update: (cache, { data: { createGroup: newGroup } }) => {
        cache.modify({
          id: 'ROOT_QUERY',
          // optimistic: true,
          fields: {
            groups: (state) => {
              const arr = [{ __ref: defaultDataIdFromObject({ __typename: 'Group', ...newGroup }) }, ...state.rows];

              return {
                ...state,
                rows: arr,
                count: state.count + 1,
              };
            },
          },
        });
      },
    });
  };
}

export default useCreateBundle;
