import gql from 'graphql-tag';

const COLLECTION = gql`
  query collection($id: ID!) {
    collection(id: $id) {
      ...CollectionRow
    }
  }

  fragment CollectionRow on Collection {
    id
    title
    description
    date
    author
    items {
      ...CollectionCard
    }
  }
`;

export default COLLECTION;
