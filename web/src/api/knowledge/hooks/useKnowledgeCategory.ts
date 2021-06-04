import { useKnowledgeCategoryQuery } from '../../hooks';
import * as Apollo from '@apollo/client';
import * as Types from '../../operations';
import writeKnowledgePost from '../utils/writeKnowledgePost';
import { useApolloClient } from '@apollo/client';

function useKnowledgeCategory(
  baseOptions: Apollo.QueryHookOptions<Types.KnowledgeCategoryQuery, Types.KnowledgeCategoryQueryVariables>
) {
  const apolloClient = useApolloClient();

  const data = useKnowledgeCategoryQuery({
    ...baseOptions,
    onCompleted: ({ knowledgeCategory: { posts } }) => {
      for (const post of posts) {
        writeKnowledgePost(apolloClient, post);
      }
    },
  });

  return data;
}

export default useKnowledgeCategory;
