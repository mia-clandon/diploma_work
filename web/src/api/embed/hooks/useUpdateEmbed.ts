import { useApolloClient } from '@apollo/client';
import { UpdateEmbedDocument } from '../../hooks';
import { EmbedSettingsUnion, EmbedType } from '../../schemas';

function useUpdateEmbed(id: string, type: EmbedType) {
  const apolloClient = useApolloClient();

  return (settings: EmbedSettingsUnion) => {
    return apolloClient.mutate({ mutation: UpdateEmbedDocument, variables: { input: { settings, type, id } } });
  };
}

export default useUpdateEmbed;
