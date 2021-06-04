import gql from 'graphql-tag';

const TEMPLATES = gql`
  query templates($type: String!) {
    admin {
      templates(type: $type) {
        ...EmbedTemplate
      }
    }
  }
`;

export default TEMPLATES;
