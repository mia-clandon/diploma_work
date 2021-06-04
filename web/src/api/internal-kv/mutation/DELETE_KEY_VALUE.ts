import gql from 'graphql-tag';

const DELETE_KEY_VALUE = gql`
  mutation deleteKeyValue($key: ID!) {
    admin {
      deleteKeyValue(key: $key)
    }
  }
`;

export default DELETE_KEY_VALUE;
