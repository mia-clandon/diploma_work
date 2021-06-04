import gql from 'graphql-tag';

const UPDATE_ISSUBEXPIRED = gql`
  mutation updateIsSubExpired($userId: ID!, $isSubExpired: Boolean!) {
    admin {
      updateIsSubExpired(userId: $userId, isSubExpired: $isSubExpired) {
        isSubExpired
      }
    }
  }
`;

export default UPDATE_ISSUBEXPIRED;
