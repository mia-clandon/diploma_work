import gql from 'graphql-tag';

const USER = gql`
  query user {
    user {
      id
      photo
      email
      companyName
      firstName
      lastName
      oauth
      createdAt
      isSubExpired
      isAdmin
      createdAt
      features {
        ...UserFeatures
      }
      subscription {
        id
        customerId
        isTrial
        trialEnd
        plan
        startDate
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

  fragment UserFeatures on UserFeatures {
    id
    rssBuilderIsJS
    rssBuilderCssSelector
    bundleLimit
    postLimit
    tags
    customCss
    rssPicker
    embedGrid
    embedFeedShadowRoot
    wallGallery
    feedOnBundles
    enableBundleLimit
    enableBundleLimit
    newGridTemplates
    pickerCssSelectors
    pickerEnableJs
    customTarget
    isCollections
    wallPinterest
    masterBundle
    dateFormat

    carouselNavigation
    carouselGallery

    wallTemplates
    feedTemplates
    listTemplates
    carouselTemplates
    tickerTemplates
    gridTemplates
    filterFormatter
    rssBuilderUrlParams

    onlyAscii
    ignoreIframelyCache
    yearlyPlans
    newIntegrations

    # SEARCH-KEY-ADD-FEATURE
  }
`;

export default USER;
