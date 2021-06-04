import gql from "graphql-tag";

export const REGISTER_USER = gql`
    mutation RegistrationWithEmail(
        $email: String!
        $password: String!
        $firstName: String
        $lastName: String
        $companyName: String
    ) {
        registrationWithEmail(
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
            companyName: $companyName
        )
    }
`;

