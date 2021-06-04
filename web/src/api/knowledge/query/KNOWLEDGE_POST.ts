import gql from 'graphql-tag';

const KNOWLEDGE_POST = gql`
  query knowledgePost($postId: ID!) {
    knowledgePost(postId: $postId) {
      ...KnowledgePost
    }
  }
  
  fragment KnowledgePost on KnowledgePost {
    id
    title
    summary
    body
    publishedAt
  }
`;

export default KNOWLEDGE_POST;
