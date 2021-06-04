import gql from 'graphql-tag';

const UPDATE_KEY_VALUE = gql`
  mutation updateKeyValue($key: ID!, $value: JSON!) {
    admin {
      updateKeyValue(key: $key, value: $value) {
        ...KeyValue
      }
    }
  }
`;

export default UPDATE_KEY_VALUE;
