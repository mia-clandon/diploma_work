import gql from 'graphql-tag';

const REORDER_TEMPLATE = gql`
  mutation reorderTemplate($id: ID!, $step: Int!) {
    admin {
      reorderTemplate(id: $id, step: $step) {
        ...EmbedTemplate
      }
    }
  }
`;

export default REORDER_TEMPLATE;
