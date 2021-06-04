import gql from 'graphql-tag';

const BLOCK_USER = gql`
  mutation blockUser($ids: [ID]!) {
    admin {
      blockUser(ids: $ids)
    }
  }
`;

export default BLOCK_USER;
