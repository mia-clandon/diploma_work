import gql from 'graphql-tag';

const UPDATE_TRIALEND_DATE = gql`
  mutation updateTrialEndDate($userId: ID!, $trialEnd: Date!) {
    admin {
      updateTrialEndDate(userId: $userId, trialEnd: $trialEnd) {
        trialEnd
      }
    }
  }
`;

export default UPDATE_TRIALEND_DATE;
