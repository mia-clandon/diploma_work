import gql from 'graphql-tag';

const ACTIVE_TEMPLATE = gql`
  mutation activeTemplate($id: ID!, $active: Boolean!) {
    admin {
      activeTemplate(id: $id, active: $active) {
        ...EmbedTemplate
      }
    }
  }
`;

export default ACTIVE_TEMPLATE;
