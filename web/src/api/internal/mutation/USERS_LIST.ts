import gql from 'graphql-tag';

const USERS_LIST = gql`
  query users($count: Int, $searchQuery: String) {
    admin {
      users(count: $count, searchQuery: $searchQuery) {
        id
        email
        firstName
        lastName
        isTrial
        customerId
        chargebeeId
        plan {
          name
        }
      }
    }
  }
`;

export default USERS_LIST;
