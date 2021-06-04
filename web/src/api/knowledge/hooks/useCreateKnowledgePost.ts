import { CreateKnowledgePostDocument } from '../../hooks';
import * as Apollo from '@apollo/client';
import * as Types from '../../operations';
import {  useApolloClient } from '@apollo/client';
import { defaultDataIdFromObject } from '@apollo/client';

function useCreateKnowledgePost() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.CreateKnowledgePostMutation, Types.CreateKnowledgePostMutationVariables> = {}
  ) => {
    const { data: { createKnowledgePost = null } = {} } = await apolloClient.mutate({
      mutation: CreateKnowledgePostDocument,
      ...opts,
    });

    if (createKnowledgePost) {
      for (const categoryId of opts.variables.categories) {
        const key = `KnowledgeCategory:${categoryId}`;

        apolloClient.cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            [key]: (state) => {
              const ref = defaultDataIdFromObject({ __typename: 'KnowledgePost', ...createKnowledgePost });
              const newRows = [{ __ref: ref }, ...state.posts];

              return {
                ...state,
                posts: newRows,
              };
            },
          },
        });
      }
    }

    return {
      data: { createKnowledgePost },
    };
  };
}

export default useCreateKnowledgePost;
