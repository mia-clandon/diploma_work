import gql from 'graphql-tag';

const PROVIDER_APP_LIST = gql`
  query providerAppList($published: Boolean) {
    providerAppList(published: $published) {
      id
      name
      fromSection
      color
      logo
      url
      createdAt
    }
  }
`;

export default PROVIDER_APP_LIST;
