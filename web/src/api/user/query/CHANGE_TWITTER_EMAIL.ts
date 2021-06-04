import gql from 'graphql-tag';

const CHANGE_TWITTER_EMAIL = gql`
  mutation ChangeTwitterEmail($newEmail: String!, $newPassword: String!) {
    changeTwitterEmail(newEmail: $newEmail, newPassword: $newPassword)
  }
`;

export default CHANGE_TWITTER_EMAIL;
