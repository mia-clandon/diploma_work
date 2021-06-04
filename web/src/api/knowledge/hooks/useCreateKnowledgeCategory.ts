import { CreateKnowledgeCategoryDocument } from '../../hooks';
import * as Apollo from '@apollo/client';
import * as Types from '../../operations';
import { useApolloClient } from '@apollo/client';
import { defaultDataIdFromObject } from '@apollo/client';

function useCreateKnowledgeCategory() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<
      Types.CreateKnowledgeCategoryMutation,
      Types.CreateKnowledgeCategoryMutationVariables
    > = {}
  ) => {
    const { data: { createKnowledgeCategory = null } = {} } = await apolloClient.mutate({
      mutation: CreateKnowledgeCategoryDocument,
      ...opts,
    });

    if (createKnowledgeCategory) {
      apolloClient.cache.modify({
        id: 'ROOT_QUERY',
        fields: {
          knowledgeCategories: (rows) => {
            const ref = defaultDataIdFromObject({ ...createKnowledgeCategory, __typename: 'KnowledgeCategoryRow' });
            const newRows = [...rows, { __ref: ref }];

            return newRows;
          },
        },
      });
    }
  };
}

export default useCreateKnowledgeCategory;
