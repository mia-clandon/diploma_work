import gql from 'graphql-tag';

const CREATE_COLLECTION_CARD = gql`
  mutation createCollectionCard($input: CollectionCardCreateInput!) {
    createCollectionCard(input: $input) {
      ...CollectionCard
    }
  }

  fragment CollectionCard on CollectionCard {
    id
    url
    title
    description
    image
    author
    date
    articleReferenceId
    createdAt
  }
`;

export default CREATE_COLLECTION_CARD;
