import gql from 'graphql-tag';

const ADD_SPAM_EMAIL = gql`
  mutation AddSpamEmail($emails: [String]) {
    admin {
      addSpamEmail(emails: $emails)
    }
  }
`;

export default ADD_SPAM_EMAIL;
