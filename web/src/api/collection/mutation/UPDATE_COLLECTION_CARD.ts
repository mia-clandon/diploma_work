import gql from 'graphql-tag';

const UPDATE_COLLECTION_CARD = gql`
  mutation updateCollectionCard($input: CollectionCardUpdateInput!) {
    updateCollectionCard(input: $input) {
      ...CollectionCard
    }
  }
`;

export default UPDATE_COLLECTION_CARD;
