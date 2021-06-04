import gql from 'graphql-tag';

const KNOWLEDGE_CATEGORY = gql`
  query knowledgeCategory($categoryId: ID!) {
    knowledgeCategory(categoryId: $categoryId) {
      ...KnowledgeCategory
    }
  }

  fragment KnowledgeCategory on KnowledgeCategory {
    id
    title
    summary
    image
    color
    posts {
      ...KnowledgePost
    }
  }
`;

export default KNOWLEDGE_CATEGORY;
