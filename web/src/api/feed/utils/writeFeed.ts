import { ApolloClient } from '@apollo/client';
import { Feed } from '../../schemas';
import { FeedDocument } from '../../hooks';

function writeFeed(apolloClient: ApolloClient<any>, feed: Feed) {
  apolloClient.writeQuery({ query: FeedDocument, variables: { id: feed.id }, data: { feed }, broadcast: true });
}

export default writeFeed;
