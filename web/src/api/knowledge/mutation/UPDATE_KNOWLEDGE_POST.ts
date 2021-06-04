import gql from 'graphql-tag';

const UPDATE_KNOWLEDGE_POST = gql`
  mutation updateKnowledgePost(
    $postId: ID!
    $title: String
    $summary: String
    $body: String
    $published: Boolean
    $categories: [ID!]
  ) {
    updateKnowledgePost(
      postId: $postId
      title: $title
      summary: $summary
      body: $body
      published: $published
      categories: $categories
    ) {
      ...KnowledgePost
    }
  }
`;

export default UPDATE_KNOWLEDGE_POST;
