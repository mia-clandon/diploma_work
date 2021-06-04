import gql from 'graphql-tag';

const DELETE_KNOWLEDGE_POST = gql`
  mutation deleteKnowledgePost($postId: ID!) {
    deleteKnowledgePost(postId: $postId)
  }
`;

export default DELETE_KNOWLEDGE_POST;
