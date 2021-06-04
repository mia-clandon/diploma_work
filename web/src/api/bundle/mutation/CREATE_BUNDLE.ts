import gql from 'graphql-tag';

const CREATE_GROUP = gql`
  mutation createGroup($title: String!, $feeds: [String!]!) {
    createGroup(title: $title, feeds: $feeds) {
      ...Group
    }
  }
`;

export default CREATE_GROUP;
