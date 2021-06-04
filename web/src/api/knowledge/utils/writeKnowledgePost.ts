import { ApolloClient } from '@apollo/client';
import { KnowledgePost } from '../../schemas';
import { KnowledgePostDocument } from '../../hooks';

function writeKnowledgePost(apolloClient: ApolloClient<any>, knowledgePost: KnowledgePost) {
  apolloClient.writeQuery({
    query: KnowledgePostDocument,
    variables: { postId: knowledgePost.id },
    data: { knowledgePost },
    broadcast: true,
  });
}

export default writeKnowledgePost;
