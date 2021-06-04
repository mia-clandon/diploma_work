import gql from 'graphql-tag';

const ADD_ARTICLE_TO_COLLECTION = gql`
  mutation addArticleToCollection($input: CollectionAddArticleInput!) {
    addArticleToCollection(input: $input) {
      ...CollectionCard
    }
  }
`;

export default ADD_ARTICLE_TO_COLLECTION;
