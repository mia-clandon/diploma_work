import gql from 'graphql-tag';

const KEY_VALUES = gql`
  query keyValues {
    admin {
      keyValues {
        ...KeyValue
      }
    }
  }
`;

export default KEY_VALUES;
