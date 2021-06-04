import gql from 'graphql-tag';

const SPAM_ACCOUNT_REPORT = gql`
  query spamAccountReport($offset: Int, $limit: Int, $period: String) {
    admin {
      spamAccountReport(offset: $offset, limit: $limit, period: $period) {
        total
        page
        perPage
        filters {
          period
        }
        data {
          ip
          count
          usersCount
          lastCreatedAt
          users {
            id
            email
            isTrial
            deleted
            blocked
            createdAt
            ip
            plan {
              name
            }
          }
        }
      }
    }
  }
`;

export default SPAM_ACCOUNT_REPORT;
