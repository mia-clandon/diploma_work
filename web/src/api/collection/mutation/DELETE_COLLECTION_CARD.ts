import gql from 'graphql-tag';

const DELETE_COLLECTION = gql`
  mutation deleteCollectionCard($id: ID!, $collectionId: ID!) {
    deleteCollectionCard(id: $id, collectionId: $collectionId)
  }
`;

export default DELETE_COLLECTION;
