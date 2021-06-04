import gql from 'graphql-tag';

const PROVIDER_APP_MIN = gql`
  query providerApp($id: ID!) {
    providerApp(id: $id) {
      id
      name
      fromSection
      color
      logo
      url
      createdAt
      examples
    }
  }
`;

export default PROVIDER_APP_MIN;
