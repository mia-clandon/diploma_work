import gql from 'graphql-tag';

const PLANS = gql`
  query plans($page: Int, $rowsPerPage: Int, $search: String, $order: OrderEnum, $orderBy: String) {
    admin {
      plans(page: $page, rowsPerPage: $rowsPerPage, search: $search, order: $order, orderBy: $orderBy) {
        rows {
          id
          name
          price
          isPrivate
          isCustom
        }
        count
      }
    }
  }
`;

export default PLANS;
