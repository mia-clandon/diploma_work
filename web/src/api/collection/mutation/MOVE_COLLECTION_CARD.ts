import gql from 'graphql-tag';

const MOVE_COLLECTION_CARD = gql`
  mutation moveCollectionCard($id: ID!, $fromCollection: ID!, $toCollection: ID!) {
    moveCollectionCard(id: $id, fromCollection: $fromCollection, toCollection: $toCollection) {
      ...CollectionCard
    }
  }
`;

export default MOVE_COLLECTION_CARD;
