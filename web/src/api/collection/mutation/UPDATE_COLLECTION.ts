import gql from 'graphql-tag';

const UPDATE_COLLECTION = gql`
  mutation updateCollection($input: CollectionUpdateInput!) {
    updateCollection(input: $input) {
      ...Collection
    }
  }
`;

export default UPDATE_COLLECTION;
