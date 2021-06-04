import gql from 'graphql-tag';

const TAG_REMOVE = gql`
  mutation removeTag($id: ID!) {
    removeTag(id: $id) {
      id
      label
    }
  }
`;

export default TAG_REMOVE;
