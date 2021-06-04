import gql from 'graphql-tag';

const KNOWLEDGE_CATEGORIES = gql`
  query knowledgeCategories {
    knowledgeCategories {
      ...KnowledgeCategoryRow
    }
  }

  fragment KnowledgeCategoryRow on KnowledgeCategoryRow {
    id
    title
    summary
    image
  }
`;

export default KNOWLEDGE_CATEGORIES;
