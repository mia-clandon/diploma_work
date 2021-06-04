import gql from 'graphql-tag';

const UPDATE_KNOWLEDGE_CATEGORY = gql`
  mutation updateKnowledgeCategory($categoryId: ID!, $title: String, $summary: String, $image: String, $color: String) {
    updateKnowledgeCategory(categoryId: $categoryId, title: $title, summary: $summary, image: $image, color: $color) {
      ...KnowledgeCategory
    }
  }
`;

export default UPDATE_KNOWLEDGE_CATEGORY;
