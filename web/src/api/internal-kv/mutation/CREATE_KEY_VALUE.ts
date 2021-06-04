import gql from 'graphql-tag';

const CREATE_KEY_VALUE = gql`
  mutation createKeyValue($key: ID!, $value: JSON!) {
    admin {
      createKeyValue(key: $key, value: $value) {
        ...KeyValue
      }
    }
  }

  fragment KeyValue on KeyValue {
    key
    value
    modifiedAt
    createdAt
  }
`;

export default CREATE_KEY_VALUE;
