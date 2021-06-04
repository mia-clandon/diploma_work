import * as Apollo from '@apollo/client';
import { defaultDataIdFromObject } from '@apollo/client';
import { useCreateTemplateMutation } from '../../hooks';
import * as Types from '../../operations';

function useCreateTemplate(
  opts: Apollo.MutationHookOptions<Types.CreateTemplateMutation, Types.CreateTemplateMutationVariables> = {}
) {
  const res = useCreateTemplateMutation({
    ...opts,
    update: (cache, { data: { admin: { createTemplate = null } = {} } = {} }) => {
      if (createTemplate) {
        const key = `templates({"type":"${createTemplate.type}"})`;

        cache.modify({
          id: 'ROOT_QUERY',
          fields: {
            admin: (value) => {
              const ref = defaultDataIdFromObject({ __typename: 'EmbedTemplate', ...createTemplate });
              const templates = [{ __ref: ref }, ...(value[key] || [])];

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

  return res;
}

export default useCreateTemplate;
