import gql from 'graphql-tag';

const USER_INFO = gql`
  query userInformation($id: ID!) {
    admin {
      userInformation(id: $id) {
        id
        email
        firstName
        lastName
        startDate
        trialEnd
        isTrial
        isSubExpired
        cancelledAt
        emailVerified
        deleted
        createdAt
        updatedAt
        ip
        customerId
        chargebeeId
        photo
        plan {
          name
          refreshRate
          feedsLimit
          maxPostLimit
        }
        features {
          ...UserFeatures
        }
        setting {
          imageInEnclosure
          imageInDescription
          youtubeVideoIframe
          youtubeDescription
          instagramVideos
          twitterEmbeds
          twitterPrefixWithUsername
          twitterRemoveUrlFromTitle
          imageInMedia
          includeIFramesWhenPossible
        }
      }
    }
  }
`;

export default USER_INFO;
