import gql from 'graphql-tag';

const USER_SETTINGS = gql`
  query userSettings {
    userSettings {
      openDrawer
      openDrawer
      feedsLayout
      feedsOrder
      feedsOrderBy
      feedsLimit
      bundlesLayout
      bundlesOrder
      bundlesOrderBy
      bundlesLimit
      collectionsLayout
      collectionsOrder
      collectionsOrderBy
      collectionsLimit
      themeStyle
    }
  }
`;

export default USER_SETTINGS;
