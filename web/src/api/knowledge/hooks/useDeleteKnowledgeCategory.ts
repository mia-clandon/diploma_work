import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { DeleteKnowledgeCategoryDocument } from '../../hooks';
import * as Types from '../../operations';

function useDeleteKnowledgeCategory() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<
      Types.DeleteKnowledgeCategoryMutation,
      Types.DeleteKnowledgeCategoryMutationVariables
    > = {}
  ) => {
    await apolloClient.mutate({
      mutation: DeleteKnowledgeCategoryDocument,
      ...opts,
      update: (cache, { data: { deleteKnowledgeCategory = null } = {} }) => {
        if (deleteKnowledgeCategory) {
          apolloClient.cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              knowledgeCategories: (value, { readField }) => {
                const rows = value.filter((ref) => readField('id', ref) !== opts.variables.categoryId.toString());

                return rows;
              },
            },
          });
        }
      },
    });
  };
}

export default useDeleteKnowledgeCategory;
