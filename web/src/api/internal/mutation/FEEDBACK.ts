import gql from 'graphql-tag';

const FEEDBACK = gql`
  query getUserFeedback($page: Int!, $rowsPerPage: Int!, $period: String!) {
    admin {
      getUserFeedback(page: $page, rowsPerPage: $rowsPerPage, period: $period) {
        rows {
          rate
          option
          description
          user {
            id
            email
          }
          countActiveFeeds
          createdAt
        }
        count
      }
    }
  }
`;

export default FEEDBACK;
