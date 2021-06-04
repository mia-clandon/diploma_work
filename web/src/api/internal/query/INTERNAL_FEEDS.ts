import gql from 'graphql-tag';

const INTERNAL_FEEDS = gql`
  query feeds($page: Int, $rowsPerPage: Int, $search: String, $order: OrderEnum, $orderBy: String) {
    admin {
      feeds(page: $page, rowsPerPage: $rowsPerPage, search: $search, order: $order, orderBy: $orderBy) {
        id
        title
        linkToFeed
        providerId
        disabled
        deleted
        createdAt
        userId
      }
    }
  }
`;

export default INTERNAL_FEEDS;
