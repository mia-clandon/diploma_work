import gql from 'graphql-tag';

const CLEAR_KEY_VALUES = gql`
  mutation clearKeyValues {
    admin {
      clearKeyValues
    }
  }
`;

export default CLEAR_KEY_VALUES;
