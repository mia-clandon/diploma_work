import gql from 'graphql-tag';

const MY_FEEDS = gql`
  query myFeeds($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: FeedOrderByEnum) {
    myFeeds(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "myFeeds", filter: []) {
      rows {
        ...FeedRow
      }
      count
    }
  }

  fragment FeedRow on Feed {
    id
    title
    description
    imageUrl
    siteUrl
    siteName
    createdAt
    feedUrl
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
  }
`;

export default MY_FEEDS;
