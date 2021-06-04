import gql from 'graphql-tag';

const UPDATE_USER_FEATURES = gql`
  mutation updateUserFeatures($userId: ID!, $featuresId: ID!, $features: UserFeaturesInput!) {
    admin {
      updateUserFeatures(userId: $userId, featuresId: $featuresId, features: $features) {
        id
        features {
          ...UserFeatures
        }
      }
    }
  }
`;

export default UPDATE_USER_FEATURES;
