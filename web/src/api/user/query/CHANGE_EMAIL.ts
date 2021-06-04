import gql from 'graphql-tag';

const CHANGE_EMAIL = gql`
  mutation ChangeEmail($newEmail: String!) {
    changeEmail(newEmail: $newEmail)
  }
`;

export default CHANGE_EMAIL;
