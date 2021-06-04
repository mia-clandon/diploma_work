import gql from 'graphql-tag';

const DELETE_KNOWLEDGE_CATEGORY = gql`
  mutation deleteKnowledgeCategory($categoryId: ID!) {
    deleteKnowledgeCategory(categoryId: $categoryId)
  }
`;

export default DELETE_KNOWLEDGE_CATEGORY;
