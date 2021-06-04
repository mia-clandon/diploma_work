import gql from "graphql-tag";

export const LOGIN_USER = gql`
    mutation loginWithEmail($email: String!, $password: String!, $updateEmailToken: String) {
        loginWithEmail(email: $email, password: $password, updateEmailToken: $updateEmailToken)
    }
`;