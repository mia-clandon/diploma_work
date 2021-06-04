import gql from 'graphql-tag';

const UPDATE_USER_SETTINGS = gql`
  mutation updateUserSettings(
    $openDrawer: Boolean
    $feedsLayout: FeedLayoutEnum
    $feedsOrder: OrderEnum
    $feedsOrderBy: FeedOrderByEnum
    $feedsLimit: Int
    $bundlesLayout: BundleLayoutEnum
    $bundlesOrder: OrderEnum
    $bundlesOrderBy: BundleOrderByEnum
    $bundlesLimit: Int
    $collectionsLayout: CollectionLayoutEnum
    $collectionsOrder: OrderEnum
    $collectionsOrderBy: CollectionOrderByEnum
    $collectionsLimit: Int
    $themeStyle: ThemeStyleEnum
  ) {
    updateUserSettings(
      openDrawer: $openDrawer
      feedsLayout: $feedsLayout
      feedsOrder: $feedsOrder
      feedsOrderBy: $feedsOrderBy
      feedsLimit: $feedsLimit
      bundlesLayout: $bundlesLayout
      bundlesOrder: $bundlesOrder
      bundlesOrderBy: $bundlesOrderBy
      bundlesLimit: $bundlesLimit
      collectionsLayout: $collectionsLayout
      collectionsOrder: $collectionsOrder
      collectionsOrderBy: $collectionsOrderBy
      collectionsLimit: $collectionsLimit
      themeStyle: $themeStyle
    ) {
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

export default UPDATE_USER_SETTINGS;
