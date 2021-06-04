import gql from 'graphql-tag';

const CREATE_KNOWLEDGE_POST = gql`
  mutation createKnowledgePost($title: String!, $summary: String!, $body: String!, $published: Boolean, $categories: [ID!]!) {
    createKnowledgePost(title: $title, summary: $summary, body: $body, published: $published, categories: $categories) {
      ...KnowledgePost
    }
  }
`;

export default CREATE_KNOWLEDGE_POST;
