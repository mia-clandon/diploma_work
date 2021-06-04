export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  BigInt: any;
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Admin = {
  __typename?: 'Admin';
  users?: Maybe<Array<Maybe<UserInfo>>>;
  userInformation?: Maybe<UserInfo>;
  userFeeds: Array<AdminFeed>;
  deleteUser?: Maybe<UserInfo>;
  enableFeed?: Maybe<Scalars['Boolean']>;
  disableFeed?: Maybe<Scalars['Boolean']>;
  deleteOneFeed?: Maybe<Scalars['Boolean']>;
  deleteAllFeeds?: Maybe<Scalars['Boolean']>;
  restoreAllFeeds?: Maybe<Scalars['Boolean']>;
  restoreOneFeed?: Maybe<Scalars['Boolean']>;
  deleteOneGroup?: Maybe<Scalars['Boolean']>;
  restoreOneGroup?: Maybe<Scalars['Boolean']>;
  deleteAllGroups?: Maybe<Scalars['Boolean']>;
  restoreAllGroups?: Maybe<Scalars['Boolean']>;
  enableAllUserFeeds?: Maybe<Scalars['Boolean']>;
  disableAllUserFeeds?: Maybe<Scalars['Boolean']>;
  addSpamEmail?: Maybe<Scalars['Boolean']>;
  blockUser?: Maybe<Scalars['Boolean']>;
  clearUserCache?: Maybe<UserInfo>;
  spamAccountReport?: Maybe<SpamAccountReport>;
  botsType1Report?: Maybe<BotsType1Report>;
  botsType2Report?: Maybe<BotsType2Report>;
  enableFeeds?: Maybe<Scalars['Boolean']>;
  allUserFeeds: Array<AdminFeed>;
  allUserBundles: Array<AdminBundle>;
  getUserFeedback?: Maybe<UserFeedbackReport>;
  refetchFeed: Scalars['Boolean'];
  updateIsTrial?: Maybe<UserInfo>;
  updateIsSubExpired?: Maybe<UserInfo>;
  updateUserFeatures?: Maybe<UserInfo>;
  updateTrialEndDate?: Maybe<UserInfo>;
  provider?: Maybe<Provider>;
  providers?: Maybe<AdminProvidersResponse>;
  feed?: Maybe<AdminFeed>;
  feeds: Array<AdminFeed>;
  createPlan: AdminPlan;
  plan?: Maybe<AdminPlan>;
  plans?: Maybe<AdminPlansResponse>;
  keyValues: Array<KeyValue>;
  createKeyValue: KeyValue;
  updateKeyValue: KeyValue;
  deleteKeyValue: Scalars['Boolean'];
  clearKeyValues: Scalars['Boolean'];
  removeAllUserJobs?: Maybe<Scalars['Boolean']>;
  scheduleAllUserJobs?: Maybe<Scalars['Boolean']>;
  createTemplate: EmbedTemplate;
  updateTemplate: EmbedTemplate;
  activeTemplate: EmbedTemplate;
  deleteTemplate: EmbedTemplate;
  reorderTemplate: EmbedTemplate;
  templates: Array<EmbedTemplate>;
};

export type AdminUsersArgs = {
  count?: Maybe<Scalars['Int']>;
  searchQuery?: Maybe<Scalars['String']>;
};

export type AdminUserInformationArgs = {
  id: Scalars['ID'];
};

export type AdminUserFeedsArgs = {
  id: Scalars['ID'];
};

export type AdminDeleteUserArgs = {
  id: Scalars['ID'];
};

export type AdminEnableFeedArgs = {
  id: Scalars['String'];
};

export type AdminDisableFeedArgs = {
  id: Scalars['String'];
};

export type AdminDeleteOneFeedArgs = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type AdminDeleteAllFeedsArgs = {
  userId: Scalars['String'];
};

export type AdminRestoreAllFeedsArgs = {
  userId: Scalars['String'];
};

export type AdminRestoreOneFeedArgs = {
  id: Scalars['String'];
};

export type AdminDeleteOneGroupArgs = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type AdminRestoreOneGroupArgs = {
  id: Scalars['String'];
  userId: Scalars['String'];
};

export type AdminDeleteAllGroupsArgs = {
  userId: Scalars['String'];
};

export type AdminRestoreAllGroupsArgs = {
  userId: Scalars['String'];
};

export type AdminEnableAllUserFeedsArgs = {
  userId: Scalars['String'];
};

export type AdminDisableAllUserFeedsArgs = {
  userId: Scalars['String'];
};

export type AdminAddSpamEmailArgs = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AdminBlockUserArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};

export type AdminClearUserCacheArgs = {
  id: Scalars['ID'];
};

export type AdminSpamAccountReportArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
};

export type AdminBotsType1ReportArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['String']>;
};

export type AdminEnableFeedsArgs = {
  userId: Scalars['String'];
};

export type AdminAllUserFeedsArgs = {
  id?: Maybe<Scalars['String']>;
};

export type AdminAllUserBundlesArgs = {
  id?: Maybe<Scalars['String']>;
};

export type AdminGetUserFeedbackArgs = {
  page: Scalars['Int'];
  rowsPerPage: Scalars['Int'];
  period?: Maybe<Scalars['String']>;
};

export type AdminRefetchFeedArgs = {
  feedId: Scalars['ID'];
};

export type AdminUpdateIsTrialArgs = {
  userId: Scalars['ID'];
  isTrial: Scalars['Boolean'];
};

export type AdminUpdateIsSubExpiredArgs = {
  userId: Scalars['ID'];
  isSubExpired: Scalars['Boolean'];
};

export type AdminUpdateUserFeaturesArgs = {
  userId: Scalars['ID'];
  featuresId: Scalars['ID'];
  features?: Maybe<UserFeaturesInput>;
};

export type AdminUpdateTrialEndDateArgs = {
  userId: Scalars['ID'];
  trialEnd: Scalars['Date'];
};

export type AdminProviderArgs = {
  id: Scalars['ID'];
};

