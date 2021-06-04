import gql from 'graphql-tag';

const REMOVE_ARTICLE_TO_COLLECTION = gql`
  mutation removeArticleFromCollection($input: CollectionRemoveArticleInput!) {
    removeArticleFromCollection(input: $input)
  }
`;

export default REMOVE_ARTICLE_TO_COLLECTION;
