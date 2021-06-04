import gql from 'graphql-tag';

const DELETE_COLLECTION = gql`
  mutation deleteCollection($id: ID!) {
    deleteCollection(id: $id)
  }
`;

export default DELETE_COLLECTION;
