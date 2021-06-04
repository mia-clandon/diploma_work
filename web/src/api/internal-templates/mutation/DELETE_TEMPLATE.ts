import gql from 'graphql-tag';

const DELETE_TEMPLATE = gql`
  mutation deleteTemplate($id: ID!, $deleted: Boolean!) {
    admin {
      deleteTemplate(id: $id, deleted: $deleted) {
        ...EmbedTemplate
      }
    }
  }
`;

export default DELETE_TEMPLATE;
