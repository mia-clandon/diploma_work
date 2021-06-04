import gql from 'graphql-tag';

const GROUPS = gql`
  query groups($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: BundleOrderByEnum) {
    groups(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "groups", filter: []) {
      rows {
        ...GroupRow
      }
      count
    }
  }

  fragment GroupRow on Group {
    id
    name
    feeds
    isMaster
    createdAt
  }
`;

export default GROUPS;
