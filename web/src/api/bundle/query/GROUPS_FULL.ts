import gql from 'graphql-tag';

const GROUPS_FULL = gql`
  query groupsFull($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: BundleOrderByEnum) {
    groups(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "groups", filter: []) {
      rows {
        ...Group
      }
      count
    }
  }
`;

export default GROUPS_FULL;
