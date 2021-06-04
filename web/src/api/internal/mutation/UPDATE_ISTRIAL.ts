import gql from 'graphql-tag';

const UPDATE_ISTRIAL = gql`
  mutation updateIsTrial($userId: ID!, $isTrial: Boolean!) {
    admin {
      updateIsTrial(userId: $userId, isTrial: $isTrial) {
        isTrial
      }
    }
  }
`;

export default UPDATE_ISTRIAL;
