import gql from 'graphql-tag';

const COLLECTIONS = gql`
  query collections($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: CollectionOrderByEnum) {
    collections(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy)
    @connection(key: "collections", filter: []) {
      rows {
        ...CollectionRow
      }
      count
    }
  }

  fragment CollectionRow on Collection {
    id
    title
    description
    date
    author
    items {
      ...CollectionCard
    }
  }
`;

export default COLLECTIONS;
