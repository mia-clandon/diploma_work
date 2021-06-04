import gql from 'graphql-tag';

const CREATE_KNOWLEDGE_CATEGORY = gql`
  mutation createKnowledgeCategory($title: String!, $summary: String!, $image: String!, $color: String!) {
    createKnowledgeCategory(title: $title, summary: $summary, image: $image, color: $color) {
      ...KnowledgeCategory
    }
  }
`;

export default CREATE_KNOWLEDGE_CATEGORY;
