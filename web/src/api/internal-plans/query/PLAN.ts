import gql from 'graphql-tag';

const PLAN = gql`
  query plan($id: ID!) {
    admin {
      plan(id: $id) {
        id
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
        maxPostBundleLimit
        maxPostFeedLimit
        isPrivate
        isCustom
      }
    }
  }
`;

export default PLAN;
