import gql from 'graphql-tag';

const DELETE_BUNDLE = gql`
  mutation deleteGroup($id: ID!) {
    deleteGroup(id: $id) {
      id
      name
      description
      feeds
      isMaster
    }
  }
`;

export default DELETE_BUNDLE;
