import gql from 'graphql-tag';

const KNOWLEDGE_RELATIONS = gql`
  query knowledgeRelations {
    knowledgeRelations {
      ...KnowledgeRelation
    }
  }

  fragment KnowledgeRelation on KnowledgeRelation {
    postId
    categoryId
  }
`;

export default KNOWLEDGE_RELATIONS;
