import gql from 'graphql-tag';

const CREATE_COLLECTION = gql`
  mutation createCollection($input: CollectionCreateInput!) {
    createCollection(input: $input) {
      ...Collection
    }
  }

  fragment Collection on Collection {
    id
    title
    description
    items {
      ...CollectionCard
    }
  }
`;

export default CREATE_COLLECTION;
