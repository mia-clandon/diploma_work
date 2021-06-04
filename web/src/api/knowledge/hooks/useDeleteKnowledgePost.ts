import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { DeleteKnowledgePostDocument } from '../../hooks';
import * as Types from '../../operations';

function useDeleteKnowledgePost() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.DeleteKnowledgePostMutation, Types.DeleteKnowledgePostMutationVariables> = {}
  ) => {
    await apolloClient.mutate({
      mutation: DeleteKnowledgePostDocument,
      ...opts,
      update: (cache, { data: { deleteKnowledgePost = null } = {} }) => {
        if (deleteKnowledgePost) {
          // apolloClient.cache.modify({
          //   id: 'ROOT_QUERY',
          //   fields: {
          //     knowledgeCategories: (value, { readField }) => {
          //       const rows = value.filter((ref) => readField('id', ref) !== opts.variables.categoryId.toString());
          //
          //       return rows;
          //     },
          //   },
          // });
        }
      },
    });
  };
}

export default useDeleteKnowledgePost;
