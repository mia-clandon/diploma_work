import gql from 'graphql-tag';

const EMBED_TEMPLATES = gql`
  query embedTemplates($type: String!) {
    embedTemplates(type: $type) {
      ...EmbedTemplate
    }
  }
`;

export default EMBED_TEMPLATES;
