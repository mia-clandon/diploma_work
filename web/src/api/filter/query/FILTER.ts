import gql from 'graphql-tag';

const FILTER = gql`
  query moderation($id: ID!) {
    moderation(id: $id) {
      ...Moderation
    }
  }

  fragment Moderation on Moderation {
    id
    feed {
      title
      description
      feedUrl
      siteUrl
      imageUrl
      generator
      items {
        title
        url
        description
        date
        enclosure {
          url
        }
        createdAt
      }
    }
    filter {
      ...Filter
    }
    
    prefixList
    postfixList
  }

  fragment Filter on Filter {
    id
    feedId
    hideFilteredPosts
    noImages
    noDate
    duplicateTitles
    duplicateDescriptions
    hideNonSecureLinks
    noDescription

    whitelist
    whiteListByTitle
    whiteListByDescription
    whiteListByLink
    whiteListByImageUrl

    blacklist
    blackListByTitle
    blackListByDescription
    blackListByLink
    blackListByImageUrl

    enableDateFilter
    secondsUntil
    titleReplaceKeywords
    titleAutoCleaner
    orderBy
    order

    rules {
      ...FilterRule
    }
  }

  fragment FilterRule on FilterRule {
    id
    type
    searchTitle
    searchDescription
    searchUrl
    take
    put
  }
`;

export default FILTER;
