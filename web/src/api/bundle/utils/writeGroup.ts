import { ApolloClient } from '@apollo/client';
import { Group } from '../../schemas';
import { GroupDocument } from '../../hooks';

function writeGroup(apolloClient: ApolloClient<any>, group: Group) {
  apolloClient.writeQuery({ query: GroupDocument, variables: { id: group.id }, data: { group }, broadcast: true });
}

export default writeGroup;
