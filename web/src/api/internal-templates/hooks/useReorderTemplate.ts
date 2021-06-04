import * as Apollo from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { ReorderTemplateDocument, useReorderTemplateMutation } from '../../hooks';
import * as Types from '../../operations';

function useReorderTemplate() {
  const apolloClient = useApolloClient();

  const handler = async (
    opts: Apollo.MutationHookOptions<Types.ReorderTemplateMutation, Types.ReorderTemplateMutationVariables> = {}
  ) => {
    await apolloClient.mutate({
      ...opts,
      mutation: ReorderTemplateDocument,
      update: (cache, { data: { admin: { reorderTemplate = null } = {} } = {} }) => {
        if (reorderTemplate) {
          const { step, id } = opts.variables;
          const key = `templates({"type":"${reorderTemplate.type}"})`;

          cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              admin: (value, { readField }) => {
                const templates = [...value[key]];

                const index = templates.findIndex((el) => readField('id', el) === id);
                const targetIndex = index + step;

                [templates[index], templates[targetIndex]] = [templates[targetIndex], templates[index]];

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

  return [handler] as const;
}

export default useReorderTemplate;
