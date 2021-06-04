import gql from 'graphql-tag';

const REMOVE_ALL_USER_JOBS = gql`
  mutation removeAllUserJobs($userId: ID!) {
    admin {
      removeAllUserJobs(userId: $userId)
    }
  }
`;

export default REMOVE_ALL_USER_JOBS;
