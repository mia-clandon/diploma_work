import { useApolloClient } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { DeleteTemplateDocument } from '../../hooks';
import * as Types from '../../operations';

function useDeleteTemplate() {
  const apolloClient = useApolloClient();

  return async (
    opts: Apollo.MutationHookOptions<Types.DeleteTemplateMutation, Types.DeleteTemplateMutationVariables> = {}
  ) => {
    await apolloClient.mutate({
      mutation: DeleteTemplateDocument,
      ...opts,
      update: (cache, { data: { admin: { deleteTemplate = null } = {} } = {} }) => {
        if (deleteTemplate) {
          const { id, type } = deleteTemplate;
          const key = `templates({"type":"${type}"})`;

          apolloClient.cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              admin: (value, { readField }) => {
                const templates = value[key].filter((ref) => readField('id', ref) !== id.toString());

                return {
                  ...value,
                  [key]: templates,
                };
              },
            },
          });
        }
      },
    });
  };
}

export default useDeleteTemplate;
