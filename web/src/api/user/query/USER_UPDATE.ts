import gql from 'graphql-tag';

const USER_UPDATE = gql`
  mutation updateUser($companyName: String, $firstName: String, $lastName: String) {
    updateUser(companyName: $companyName, firstName: $firstName, lastName: $lastName) {
      companyName
      firstName
      lastName
      photo
      subscription {
        id
        isTrial
        plan
        cancelledAt
        selectedPlan {
          id
          planId
          name
          stars
          price
          feedsLimit
          refreshRate
          chargbeePlanId
          postPerFeed
          postLinkToRss
          isInstagram
          isBundles
          isFilters
          isCustomEmbeds
          isSupport
          maxPostLimit
          timePeriod
          displayName
        }
      }
    }
  }
`;

export default USER_UPDATE;
