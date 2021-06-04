import gql from 'graphql-tag';

export const UPDATE_EMBED = gql`
  mutation updateEmbed($input: EmbedInput!) {
    updateEmbed(input: $input) {
      ...Embed
    }
  }
`;
