import { ApolloClient } from '@apollo/client';
import { KnowledgeCategory } from '../../schemas';
import { KnowledgeCategoryDocument } from '../../hooks';

function writeKnowledgeCategory(apolloClient: ApolloClient<any>, knowledgeCategory: KnowledgeCategory) {
  apolloClient.writeQuery({
    query: KnowledgeCategoryDocument,
    variables: { categoryId: knowledgeCategory.id },
    data: { knowledgeCategory },
    broadcast: true,
  });
}

export default writeKnowledgeCategory;
