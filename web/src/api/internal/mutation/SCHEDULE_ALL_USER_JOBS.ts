import gql from 'graphql-tag';

const SCHEDULE_ALL_USER_JOBS = gql`
  mutation scheduleAllUserJobs($userId: ID!) {
    admin {
      scheduleAllUserJobs(userId: $userId)
    }
  }
`;

export default SCHEDULE_ALL_USER_JOBS;
