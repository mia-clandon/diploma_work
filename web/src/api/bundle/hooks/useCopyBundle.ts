import { useApolloClient } from '@apollo/client';
import { CopyGroupDocument } from '../../hooks';
import { defaultDataIdFromObject } from '@apollo/client';

function useCopyBundle() {
  const apolloClient = useApolloClient();

  return (params: {
    title: string;
    feeds: string[];
    tags?: string[];
    filter: boolean;
    embeds: boolean;
    settings: boolean;
  }): any => {
    return apolloClient.mutate<{ createGroup: any }, any>({
      mutation: CopyGroupDocument,
      variables: params,
      update: (cache, { data: { copyGroup: newGroup } }: any) => {
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

export default useCopyBundle;
