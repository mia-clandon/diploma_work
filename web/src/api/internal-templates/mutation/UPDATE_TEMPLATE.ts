import gql from 'graphql-tag';

const UPDATE_TEMPLATE = gql`
  mutation updateTemplate($id: ID!, $settings: JSON, $title: String, $feedId: ID) {
    admin {
      updateTemplate(id: $id, settings: $settings, title: $title, feedId: $feedId) {
        ...EmbedTemplate
      }
    }
  }
`;

export default UPDATE_TEMPLATE;