export type AdminProvidersArgs = {
  published?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type AdminFeedArgs = {
  id: Scalars['ID'];
};

export type AdminFeedsArgs = {
  page?: Maybe<Scalars['Int']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type AdminCreatePlanArgs = {
  params: CreatePlanInput;
};

export type AdminPlanArgs = {
  id: Scalars['ID'];
};

export type AdminPlansArgs = {
  page?: Maybe<Scalars['Int']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type AdminCreateKeyValueArgs = {
  key: Scalars['ID'];
  value: Scalars['JSON'];
};

export type AdminUpdateKeyValueArgs = {
  key: Scalars['ID'];
  value: Scalars['JSON'];
};

export type AdminDeleteKeyValueArgs = {
  key: Scalars['ID'];
};

export type AdminRemoveAllUserJobsArgs = {
  userId: Scalars['ID'];
};

export type AdminScheduleAllUserJobsArgs = {
  userId: Scalars['ID'];
};

export type AdminCreateTemplateArgs = {
  title: Scalars['String'];
  type: Scalars['String'];
  feedId: Scalars['ID'];
};

export type AdminUpdateTemplateArgs = {
  id: Scalars['ID'];
  settings?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  feedId?: Maybe<Scalars['ID']>;
};

export type AdminActiveTemplateArgs = {
  id: Scalars['ID'];
  active: Scalars['Boolean'];
};

export type AdminDeleteTemplateArgs = {
  id: Scalars['ID'];
  deleted: Scalars['Boolean'];
};

export type AdminReorderTemplateArgs = {
  id: Scalars['ID'];
  step: Scalars['Int'];
};

export type AdminTemplatesArgs = {
  type: Scalars['String'];
};

export type AdminBundle = {
  __typename?: 'AdminBundle';
  id: Scalars['ID'];
  title: Scalars['String'];
  isMaster: Scalars['Boolean'];
  feeds: Array<Scalars['ID']>;
  deleted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['String']>;
};

export type AdminFeed = {
  __typename?: 'AdminFeed';
  id: Scalars['ID'];
  linkToFeed?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  disabled: Scalars['Boolean'];
  providerId: Scalars['ID'];
  lastRefreshed?: Maybe<Scalars['Date']>;
  lastNewPosts?: Maybe<Scalars['Date']>;
  deleted: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['String']>;
};

export type AdminPlan = {
  __typename?: 'AdminPlan';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  feedsLimit?: Maybe<Scalars['Int']>;
  refreshRate?: Maybe<Scalars['Int']>;
  chargbeePlanId?: Maybe<Scalars['String']>;
  postPerFeed?: Maybe<Scalars['Int']>;
  postLinkToRss?: Maybe<Scalars['Boolean']>;
  isInstagram?: Maybe<Scalars['Boolean']>;
  isBundles?: Maybe<Scalars['Boolean']>;
  isFilters?: Maybe<Scalars['Boolean']>;
  isCustomEmbeds?: Maybe<Scalars['Boolean']>;
  isSupport?: Maybe<Scalars['Boolean']>;
  maxPostLimit?: Maybe<Scalars['Int']>;
  timePeriod?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  maxPostBundleLimit?: Maybe<Scalars['Int']>;
  maxPostFeedLimit?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  isCustom?: Maybe<Scalars['Boolean']>;
};

export type AdminPlansResponse = {
  __typename?: 'AdminPlansResponse';
  rows: Array<AdminPlan>;
  count: Scalars['Int'];
};

export type AdminProvidersResponse = {
  __typename?: 'AdminProvidersResponse';
  rows: Array<Provider>;
  count: Scalars['Int'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  breadcrumb?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  images?: Maybe<Array<Maybe<Image>>>;
  mainImageIndex?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Date']>;
  modifiedAt?: Maybe<Scalars['Date']>;
};

export type BotsType1Data = {
  __typename?: 'BotsType1Data';
  count?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
};

export type BotsType1Report = {
  __typename?: 'BotsType1Report';
  total?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filters?: Maybe<SpamAccountFilters>;
  data?: Maybe<Array<Maybe<BotsType1Data>>>;
};

export type BotsType2Data = {
  __typename?: 'BotsType2Data';
  ip?: Maybe<Scalars['String']>;
  inputUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type BotsType2Report = {
  __typename?: 'BotsType2Report';
  total?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<BotsType2Data>>>;
};

export enum BundleLayoutEnum {
  List = 'list',
  Grid = 'grid',
}

export enum BundleOrderByEnum {
  Name = 'name',
  CreatedAt = 'createdAt',
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export enum CarouselCardStyle {
  Classic = 'classic',
  Gallery = 'gallery',
}

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  items: Array<CollectionCard>;
};

export type CollectionAddArticleInput = {
  collectionId: Scalars['ID'];
  articleId: Scalars['ID'];
};

export type CollectionCard = {
  __typename?: 'CollectionCard';
  id: Scalars['ID'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  articleReferenceId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['Date'];
};

export type CollectionCardCreateInput = {
  collectionId: Scalars['ID'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type CollectionCardParsed = {
  __typename?: 'CollectionCardParsed';
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  createdAt: Scalars['Date'];
};

export type CollectionCardUpdateInput = {
  id: Scalars['ID'];
  collectionId: Scalars['ID'];
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type CollectionCreateInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export enum CollectionLayoutEnum {
  List = 'list',
  Grid = 'grid',
}

export enum CollectionOrderByEnum {
  Name = 'name',
  CreatedAt = 'createdAt',
}

export type CollectionRemoveArticleInput = {
  collectionId: Scalars['ID'];
  articleId: Scalars['ID'];
};

export type CollectionsResponse = {
  __typename?: 'CollectionsResponse';
  rows: Array<Collection>;
  count: Scalars['Int'];
};

export type CollectionUpdateInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type CreatePlanInput = {
  chargbeePlanId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  displayName: Scalars['String'];
  price: Scalars['Int'];
  stars: Scalars['Int'];
  timePeriod: PlanTimePeriod;
  isInstagram: Scalars['Boolean'];
  isBundles: Scalars['Boolean'];
  isFilters: Scalars['Boolean'];
  isCustomEmbeds: Scalars['Boolean'];
  isSupport: Scalars['Boolean'];
  isCustom: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  postLinkToRss: Scalars['Boolean'];
  postPerFeed: Scalars['Int'];
  feedsLimit: Scalars['Int'];
  refreshRate: Scalars['Int'];
  maxPostLimit: Scalars['Int'];
  maxPostBundleLimit: Scalars['Int'];
  maxPostFeedLimit: Scalars['Int'];
};

export type CreateTagResponse = {
  __typename?: 'CreateTagResponse';
  tag: Tag;
  featureTag?: Maybe<FeatureTag>;
};

export type CssSelectors = {
  container?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export enum DirectionEnum {
  Left = 'left',
  Right = 'right',
}

export type Embed = {
  __typename?: 'Embed';
  id: Scalars['ID'];
  feed: Feed;
  type: EmbedType;
  settings: EmbedSettingsUnion;
  status: Scalars['String'];
};

export type EmbedCardSettings = {
  __typename?: 'EmbedCardSettings';
  id: Scalars['ID'];
  backgroundColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardImageHeight?: Maybe<Scalars['Int']>;
  cardSocialSharing?: Maybe<Scalars['Boolean']>;
  cardSocialSharingRounded?: Maybe<Scalars['Boolean']>;
  cardSocialSharingMap?: Maybe<SocialSharing>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardDescriptionAlign?: Maybe<TextAlign>;
  cardTitleBold?: Maybe<Scalars['Boolean']>;
  cardDescriptionBold?: Maybe<Scalars['Boolean']>;
  cardTitleItalic?: Maybe<Scalars['Boolean']>;
  cardDescriptionItalic?: Maybe<Scalars['Boolean']>;
};

export type EmbedCarousel = {
  __typename?: 'EmbedCarousel';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedCarouselSettings>;
};

export type EmbedCarouselInput = {
  id: Scalars['ID'];
  template?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['Int']>;
  cardsPadding?: Maybe<Scalars['Int']>;
  responsive?: Maybe<Scalars['Boolean']>;
  postsCount?: Maybe<Scalars['Int']>;
  columnsCount?: Maybe<Scalars['Int']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Int']>;
  autoPlay?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imageAutoHeight?: Maybe<Scalars['Boolean']>;
  cardImageHeight?: Maybe<Scalars['Int']>;
  imageHeight?: Maybe<Scalars['Int']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardStyle?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  navigationStyle?: Maybe<NavigationStyle>;
  navigationPosition?: Maybe<NavigationPosition>;
};

export type EmbedCarouselResponse = {
  __typename?: 'EmbedCarouselResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedCarousel>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedCarouselSettings = {
  __typename?: 'EmbedCarouselSettings';
  id: Scalars['ID'];
  padding?: Maybe<Scalars['Int']>;
  responsive?: Maybe<Scalars['Boolean']>;
  postsCount?: Maybe<Scalars['Int']>;
  columnsCount?: Maybe<Scalars['Int']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Int']>;
  autoPlay?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imageAutoHeight?: Maybe<Scalars['Boolean']>;
  imageHeight?: Maybe<Scalars['Int']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardStyle?: Maybe<Scalars['String']>;
  navigationStyle?: Maybe<NavigationStyle>;
  navigationPosition?: Maybe<NavigationPosition>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
};

export type EmbedFeed = {
  __typename?: 'EmbedFeed';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedFeedSettings>;
};

export type EmbedFeedInput = {
  id: Scalars['ID'];
  template?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  titleBackground?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardDescriptionAlign?: Maybe<TextAlign>;
  cardTitleBold?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardDescriptionBold?: Maybe<Scalars['Boolean']>;
  cardTitleItalic?: Maybe<Scalars['Boolean']>;
  cardDescriptionItalic?: Maybe<Scalars['Boolean']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
};

export type EmbedFeedResponse = {
  __typename?: 'EmbedFeedResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedFeed>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedFeedSettings = {
  __typename?: 'EmbedFeedSettings';
  id: Scalars['ID'];
  padding?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  titleBackground?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardDescriptionAlign?: Maybe<TextAlign>;
  cardTitleBold?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardDescriptionBold?: Maybe<Scalars['Boolean']>;
  cardTitleItalic?: Maybe<Scalars['Boolean']>;
  cardDescriptionItalic?: Maybe<Scalars['Boolean']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};

export type EmbedGeneralSettings = {
  __typename?: 'EmbedGeneralSettings';
  id: Scalars['ID'];
  padding?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  responsive?: Maybe<Scalars['Boolean']>;
  postsNumber?: Maybe<Scalars['Int']>;
  postsShowNumber?: Maybe<Scalars['Int']>;
  autoPlay?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardTheme?: Maybe<Scalars['String']>;
  imageAutoHeight?: Maybe<Scalars['Boolean']>;
};

export type EmbedGrid = {
  __typename?: 'EmbedGrid';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedGridSettings>;
};

export type EmbedGridInput = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  templateDuplicate?: Maybe<GridTemplateDuplicate>;
  type?: Maybe<GridTemplate>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
};

export type EmbedGridResponse = {
  __typename?: 'EmbedGridResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedGrid>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedGridSettings = {
  __typename?: 'EmbedGridSettings';
  id: Scalars['ID'];
  count?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  templateDuplicate?: Maybe<GridTemplateDuplicate>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  type?: Maybe<GridTemplate>;
};

export type EmbedInput = {
  id: Scalars['ID'];
  type: EmbedType;
  settings: Scalars['JSON'];
};

export type EmbedList = {
  __typename?: 'EmbedList';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedListSettings>;
};

export enum EmbedListCardStyle {
  Classic = 'classic',
  Modern = 'modern',
}

export enum EmbedListFooterPosition {
  Top = 'top',
  Bottom = 'bottom',
}

export enum EmbedListImagePosition {
  Left = 'left',
  Right = 'right',
}

export type EmbedListInput = {
  id: Scalars['ID'];
  template?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  padding?: Maybe<Scalars['Int']>;
  cardsPadding?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardStyle?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleLines?: Maybe<Scalars['Int']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardShowHeader?: Maybe<Scalars['Boolean']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  mobileShowDescription?: Maybe<Scalars['Boolean']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardFooterFontSize?: Maybe<Scalars['Int']>;
  cardFooterPosition?: Maybe<EmbedListFooterPosition>;
  cardImagePosition?: Maybe<EmbedListImagePosition>;
  cardImageRadius?: Maybe<Scalars['Int']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardSocialSharing?: Maybe<Scalars['Boolean']>;
  cardSocialSharingRounded?: Maybe<Scalars['Boolean']>;
  cardSocialSharingMap?: Maybe<SocialSharingInput>;
  showPagination?: Maybe<Scalars['Boolean']>;
  paginationStyle?: Maybe<Scalars['String']>;
  paginationColor?: Maybe<Scalars['String']>;
  paginationBackground?: Maybe<Scalars['String']>;
  paginationLimit?: Maybe<Scalars['Int']>;
  customCss?: Maybe<Scalars['String']>;
};

export type EmbedListResponse = {
  __typename?: 'EmbedListResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedList>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedListSettings = {
  __typename?: 'EmbedListSettings';
  id: Scalars['ID'];
  width?: Maybe<Scalars['Int']>;
  padding?: Maybe<Scalars['Int']>;
  cardsPadding?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleLines?: Maybe<Scalars['Int']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardShowHeader?: Maybe<Scalars['Boolean']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  mobileShowDescription?: Maybe<Scalars['Boolean']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardFooterFontSize?: Maybe<Scalars['Int']>;
  cardFooterPosition?: Maybe<EmbedListFooterPosition>;
  cardImagePosition?: Maybe<EmbedListImagePosition>;
  cardImageRadius?: Maybe<Scalars['Int']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardSocialSharing?: Maybe<Scalars['Boolean']>;
  cardSocialSharingRounded?: Maybe<Scalars['Boolean']>;
  cardSocialSharingMap?: Maybe<SocialSharing>;
  cardStyle?: Maybe<Scalars['String']>;
  showPagination?: Maybe<Scalars['Boolean']>;
  paginationStyle?: Maybe<Scalars['String']>;
  paginationColor?: Maybe<Scalars['String']>;
  paginationBackground?: Maybe<Scalars['String']>;
  paginationLimit?: Maybe<Scalars['Int']>;
  customCss?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};

export type EmbedSettingsUnion =
  | EmbedWallSettings
  | EmbedFeedSettings
  | EmbedTickerSettings
  | EmbedCarouselSettings
  | EmbedListSettings
  | EmbedGridSettings;

export type EmbedTemplate = {
  __typename?: 'EmbedTemplate';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
  active: Scalars['Boolean'];
  weight: Scalars['Float'];
  settings: EmbedTemplateSettings;
  modifiedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
};

export type EmbedTemplateSettings =
  | EmbedWallSettings
  | EmbedFeedSettings
  | EmbedTickerSettings
  | EmbedCarouselSettings
  | EmbedListSettings
  | EmbedGridSettings;

export type EmbedTicker = {
  __typename?: 'EmbedTicker';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedTickerSettings>;
};

export type EmbedTickerInput = {
  id: Scalars['ID'];
  template?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  direction?: Maybe<DirectionEnum>;
  background?: Maybe<Scalars['String']>;
  paddingY?: Maybe<Scalars['Int']>;
  fontFamily?: Maybe<Scalars['String']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleTransform?: Maybe<TextTransformEnum>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleFontWeight?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardTitleCharacters?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleStyle?: Maybe<EmbedTickerTitleStyle>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  titleBackground?: Maybe<Scalars['String']>;
  cardShowSource?: Maybe<Scalars['Boolean']>;
  cardSourceColor?: Maybe<Scalars['String']>;
  cardSourcePosition?: Maybe<EmbedTickerSourcePosition>;
};

export type EmbedTickerResponse = {
  __typename?: 'EmbedTickerResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedTicker>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedTickerSettings = {
  __typename?: 'EmbedTickerSettings';
  id: Scalars['ID'];
  count?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  direction?: Maybe<DirectionEnum>;
  background?: Maybe<Scalars['String']>;
  paddingY?: Maybe<Scalars['Int']>;
  fontFamily?: Maybe<Scalars['String']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleTransform?: Maybe<TextTransformEnum>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleFontWeight?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardTitleCharacters?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleStyle?: Maybe<EmbedTickerTitleStyle>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  titleBackground?: Maybe<Scalars['String']>;
  cardShowSource?: Maybe<Scalars['Boolean']>;
  cardSourceColor?: Maybe<Scalars['String']>;
  cardSourcePosition?: Maybe<EmbedTickerSourcePosition>;
};

export enum EmbedTickerSourcePosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

export enum EmbedTickerTitleStyle {
  Classic = 'classic',
  Modern = 'modern',
}

export type EmbedTitleSettings = {
  __typename?: 'EmbedTitleSettings';
  id: Scalars['ID'];
  enable?: Maybe<Scalars['Boolean']>;
  fontSize?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export enum EmbedType {
  Wall = 'news wall',
  List = 'list',
  Feed = 'feed',
  Carousel = 'carousel',
  Grid = 'grid',
  Ticker = 'ticker',
}

export type EmbedWall = {
  __typename?: 'EmbedWall';
  id: Scalars['ID'];
  feedId: Scalars['ID'];
  userID?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  settings?: Maybe<EmbedWallSettings>;
};

export type EmbedWallInput = {
  id: Scalars['ID'];
  padding?: Maybe<Scalars['Int']>;
  paddingY?: Maybe<Scalars['Int']>;
  responsive?: Maybe<Scalars['Boolean']>;
  columnsCount?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardStyle?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  autoHeight?: Maybe<Scalars['Boolean']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardTitleLines?: Maybe<Scalars['Int']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardSocialSharing?: Maybe<Scalars['Boolean']>;
  cardSocialSharingRounded?: Maybe<Scalars['Boolean']>;
  cardSocialSharingMap?: Maybe<SocialSharingInput>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardDescriptionAlign?: Maybe<TextAlign>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardImageRadius?: Maybe<Scalars['Int']>;
  cardImageGradient?: Maybe<Scalars['Boolean']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  showPagination?: Maybe<Scalars['Boolean']>;
  paginationStyle?: Maybe<Scalars['String']>;
  paginationColor?: Maybe<Scalars['String']>;
  paginationBackground?: Maybe<Scalars['String']>;
  paginationLimit?: Maybe<Scalars['Int']>;
  titlePaddingBottom?: Maybe<Scalars['Int']>;
};

export type EmbedWallResponse = {
  __typename?: 'EmbedWallResponse';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  type?: Maybe<EmbedType>;
  embed?: Maybe<EmbedWall>;
  status?: Maybe<Scalars['String']>;
};

export type EmbedWallSettings = {
  __typename?: 'EmbedWallSettings';
  id: Scalars['ID'];
  padding?: Maybe<Scalars['Int']>;
  paddingY?: Maybe<Scalars['Int']>;
  responsive?: Maybe<Scalars['Boolean']>;
  columnsCount?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  postsCount?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<LinkTarget>;
  customTarget?: Maybe<Scalars['String']>;
  cardStyle?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  cardShowBorder?: Maybe<Scalars['Boolean']>;
  cardBorderColor?: Maybe<Scalars['String']>;
  cardBorderRadius?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  autoHeight?: Maybe<Scalars['Boolean']>;
  cardImageLazy?: Maybe<Scalars['Boolean']>;
  cardImageRadius?: Maybe<Scalars['Int']>;
  titlePaddingBottom?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  titleFontSize?: Maybe<Scalars['Int']>;
  titleColor?: Maybe<Scalars['String']>;
  cardShowTitle?: Maybe<Scalars['Boolean']>;
  cardTitleFontSize?: Maybe<Scalars['Int']>;
  cardTitleColor?: Maybe<Scalars['String']>;
  cardTitleFontHeight?: Maybe<Scalars['Int']>;
  cardTitleAlign?: Maybe<TextAlign>;
  cardTitleLines?: Maybe<Scalars['Int']>;
  cardShowImage?: Maybe<Scalars['Boolean']>;
  cardShowDescription?: Maybe<Scalars['Boolean']>;
  cardDescriptionFontSize?: Maybe<Scalars['Int']>;
  cardDescriptionAlign?: Maybe<TextAlign>;
  cardSocialSharing?: Maybe<Scalars['Boolean']>;
  cardSocialSharingRounded?: Maybe<Scalars['Boolean']>;
  cardSocialSharingMap?: Maybe<SocialSharing>;
  cardDescriptionLines?: Maybe<Scalars['Int']>;
  cardDescriptionColor?: Maybe<Scalars['String']>;
  cardDescriptionFontHeight?: Maybe<Scalars['Int']>;
  cardBackground?: Maybe<Scalars['String']>;
  cardShowFooter?: Maybe<Scalars['Boolean']>;
  cardFooterColor?: Maybe<Scalars['String']>;
  cardImageLink?: Maybe<Scalars['Boolean']>;
  cardImageGradient?: Maybe<Scalars['Boolean']>;
  showPagination?: Maybe<Scalars['Boolean']>;
  paginationStyle?: Maybe<Scalars['String']>;
  paginationColor?: Maybe<Scalars['String']>;
  paginationBackground?: Maybe<Scalars['String']>;
  paginationLimit?: Maybe<Scalars['Int']>;
};

export type Enclosure = {
  __typename?: 'Enclosure';
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureTag = {
  __typename?: 'FeatureTag';
  id: Scalars['ID'];
  tagId: Scalars['ID'];
  tag: Tag;
};

export type Feed = {
  __typename?: 'Feed';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  generator?: Maybe<Scalars['String']>;
  feedUrl?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lastBuildDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  items?: Maybe<Array<Maybe<FeedItem>>>;
  tags?: Maybe<Array<FeatureTag>>;
  enableGlobalSettings?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Settings>;
  isCollection?: Maybe<Scalars['Boolean']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  option?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
  countActiveFeeds?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  rate?: Maybe<Scalars['Int']>;
};

export enum FeedInterfaceType {
  Generator = 'GENERATOR',
  Builder = 'BUILDER',
  Api = 'API',
  Picker = 'PICKER',
}

export type FeedItem = {
  __typename?: 'FeedItem';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  enclosure?: Maybe<Enclosure>;
  createdAt?: Maybe<Scalars['Date']>;
};

export enum FeedLayoutEnum {
  List = 'list',
  Grid = 'grid',
}

export enum FeedOrderByEnum {
  Name = 'name',
  CreatedAt = 'createdAt',
}

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['ID'];
  feedId?: Maybe<Scalars['ID']>;
  hideFilteredPosts?: Maybe<Scalars['Boolean']>;
  noImages?: Maybe<Scalars['Boolean']>;
  noDate?: Maybe<Scalars['Boolean']>;
  duplicateTitles?: Maybe<Scalars['Boolean']>;
  duplicateDescriptions?: Maybe<Scalars['Boolean']>;
  hideNonSecureLinks?: Maybe<Scalars['Boolean']>;
  noDescription?: Maybe<Scalars['Boolean']>;
  whitelist?: Maybe<Array<Maybe<Scalars['String']>>>;
  whiteListByTitle?: Maybe<Scalars['Boolean']>;
  whiteListByDescription?: Maybe<Scalars['Boolean']>;
  whiteListByLink?: Maybe<Scalars['Boolean']>;
  whiteListByImageUrl?: Maybe<Scalars['Boolean']>;
  blacklist?: Maybe<Array<Maybe<Scalars['String']>>>;
  blackListByTitle?: Maybe<Scalars['Boolean']>;
  blackListByDescription?: Maybe<Scalars['Boolean']>;
  blackListByLink?: Maybe<Scalars['Boolean']>;
  blackListByImageUrl?: Maybe<Scalars['Boolean']>;
  enableDateFilter?: Maybe<Scalars['Boolean']>;
  secondsUntil?: Maybe<Scalars['BigInt']>;
  titleReplaceKeywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  titleAutoCleaner?: Maybe<Scalars['Boolean']>;
  orderBy: FilterSortEnum;
  order: OrderEnum;
  rules: Array<FilterRule>;
};

export type FilterInput = {
  id: Scalars['ID'];
  feedId?: Maybe<Scalars['ID']>;
  hideFilteredPosts?: Maybe<Scalars['Boolean']>;
  noImages?: Maybe<Scalars['Boolean']>;
  noDate?: Maybe<Scalars['Boolean']>;
  duplicateTitles?: Maybe<Scalars['Boolean']>;
  duplicateDescriptions?: Maybe<Scalars['Boolean']>;
  hideNonSecureLinks?: Maybe<Scalars['Boolean']>;
  noDescription?: Maybe<Scalars['Boolean']>;
  whitelist?: Maybe<Array<Maybe<Scalars['String']>>>;
  whiteListByTitle?: Maybe<Scalars['Boolean']>;
  whiteListByDescription?: Maybe<Scalars['Boolean']>;
  whiteListByLink?: Maybe<Scalars['Boolean']>;
  whiteListByImageUrl?: Maybe<Scalars['Boolean']>;
  blacklist?: Maybe<Array<Maybe<Scalars['String']>>>;
  blackListByTitle?: Maybe<Scalars['Boolean']>;
  blackListByDescription?: Maybe<Scalars['Boolean']>;
  blackListByLink?: Maybe<Scalars['Boolean']>;
  blackListByImageUrl?: Maybe<Scalars['Boolean']>;
  enableDateFilter?: Maybe<Scalars['Boolean']>;
  secondsUntil?: Maybe<Scalars['BigInt']>;
  titleReplaceKeywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  titleAutoCleaner?: Maybe<Scalars['Boolean']>;
  orderBy: FilterSortEnum;
  order: OrderEnum;
};

export type FilterRule = {
  __typename?: 'FilterRule';
  id: Scalars['ID'];
  type: FilterRuleType;
  searchTitle: Scalars['Boolean'];
  searchDescription: Scalars['Boolean'];
  searchUrl: Scalars['Boolean'];
  take?: Maybe<Scalars['String']>;
  put?: Maybe<Scalars['String']>;
};

export type FilterRuleInput = {
  type?: Maybe<FilterRuleType>;
  searchTitle?: Maybe<Scalars['Boolean']>;
  searchDescription?: Maybe<Scalars['Boolean']>;
  searchUrl?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['String']>;
  put?: Maybe<Scalars['String']>;
};

export enum FilterRuleType {
  Replace = 'replace',
  Remove = 'remove',
  RemoveUrl = 'removeUrl',
  AddPrefix = 'addPrefix',
  AddSuffix = 'addSuffix',
}

export enum FilterSortEnum {
  Date = 'date',
  Title = 'title',
  CreatedAt = 'createdAt',
  Random = 'random',
}

export enum GridTemplate {
  Default = 'default',
  List = 'list',
  Wall = 'wall',
}

export enum GridTemplateDuplicate {
  Rest = 'rest',
  All = 'all',
}

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<Scalars['String']>>>;
  feedsData: Array<Feed>;
  tags?: Maybe<Array<FeatureTag>>;
  description?: Maybe<Scalars['String']>;
  isMaster?: Maybe<Scalars['Boolean']>;
  generator?: Maybe<Scalars['String']>;
  isLimitPostsOfFeed?: Maybe<Scalars['Boolean']>;
  limitPostsOfFeed?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  enableGlobalSettings?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Settings>;
};

export type HostedPage = {
  __typename?: 'hostedPage';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  embed?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type ImageInput = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['ID'];
  value: Scalars['JSON'];
  modifiedAt: Scalars['Date'];
  createdAt: Scalars['Date'];
};

export type KnowledgeCategory = {
  __typename?: 'KnowledgeCategory';
  id: Scalars['ID'];
  title: Scalars['String'];
  summary: Scalars['String'];
  image: Scalars['String'];
  color: Scalars['String'];
  posts: Array<KnowledgePost>;
};

export type KnowledgeCategoryRow = {
  __typename?: 'KnowledgeCategoryRow';
  id: Scalars['ID'];
  title: Scalars['String'];
  summary: Scalars['String'];
  image: Scalars['String'];
  color: Scalars['String'];
};

export type KnowledgePost = {
  __typename?: 'KnowledgePost';
  id: Scalars['ID'];
  title: Scalars['String'];
  summary: Scalars['String'];
  body: Scalars['String'];
  publishedAt?: Maybe<Scalars['Date']>;
};

export type KnowledgeRelation = {
  __typename?: 'KnowledgeRelation';
  categoryId: Scalars['ID'];
  postId: Scalars['ID'];
};

export enum LinkTarget {
  New = 'new',
  Same = 'same',
  Custom = 'custom',
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user: User;
};

export type Moderation = {
  __typename?: 'Moderation';
  id: Scalars['ID'];
  feed?: Maybe<Feed>;
  filter?: Maybe<Filter>;
  prefixList: Array<Maybe<Scalars['String']>>;
  postfixList: Array<Maybe<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ping?: Maybe<Scalars['Boolean']>;
  fetchError?: Maybe<Scalars['Boolean']>;
  loginWithEmail?: Maybe<Scalars['Boolean']>;
  logout?: Maybe<Scalars['Boolean']>;
  registrationWithEmail?: Maybe<Scalars['Boolean']>;
  changeEmail?: Maybe<Scalars['Boolean']>;
  changeTwitterEmail?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyNewEmail: LoginResponse;
  confirmResetPassword?: Maybe<Scalars['Boolean']>;
  updatePassword?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  updateSettings?: Maybe<Settings>;
  updateUserSettings?: Maybe<UserSettings>;
  createTag: CreateTagResponse;
  removeTag?: Maybe<Tag>;
  createFeed?: Maybe<Feed>;
  attachFeed?: Maybe<Feed>;
  updateFeed?: Maybe<Feed>;
  deleteFeed?: Maybe<Scalars['Boolean']>;
  createGroup?: Maybe<Group>;
  copyGroup?: Maybe<Group>;
  updateGroup?: Maybe<Group>;
  deleteGroup?: Maybe<Array<Maybe<Group>>>;
  createReview?: Maybe<Review>;
  createFeedback?: Maybe<Scalars['Boolean']>;
  requestCheckout?: Maybe<HostedPage>;
  requestPortal?: Maybe<PortalPage>;
  createSubscription?: Maybe<User>;
  updateSubscription?: Maybe<User>;
  cancelSubscription?: Maybe<User>;
  updateEmbed: Embed;
  updateEmbedWall?: Maybe<EmbedWallResponse>;
  updateEmbedFeed?: Maybe<EmbedFeedResponse>;
  updateEmbedCarousel?: Maybe<EmbedCarouselResponse>;
  updateEmbedList?: Maybe<EmbedListResponse>;
  updateEmbedTicker: EmbedTickerResponse;
  updateEmbedGrid: EmbedGridResponse;
  updateFilter?: Maybe<Filter>;
  addFilterRule: Filter;
  removeFilterRule: Filter;
  updateFilterRule: Filter;
  admin?: Maybe<Admin>;
  resendVerifyEmail?: Maybe<Scalars['Boolean']>;
  createBlogPost?: Maybe<BlogPost>;
  updateBlogPost?: Maybe<BlogPost>;
  createProviderApp?: Maybe<ProviderApp>;
  createCollection: Collection;
  updateCollection: Collection;
  deleteCollection: Scalars['Boolean'];
  createCollectionCard: CollectionCard;
  updateCollectionCard: CollectionCard;
  deleteCollectionCard: Scalars['Boolean'];
  moveCollectionCard: CollectionCard;
  addArticleToCollection: CollectionCard;
  removeArticleFromCollection: Scalars['Boolean'];
  createKnowledgeCategory: KnowledgeCategory;
  updateKnowledgeCategory: KnowledgeCategory;
  deleteKnowledgeCategory: Scalars['Boolean'];
  createKnowledgePost: KnowledgePost;
  updateKnowledgePost: KnowledgePost;
  deleteKnowledgePost: Scalars['Boolean'];
};

export type MutationPingArgs = {
  path: Scalars['String'];
};

export type MutationFetchErrorArgs = {
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type MutationLoginWithEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  updateEmailToken?: Maybe<Scalars['String']>;
};

export type MutationRegistrationWithEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
};

export type MutationChangeEmailArgs = {
  newEmail: Scalars['String'];
  newPassword?: Maybe<Scalars['String']>;
};

export type MutationChangeTwitterEmailArgs = {
  newEmail: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationVerifyEmailArgs = {
  token?: Maybe<Scalars['String']>;
};

export type MutationVerifyNewEmailArgs = {
  token: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationConfirmResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationUpdatePasswordArgs = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};

export type MutationUpdateUserArgs = {
  companyName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type MutationUpdateSettingsArgs = {
  id?: Maybe<Scalars['ID']>;
  imageInEnclosure: Scalars['Boolean'];
  imageInMedia: Scalars['Boolean'];
  imageInDescription: Scalars['Boolean'];
  youtubeVideoIframe: Scalars['Boolean'];
  youtubeDescription: Scalars['Boolean'];
  instagramVideos: Scalars['Boolean'];
  twitterEmbeds: Scalars['Boolean'];
  twitterPrefixWithUsername: Scalars['Boolean'];
  twitterRemoveUrlFromTitle: Scalars['Boolean'];
  includeIFramesWhenPossible: Scalars['Boolean'];
  postLimit?: Maybe<Scalars['Int']>;
  bundlePostLimit?: Maybe<Scalars['Int']>;
  onlyAscii: Scalars['Boolean'];
  enableOuo?: Maybe<Scalars['Boolean']>;
  ouoToken?: Maybe<Scalars['String']>;
};

export type MutationUpdateUserSettingsArgs = {
  openDrawer?: Maybe<Scalars['Boolean']>;
  feedsLayout?: Maybe<FeedLayoutEnum>;
  feedsOrder?: Maybe<OrderEnum>;
  feedsOrderBy?: Maybe<FeedOrderByEnum>;
  feedsLimit?: Maybe<Scalars['Int']>;
  bundlesLayout?: Maybe<BundleLayoutEnum>;
  bundlesOrder?: Maybe<OrderEnum>;
  bundlesOrderBy?: Maybe<BundleOrderByEnum>;
  bundlesLimit?: Maybe<Scalars['Int']>;
  collectionsLayout?: Maybe<CollectionLayoutEnum>;
  collectionsOrder?: Maybe<OrderEnum>;
  collectionsOrderBy?: Maybe<CollectionOrderByEnum>;
  collectionsLimit?: Maybe<Scalars['Int']>;
  themeStyle?: Maybe<ThemeStyleEnum>;
};

export type MutationCreateTagArgs = {
  label: Scalars['String'];
  resourceId?: Maybe<Scalars['ID']>;
  resourceType?: Maybe<TagResourceTypeEnum>;
};

export type MutationRemoveTagArgs = {
  id: Scalars['ID'];
};

export type MutationCreateFeedArgs = {
  url?: Maybe<Scalars['String']>;
  simulate?: Maybe<Scalars['Boolean']>;
  isPreview?: Maybe<Scalars['Boolean']>;
  interfaceType?: Maybe<FeedInterfaceType>;
  scrapingRules?: Maybe<ScrapingRulesInput>;
  requestObject?: Maybe<RequestObjectInput>;
};

export type MutationAttachFeedArgs = {
  feedId: Scalars['ID'];
};

export type MutationUpdateFeedArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['ID']>>;
  enableGlobalSettings?: Maybe<Scalars['Boolean']>;
};

export type MutationDeleteFeedArgs = {
  id: Scalars['ID'];
};

export type MutationCreateGroupArgs = {
  title: Scalars['String'];
  feeds: Array<Scalars['String']>;
};

export type MutationCopyGroupArgs = {
  bundleId: Scalars['ID'];
  title: Scalars['String'];
  feeds: Array<Scalars['String']>;
  filter?: Maybe<Scalars['Boolean']>;
  embeds?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateGroupArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Scalars['String']>>;
  isLimitPostsOfFeed?: Maybe<Scalars['Boolean']>;
  limitPostsOfFeed?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Scalars['ID']>>;
  enableGlobalSettings?: Maybe<Scalars['Boolean']>;
};

export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};

export type MutationCreateReviewArgs = {
  companyName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  companyLogo?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type MutationCreateFeedbackArgs = {
  option?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
};

export type MutationRequestCheckoutArgs = {
  plan: Scalars['String'];
};

export type MutationCreateSubscriptionArgs = {
  hostedPageId: Scalars['String'];
};

export type MutationUpdateSubscriptionArgs = {
  plan: Scalars['String'];
};

export type MutationUpdateEmbedArgs = {
  input?: Maybe<EmbedInput>;
};

export type MutationUpdateEmbedWallArgs = {
  input?: Maybe<EmbedWallInput>;
};

export type MutationUpdateEmbedFeedArgs = {
  input?: Maybe<EmbedFeedInput>;
};

export type MutationUpdateEmbedCarouselArgs = {
  input?: Maybe<EmbedCarouselInput>;
};

export type MutationUpdateEmbedListArgs = {
  input?: Maybe<EmbedListInput>;
};

export type MutationUpdateEmbedTickerArgs = {
  input?: Maybe<EmbedTickerInput>;
};

export type MutationUpdateEmbedGridArgs = {
  input?: Maybe<EmbedGridInput>;
};

export type MutationUpdateFilterArgs = {
  filter?: Maybe<FilterInput>;
};

export type MutationAddFilterRuleArgs = {
  filterId: Scalars['ID'];
  body: FilterRuleInput;
};

export type MutationRemoveFilterRuleArgs = {
  id: Scalars['ID'];
  filterId: Scalars['ID'];
};

export type MutationUpdateFilterRuleArgs = {
  id: Scalars['ID'];
  filterId: Scalars['ID'];
  body: FilterRuleInput;
};

export type MutationResendVerifyEmailArgs = {
  email: Scalars['String'];
};

export type MutationCreateBlogPostArgs = {
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type MutationUpdateBlogPostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  breadcrumb?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ImageInput>>>;
  mainImageIndex?: Maybe<Scalars['Int']>;
};

export type MutationCreateProviderAppArgs = {
  url?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  providerIcon?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  providerTitle?: Maybe<Scalars['String']>;
  fromSection?: Maybe<Scalars['String']>;
  providerDescription?: Maybe<Scalars['String']>;
  examples?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  scrapingRules?: Maybe<ScrapingRulesInput>;
};

export type MutationCreateCollectionArgs = {
  input: CollectionCreateInput;
};

export type MutationUpdateCollectionArgs = {
  input: CollectionUpdateInput;
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};

export type MutationCreateCollectionCardArgs = {
  input: CollectionCardCreateInput;
};

export type MutationUpdateCollectionCardArgs = {
  input: CollectionCardUpdateInput;
};

export type MutationDeleteCollectionCardArgs = {
  id: Scalars['ID'];
  collectionId: Scalars['ID'];
};

export type MutationMoveCollectionCardArgs = {
  id: Scalars['ID'];
  toCollection: Scalars['ID'];
  fromCollection: Scalars['ID'];
};

export type MutationAddArticleToCollectionArgs = {
  input: CollectionAddArticleInput;
};

export type MutationRemoveArticleFromCollectionArgs = {
  input: CollectionRemoveArticleInput;
};

export type MutationCreateKnowledgeCategoryArgs = {
  title: Scalars['String'];
  summary: Scalars['String'];
  image: Scalars['String'];
  color: Scalars['String'];
};

export type MutationUpdateKnowledgeCategoryArgs = {
  categoryId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type MutationDeleteKnowledgeCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type MutationCreateKnowledgePostArgs = {
  title: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  categories: Array<Scalars['ID']>;
};

export type MutationUpdateKnowledgePostArgs = {
  postId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['ID']>>;
};

export type MutationDeleteKnowledgePostArgs = {
  postId: Scalars['ID'];
};

export type MyFeeds = {
  __typename?: 'MyFeeds';
  rows?: Maybe<Array<Maybe<Feed>>>;
  count?: Maybe<Scalars['Int']>;
};

export type MyGroups = {
  __typename?: 'MyGroups';
  rows?: Maybe<Array<Maybe<Group>>>;
  count?: Maybe<Scalars['Int']>;
};

export enum NavigationPosition {
  Center = 'center',
  Bottom = 'bottom',
}

export enum NavigationStyle {
  Classic = 'classic',
  Modern = 'modern',
  Minimal = 'minimal',
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['ID'];
  planId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  feedsLimit?: Maybe<Scalars['Int']>;
  refreshRate?: Maybe<Scalars['Int']>;
  chargbeePlanId?: Maybe<Scalars['String']>;
  postPerFeed?: Maybe<Scalars['Int']>;
  postLinkToRss?: Maybe<Scalars['Boolean']>;
  isInstagram?: Maybe<Scalars['Boolean']>;
  isBundles?: Maybe<Scalars['Boolean']>;
  isFilters?: Maybe<Scalars['Boolean']>;
  isCustomEmbeds?: Maybe<Scalars['Boolean']>;
  isSupport?: Maybe<Scalars['Boolean']>;
  maxPostLimit?: Maybe<Scalars['Int']>;
  timePeriod?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  maxPostBundleLimit?: Maybe<Scalars['Int']>;
  maxPostFeedLimit?: Maybe<Scalars['Int']>;
};

export type PlanInput = {
  id: Scalars['ID'];
  planId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  feedsLimit?: Maybe<Scalars['Int']>;
  refreshRate?: Maybe<Scalars['Int']>;
  chargbeePlanId?: Maybe<Scalars['String']>;
  postPerFeed?: Maybe<Scalars['Int']>;
  postLinkToRss?: Maybe<Scalars['Boolean']>;
  isInstagram?: Maybe<Scalars['Boolean']>;
  isBundles?: Maybe<Scalars['Boolean']>;
  isFilters?: Maybe<Scalars['Boolean']>;
  isCustomEmbeds?: Maybe<Scalars['Boolean']>;
  isSupport?: Maybe<Scalars['Boolean']>;
  maxPostLimit?: Maybe<Scalars['Int']>;
  timePeriod?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export enum PlanTimePeriod {
  Monthly = 'monthly',
  Year = 'year',
}

export type PortalPage = {
  __typename?: 'portalPage';
  id: Scalars['ID'];
  token?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
};

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type ProviderApp = {
  __typename?: 'ProviderApp';
  id: Scalars['ID'];
  scrapingRules?: Maybe<ScrapingRules>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fromSection?: Maybe<Scalars['String']>;
  providerTitle?: Maybe<Scalars['String']>;
  providerDescription?: Maybe<Scalars['String']>;
  providerIcon?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  examples?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  modifiedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  userSettings?: Maybe<UserSettings>;
  plans?: Maybe<Array<Maybe<Plan>>>;
  tags: Array<Tag>;
  feed?: Maybe<Feed>;
  myFeeds?: Maybe<MyFeeds>;
  embedTemplates: Array<EmbedTemplate>;
  embed: Embed;
  embedWall?: Maybe<EmbedWallResponse>;
  embedFeed?: Maybe<EmbedFeedResponse>;
  embedCarousel?: Maybe<EmbedCarouselResponse>;
  embedList?: Maybe<EmbedListResponse>;
  embedTicker?: Maybe<EmbedTickerResponse>;
  embedGrid?: Maybe<EmbedGridResponse>;
  moderation?: Maybe<Moderation>;
  settings?: Maybe<Settings>;
  group?: Maybe<Group>;
  groups?: Maybe<MyGroups>;
  blogPost?: Maybe<BlogPost>;
  blogPostList?: Maybe<Array<Maybe<BlogPost>>>;
  providerApp?: Maybe<ProviderApp>;
  providerAppList?: Maybe<Array<Maybe<ProviderApp>>>;
  siteHtml?: Maybe<SiteHtml>;
  admin?: Maybe<Admin>;
  widgetTicker: WidgetTickerResponse;
  widgetFeed: WidgetFeedResponse;
  collection: Collection;
  collections: CollectionsResponse;
  getCollectionArticle: CollectionCardParsed;
  knowledgeRelations: Array<KnowledgeRelation>;
  knowledgeCategories: Array<KnowledgeCategoryRow>;
  knowledgeCategory: KnowledgeCategory;
  knowledgePost: KnowledgePost;
};

export type QueryFeedArgs = {
  id: Scalars['ID'];
  after?: Maybe<Scalars['Int']>;
  isPreview?: Maybe<Scalars['Boolean']>;
};

export type QueryMyFeedsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<FeedOrderByEnum>;
};

export type QueryEmbedTemplatesArgs = {
  type: Scalars['String'];
};

export type QueryEmbedArgs = {
  id: Scalars['ID'];
  type?: Maybe<EmbedType>;
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedWallArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedFeedArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedCarouselArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedListArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedTickerArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryEmbedGridArgs = {
  id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
};

export type QueryModerationArgs = {
  id: Scalars['ID'];
};

export type QueryGroupArgs = {
  id: Scalars['ID'];
};

export type QueryGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<BundleOrderByEnum>;
};

export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};

export type QueryBlogPostListArgs = {
  status?: Maybe<Scalars['String']>;
};

export type QueryProviderAppArgs = {
  id: Scalars['ID'];
};

export type QueryProviderAppListArgs = {
  published?: Maybe<Scalars['Boolean']>;
};

export type QuerySiteHtmlArgs = {
  site: Scalars['String'];
};

export type QueryWidgetTickerArgs = {
  id: Scalars['ID'];
};

export type QueryWidgetFeedArgs = {
  id: Scalars['ID'];
};

export type QueryCollectionArgs = {
  id: Scalars['ID'];
};

export type QueryCollectionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderBy?: Maybe<CollectionOrderByEnum>;
};

export type QueryGetCollectionArticleArgs = {
  url: Scalars['String'];
};

export type QueryKnowledgeCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type QueryKnowledgePostArgs = {
  postId: Scalars['ID'];
};

export type RequestObjectInput = {
  provider?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  includeRetweets?: Maybe<Scalars['Boolean']>;
  includeReplies?: Maybe<Scalars['Boolean']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  companyLogo?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type ScrapingRules = {
  __typename?: 'ScrapingRules';
  id: Scalars['ID'];
  strategy?: Maybe<Scalars['String']>;
  regexUrl?: Maybe<Scalars['String']>;
  cssAnchor?: Maybe<Scalars['String']>;
  isJS?: Maybe<Scalars['Boolean']>;
};

export type ScrapingRulesInput = {
  id?: Maybe<Scalars['ID']>;
  strategy?: Maybe<Scalars['String']>;
  regexUrl?: Maybe<Scalars['String']>;
  cssAnchor?: Maybe<Scalars['String']>;
  cssSelectors?: Maybe<CssSelectors>;
  isJS?: Maybe<Scalars['Boolean']>;
};

export type Settings = {
  __typename?: 'Settings';
  id?: Maybe<Scalars['ID']>;
  imageInDescription?: Maybe<Scalars['Boolean']>;
  imageInEnclosure?: Maybe<Scalars['Boolean']>;
  imageInMedia?: Maybe<Scalars['Boolean']>;
  youtubeVideoIframe?: Maybe<Scalars['Boolean']>;
  youtubeDescription?: Maybe<Scalars['Boolean']>;
  instagramVideos?: Maybe<Scalars['Boolean']>;
  twitterEmbeds?: Maybe<Scalars['Boolean']>;
  twitterPrefixWithUsername?: Maybe<Scalars['Boolean']>;
  twitterRemoveUrlFromTitle?: Maybe<Scalars['Boolean']>;
  includeIFramesWhenPossible?: Maybe<Scalars['Boolean']>;
  postLimit?: Maybe<Scalars['Int']>;
  bundlePostLimit?: Maybe<Scalars['Int']>;
  maxPostFeedLimit?: Maybe<Scalars['Int']>;
  maxPostBundleLimit?: Maybe<Scalars['Int']>;
  onlyAscii?: Maybe<Scalars['Boolean']>;
  enableOuo?: Maybe<Scalars['Boolean']>;
  ouoToken?: Maybe<Scalars['String']>;
};

export type SettingsInput = {
  imageInDescription?: Maybe<Scalars['Boolean']>;
  imageInEnclosure?: Maybe<Scalars['Boolean']>;
  imageInMedia?: Maybe<Scalars['Boolean']>;
  youtubeVideoIframe?: Maybe<Scalars['Boolean']>;
  youtubeDescription?: Maybe<Scalars['Boolean']>;
  instagramVideos?: Maybe<Scalars['Boolean']>;
  twitterEmbeds?: Maybe<Scalars['Boolean']>;
  twitterPrefixWithUsername?: Maybe<Scalars['Boolean']>;
  twitterRemoveUrlFromTitle?: Maybe<Scalars['Boolean']>;
  includeIFramesWhenPossible?: Maybe<Scalars['Boolean']>;
  postLimit?: Maybe<Scalars['Int']>;
  bundlePostLimit?: Maybe<Scalars['Int']>;
  maxPostLimit?: Maybe<Scalars['Int']>;
  onlyAscii?: Maybe<Scalars['Boolean']>;
};

export type SiteHtml = {
  __typename?: 'SiteHtml';
  body: Scalars['String'];
};

export type SocialSharing = {
  __typename?: 'SocialSharing';
  facebook?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  pinterest?: Maybe<Scalars['Boolean']>;
  reddit?: Maybe<Scalars['Boolean']>;
  whatsapp?: Maybe<Scalars['Boolean']>;
  linkdin?: Maybe<Scalars['Boolean']>;
  telegram?: Maybe<Scalars['Boolean']>;
  yahoo?: Maybe<Scalars['Boolean']>;
  vk?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  thumblr?: Maybe<Scalars['Boolean']>;
};

export type SocialSharingInput = {
  facebook?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  pinterest?: Maybe<Scalars['Boolean']>;
  reddit?: Maybe<Scalars['Boolean']>;
  whatsapp?: Maybe<Scalars['Boolean']>;
  linkdin?: Maybe<Scalars['Boolean']>;
  telegram?: Maybe<Scalars['Boolean']>;
  yahoo?: Maybe<Scalars['Boolean']>;
  vk?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  thumblr?: Maybe<Scalars['Boolean']>;
};

export type SpamAccountData = {
  __typename?: 'SpamAccountData';
  ip?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  usersCount?: Maybe<Scalars['Int']>;
  lastCreatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<Maybe<UserInfo>>>;
};

export type SpamAccountFilters = {
  __typename?: 'SpamAccountFilters';
  period?: Maybe<Scalars['String']>;
};

export type SpamAccountReport = {
  __typename?: 'SpamAccountReport';
  total?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filters?: Maybe<SpamAccountFilters>;
  data?: Maybe<Array<Maybe<SpamAccountData>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  id?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  selectedPlan?: Maybe<Plan>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  trialEnd?: Maybe<Scalars['Date']>;
  cancelledAt?: Maybe<Scalars['Date']>;
  isTrial?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionInput = {
  id?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  selectedPlan?: Maybe<PlanInput>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  trialEnd?: Maybe<Scalars['Date']>;
  cancelledAt?: Maybe<Scalars['Date']>;
  isTrial?: Maybe<Scalars['Boolean']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export enum TagResourceTypeEnum {
  Feed = 'feed',
  Group = 'group',
}

export enum TextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum TextTransformEnum {
  Uppercase = 'uppercase',
}

export enum ThemeStyleEnum {
  Light = 'light',
  Dark = 'dark',
}

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  features?: Maybe<UserFeatures>;
  photo?: Maybe<Scalars['String']>;
  oauth?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscription?: Maybe<Subscription>;
  createdAt?: Maybe<Scalars['String']>;
  isSubExpired?: Maybe<Scalars['Boolean']>;
  userSettings?: Maybe<UserSettings>;
};

export type UserFeatures = {
  __typename?: 'UserFeatures';
  id?: Maybe<Scalars['String']>;
  rssBuilderIsJS?: Maybe<Scalars['Boolean']>;
  rssBuilderCssSelector?: Maybe<Scalars['Boolean']>;
  replaceArticleDateToOriginDate?: Maybe<Scalars['Boolean']>;
  bundleLimit?: Maybe<Scalars['Boolean']>;
  postLimit?: Maybe<Scalars['Boolean']>;
  instagramShort?: Maybe<Scalars['Boolean']>;
  instagramCard?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['Boolean']>;
  customCss?: Maybe<Scalars['Boolean']>;
  rssPicker?: Maybe<Scalars['Boolean']>;
  embedGrid?: Maybe<Scalars['Boolean']>;
  embedFeedShadowRoot?: Maybe<Scalars['Boolean']>;
  wallGallery?: Maybe<Scalars['Boolean']>;
  feedOnBundles?: Maybe<Scalars['Boolean']>;
  enableBundleLimit?: Maybe<Scalars['Boolean']>;
  newGridTemplates?: Maybe<Scalars['Boolean']>;
  pickerCssSelectors?: Maybe<Scalars['Boolean']>;
  pickerEnableJs?: Maybe<Scalars['Boolean']>;
  customTarget?: Maybe<Scalars['Boolean']>;
  isCollections?: Maybe<Scalars['Boolean']>;
  wallPinterest?: Maybe<Scalars['Boolean']>;
  masterBundle?: Maybe<Scalars['Boolean']>;
  dateFormat?: Maybe<Scalars['Boolean']>;
  carouselNavigation?: Maybe<Scalars['Boolean']>;
  wallTemplates?: Maybe<Scalars['Boolean']>;
  feedTemplates?: Maybe<Scalars['Boolean']>;
  listTemplates?: Maybe<Scalars['Boolean']>;
  carouselTemplates?: Maybe<Scalars['Boolean']>;
  tickerTemplates?: Maybe<Scalars['Boolean']>;
  gridTemplates?: Maybe<Scalars['Boolean']>;
  carouselGallery?: Maybe<Scalars['Boolean']>;
  onlyAscii?: Maybe<Scalars['Boolean']>;
  filterFormatter?: Maybe<Scalars['Boolean']>;
  rssBuilderUrlParams?: Maybe<Scalars['Boolean']>;
  ignoreIframelyCache?: Maybe<Scalars['Boolean']>;
  yearlyPlans?: Maybe<Scalars['Boolean']>;
  newIntegrations?: Maybe<Scalars['Boolean']>;
};

export type UserFeaturesInput = {
  id?: Maybe<Scalars['String']>;
  rssBuilderIsJS?: Maybe<Scalars['Boolean']>;
  rssBuilderCssSelector?: Maybe<Scalars['Boolean']>;
  replaceArticleDateToOriginDate?: Maybe<Scalars['Boolean']>;
  bundleLimit?: Maybe<Scalars['Boolean']>;
  postLimit?: Maybe<Scalars['Boolean']>;
  instagramCard?: Maybe<Scalars['Boolean']>;
  instagramShort?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['Boolean']>;
  customCss?: Maybe<Scalars['Boolean']>;
  rssPicker?: Maybe<Scalars['Boolean']>;
  embedGrid?: Maybe<Scalars['Boolean']>;
  embedFeedShadowRoot?: Maybe<Scalars['Boolean']>;
  wallGallery?: Maybe<Scalars['Boolean']>;
  feedOnBundles?: Maybe<Scalars['Boolean']>;
  enableBundleLimit?: Maybe<Scalars['Boolean']>;
  newGridTemplates?: Maybe<Scalars['Boolean']>;
  pickerCssSelectors?: Maybe<Scalars['Boolean']>;
  pickerEnableJs?: Maybe<Scalars['Boolean']>;
  customTarget?: Maybe<Scalars['Boolean']>;
  isCollections?: Maybe<Scalars['Boolean']>;
  wallPinterest?: Maybe<Scalars['Boolean']>;
  masterBundle?: Maybe<Scalars['Boolean']>;
  dateFormat?: Maybe<Scalars['Boolean']>;
  carouselNavigation?: Maybe<Scalars['Boolean']>;
  wallTemplates?: Maybe<Scalars['Boolean']>;
  feedTemplates?: Maybe<Scalars['Boolean']>;
  listTemplates?: Maybe<Scalars['Boolean']>;
  carouselTemplates?: Maybe<Scalars['Boolean']>;
  tickerTemplates?: Maybe<Scalars['Boolean']>;
  gridTemplates?: Maybe<Scalars['Boolean']>;
  carouselGallery?: Maybe<Scalars['Boolean']>;
  onlyAscii?: Maybe<Scalars['Boolean']>;
  filterFormatter?: Maybe<Scalars['Boolean']>;
  ignoreIframelyCache?: Maybe<Scalars['Boolean']>;
  rssBuilderUrlParams?: Maybe<Scalars['Boolean']>;
  yearlyPlans?: Maybe<Scalars['Boolean']>;
  newIntegrations?: Maybe<Scalars['Boolean']>;
};

export type UserFeedbackReport = {
  __typename?: 'UserFeedbackReport';
  rows: Array<Maybe<Feedback>>;
  count: Scalars['Int'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  trialEnd?: Maybe<Scalars['Date']>;
  cancelledAt?: Maybe<Scalars['Date']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  ip?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Scalars['String']>;
  oauth?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Date']>;
  isTrial?: Maybe<Scalars['Boolean']>;
  isSubExpired?: Maybe<Scalars['Boolean']>;
  planName?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  chargebeeId?: Maybe<Scalars['String']>;
  setting?: Maybe<Settings>;
  features?: Maybe<UserFeatures>;
  plan: Plan;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  openDrawer?: Maybe<Scalars['Boolean']>;
  feedsLayout?: Maybe<FeedLayoutEnum>;
  feedsOrder?: Maybe<OrderEnum>;
  feedsOrderBy?: Maybe<FeedOrderByEnum>;
  feedsLimit?: Maybe<Scalars['Int']>;
  bundlesLayout?: Maybe<BundleLayoutEnum>;
  bundlesOrder?: Maybe<OrderEnum>;
  bundlesOrderBy?: Maybe<BundleOrderByEnum>;
  bundlesLimit?: Maybe<Scalars['Int']>;
  collectionsLayout?: Maybe<CollectionLayoutEnum>;
  collectionsOrder?: Maybe<OrderEnum>;
  collectionsOrderBy?: Maybe<CollectionOrderByEnum>;
  collectionsLimit?: Maybe<Scalars['Int']>;
  themeStyle?: Maybe<ThemeStyleEnum>;
};

export type WidgetFeedResponse = {
  __typename?: 'WidgetFeedResponse';
  id: Scalars['ID'];
  feed: Feed;
  settings: EmbedFeedSettings;
  status: Scalars['String'];
};

export type WidgetTickerResponse = {
  __typename?: 'WidgetTickerResponse';
  id: Scalars['ID'];
  feed: Feed;
  settings: EmbedTickerSettings;
  status: Scalars['String'];
};
