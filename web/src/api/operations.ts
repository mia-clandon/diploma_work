import * as Types from './schemas';

export type LoginWithEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  updateEmailToken?: Types.Maybe<Types.Scalars['String']>;
}>;

export type LoginWithEmailMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'loginWithEmail'>;

export type RegistrationWithEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  firstName?: Types.Maybe<Types.Scalars['String']>;
  lastName?: Types.Maybe<Types.Scalars['String']>;
  companyName?: Types.Maybe<Types.Scalars['String']>;
}>;

export type RegistrationWithEmailMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'registrationWithEmail'>;

export type ResetPasswordMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'resetPassword'>;

export type VerifyEmailMutationVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;

export type VerifyEmailMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'verifyEmail'>;

export type BlogPostListQueryVariables = Types.Exact<{
  status?: Types.Maybe<Types.Scalars['String']>;
}>;

export type BlogPostListQuery = { __typename?: 'Query' } & {
  blogPostList?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'BlogPost' } & Pick<
          Types.BlogPost,
          'id' | 'title' | 'summary' | 'status' | 'mainImageIndex' | 'publishedDate'
        > & { images?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Image' } & Pick<Types.Image, 'src' | 'alt'>>>> }
      >
    >
  >;
};

export type CopyGroupMutationVariables = Types.Exact<{
  bundleId: Types.Scalars['ID'];
  title: Types.Scalars['String'];
  feeds: Array<Types.Scalars['String']> | Types.Scalars['String'];
  filter?: Types.Maybe<Types.Scalars['Boolean']>;
  embeds?: Types.Maybe<Types.Scalars['Boolean']>;
  settings?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type CopyGroupMutation = { __typename?: 'Mutation' } & {
  copyGroup?: Types.Maybe<{ __typename?: 'Group' } & GroupFragment>;
};

export type CreateGroupMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  feeds: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;

export type CreateGroupMutation = { __typename?: 'Mutation' } & {
  createGroup?: Types.Maybe<{ __typename?: 'Group' } & GroupFragment>;
};

export type UpdateGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  title?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
  feeds?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  isLimitPostsOfFeed?: Types.Maybe<Types.Scalars['Boolean']>;
  limitPostsOfFeed?: Types.Maybe<Types.Scalars['Int']>;
  tags?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
  enableGlobalSettings?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type UpdateGroupMutation = { __typename?: 'Mutation' } & {
  updateGroup?: Types.Maybe<{ __typename?: 'Group' } & GroupFragment>;
};

export type GroupQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type GroupQuery = { __typename?: 'Query' } & { group?: Types.Maybe<{ __typename?: 'Group' } & GroupFragment> };

export type GroupFragment = { __typename?: 'Group' } & Pick<
  Types.Group,
  | 'id'
  | 'name'
  | 'description'
  | 'feeds'
  | 'isMaster'
  | 'createdAt'
  | 'isLimitPostsOfFeed'
  | 'limitPostsOfFeed'
  | 'enableGlobalSettings'
> & {
    feedsData: Array<{ __typename?: 'Feed' } & Pick<Types.Feed, 'id' | 'title' | 'imageUrl' | 'isCollection'>>;
    settings?: Types.Maybe<
      { __typename?: 'Settings' } & Pick<
        Types.Settings,
        | 'id'
        | 'imageInDescription'
        | 'imageInEnclosure'
        | 'imageInMedia'
        | 'youtubeVideoIframe'
        | 'youtubeDescription'
        | 'instagramVideos'
        | 'twitterEmbeds'
        | 'twitterPrefixWithUsername'
        | 'twitterRemoveUrlFromTitle'
        | 'includeIFramesWhenPossible'
        | 'postLimit'
        | 'bundlePostLimit'
        | 'maxPostFeedLimit'
        | 'maxPostBundleLimit'
        | 'onlyAscii'
      >
    >;
    tags?: Types.Maybe<
      Array<
        { __typename?: 'FeatureTag' } & Pick<Types.FeatureTag, 'id' | 'tagId'> & {
            tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
          }
      >
    >;
  };

export type GroupsQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.BundleOrderByEnum>;
}>;

export type GroupsQuery = { __typename?: 'Query' } & {
  groups?: Types.Maybe<
    { __typename?: 'MyGroups' } & Pick<Types.MyGroups, 'count'> & {
        rows?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Group' } & GroupRowFragment>>>;
      }
  >;
};

export type GroupRowFragment = { __typename?: 'Group' } & Pick<
  Types.Group,
  'id' | 'name' | 'feeds' | 'isMaster' | 'createdAt'
>;

export type GroupsFullQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.BundleOrderByEnum>;
}>;

export type GroupsFullQuery = { __typename?: 'Query' } & {
  groups?: Types.Maybe<
    { __typename?: 'MyGroups' } & Pick<Types.MyGroups, 'count'> & {
        rows?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Group' } & GroupFragment>>>;
      }
  >;
};

export type AddArticleToCollectionMutationVariables = Types.Exact<{
  input: Types.CollectionAddArticleInput;
}>;

export type AddArticleToCollectionMutation = { __typename?: 'Mutation' } & {
  addArticleToCollection: { __typename?: 'CollectionCard' } & CollectionCardFragment;
};

export type CreateCollectionMutationVariables = Types.Exact<{
  input: Types.CollectionCreateInput;
}>;

export type CreateCollectionMutation = { __typename?: 'Mutation' } & {
  createCollection: { __typename?: 'Collection' } & CollectionFragment;
};

export type CollectionFragment = { __typename?: 'Collection' } & Pick<
  Types.Collection,
  'id' | 'title' | 'description'
> & { items: Array<{ __typename?: 'CollectionCard' } & CollectionCardFragment> };

export type CreateCollectionCardMutationVariables = Types.Exact<{
  input: Types.CollectionCardCreateInput;
}>;

export type CreateCollectionCardMutation = { __typename?: 'Mutation' } & {
  createCollectionCard: { __typename?: 'CollectionCard' } & CollectionCardFragment;
};

export type CollectionCardFragment = { __typename?: 'CollectionCard' } & Pick<
  Types.CollectionCard,
  'id' | 'url' | 'title' | 'description' | 'image' | 'author' | 'date' | 'articleReferenceId' | 'createdAt'
>;

export type DeleteCollectionMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DeleteCollectionMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'deleteCollection'>;

export type DeleteCollectionCardMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  collectionId: Types.Scalars['ID'];
}>;

export type DeleteCollectionCardMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'deleteCollectionCard'>;

export type MoveCollectionCardMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  fromCollection: Types.Scalars['ID'];
  toCollection: Types.Scalars['ID'];
}>;

export type MoveCollectionCardMutation = { __typename?: 'Mutation' } & {
  moveCollectionCard: { __typename?: 'CollectionCard' } & CollectionCardFragment;
};

export type RemoveArticleFromCollectionMutationVariables = Types.Exact<{
  input: Types.CollectionRemoveArticleInput;
}>;

export type RemoveArticleFromCollectionMutation = { __typename?: 'Mutation' } & Pick<
  Types.Mutation,
  'removeArticleFromCollection'
>;

export type UpdateCollectionMutationVariables = Types.Exact<{
  input: Types.CollectionUpdateInput;
}>;

export type UpdateCollectionMutation = { __typename?: 'Mutation' } & {
  updateCollection: { __typename?: 'Collection' } & CollectionFragment;
};

export type UpdateCollectionCardMutationVariables = Types.Exact<{
  input: Types.CollectionCardUpdateInput;
}>;

export type UpdateCollectionCardMutation = { __typename?: 'Mutation' } & {
  updateCollectionCard: { __typename?: 'CollectionCard' } & CollectionCardFragment;
};

export type GetCollectionArticleQueryVariables = Types.Exact<{
  url: Types.Scalars['String'];
}>;

export type GetCollectionArticleQuery = { __typename?: 'Query' } & {
  getCollectionArticle: { __typename?: 'CollectionCardParsed' } & CollectionCardParsedFragment;
};

export type CollectionCardParsedFragment = { __typename?: 'CollectionCardParsed' } & Pick<
  Types.CollectionCardParsed,
  'url' | 'title' | 'description' | 'image' | 'author' | 'date' | 'createdAt'
>;

export type CollectionQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type CollectionQuery = { __typename?: 'Query' } & {
  collection: { __typename?: 'Collection' } & CollectionRowFragment;
};

export type CollectionRowFragment = { __typename?: 'Collection' } & Pick<
  Types.Collection,
  'id' | 'title' | 'description' | 'date' | 'author'
> & { items: Array<{ __typename?: 'CollectionCard' } & CollectionCardFragment> };

export type CollectionsQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.CollectionOrderByEnum>;
}>;

export type CollectionsQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionsResponse' } & Pick<Types.CollectionsResponse, 'count'> & {
      rows: Array<{ __typename?: 'Collection' } & CollectionRowFragment>;
    };
};

export type SiteHtmlQueryVariables = Types.Exact<{
  site: Types.Scalars['String'];
}>;

export type SiteHtmlQuery = { __typename?: 'Query' } & {
  siteHtml?: Types.Maybe<{ __typename?: 'SiteHtml' } & Pick<Types.SiteHtml, 'body'>>;
};

export type EmbedQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  type: Types.EmbedType;
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedQuery = { __typename?: 'Query' } & { embed: { __typename?: 'Embed' } & EmbedFragment };

export type EmbedFragment = { __typename?: 'Embed' } & Pick<Types.Embed, 'id' | 'status'> & {
    feed: { __typename?: 'Feed' } & FeedDataFragment;
    settings:
      | ({ __typename?: 'EmbedWallSettings' } & EmbedWallSettingsFragment)
      | ({ __typename?: 'EmbedFeedSettings' } & EmbedFeedSettingsFragment)
      | ({ __typename?: 'EmbedTickerSettings' } & EmbedTickerSettingsFragment)
      | ({ __typename?: 'EmbedCarouselSettings' } & EmbedCarouselSettingsFragment)
      | ({ __typename?: 'EmbedListSettings' } & EmbedListSettingsFragment)
      | ({ __typename?: 'EmbedGridSettings' } & EmbedGridSettingsFragment);
  };

export type FeedDataFragment = { __typename?: 'Feed' } & Pick<
  Types.Feed,
  'id' | 'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
> & { items?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'FeedItem' } & FeedItemFragment>>> };

export type EmbedCarouselQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedCarouselQuery = { __typename?: 'Query' } & {
  embedCarousel?: Types.Maybe<
    { __typename?: 'EmbedCarouselResponse' } & Pick<Types.EmbedCarouselResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedCarousel' } & Pick<Types.EmbedCarousel, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedCarouselSettings' } & EmbedCarouselSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedCarouselSettingsFragment = { __typename?: 'EmbedCarouselSettings' } & Pick<
  Types.EmbedCarouselSettings,
  | 'id'
  | 'dateFormat'
  | 'padding'
  | 'responsive'
  | 'postsCount'
  | 'columnsCount'
  | 'fontFamily'
  | 'template'
  | 'linkTarget'
  | 'customTarget'
  | 'cardImageLazy'
  | 'speed'
  | 'autoPlay'
  | 'width'
  | 'height'
  | 'imageAutoHeight'
  | 'imageHeight'
  | 'showTitle'
  | 'titleFontSize'
  | 'titleColor'
  | 'cardShowTitle'
  | 'cardTitleFontSize'
  | 'cardTitleColor'
  | 'cardTitleAlign'
  | 'cardShowImage'
  | 'cardShowDescription'
  | 'cardDescriptionFontSize'
  | 'cardDescriptionLines'
  | 'cardDescriptionColor'
  | 'cardShowFooter'
  | 'cardFooterColor'
  | 'cardBackground'
  | 'cardImageLink'
  | 'cardTitleFontHeight'
  | 'cardDescriptionFontHeight'
  | 'cardShowBorder'
  | 'cardBorderColor'
  | 'cardBorderRadius'
  | 'cardStyle'
  | 'navigationStyle'
  | 'navigationPosition'
>;

export type UpdateEmbedCarouselMutationVariables = Types.Exact<{
  input: Types.EmbedCarouselInput;
}>;

export type UpdateEmbedCarouselMutation = { __typename?: 'Mutation' } & {
  updateEmbedCarousel?: Types.Maybe<
    { __typename?: 'EmbedCarouselResponse' } & Pick<Types.EmbedCarouselResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedCarousel' } & Pick<Types.EmbedCarousel, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedCarouselSettings' } & EmbedCarouselSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedFeedQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedFeedQuery = { __typename?: 'Query' } & {
  embedFeed?: Types.Maybe<
    { __typename?: 'EmbedFeedResponse' } & Pick<Types.EmbedFeedResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedFeed' } & Pick<Types.EmbedFeed, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedFeedSettings' } & EmbedFeedSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedFeedSettingsFragment = { __typename?: 'EmbedFeedSettings' } & Pick<
  Types.EmbedFeedSettings,
  | 'id'
  | 'padding'
  | 'postsCount'
  | 'background'
  | 'fontFamily'
  | 'dateFormat'
  | 'template'
  | 'showTitle'
  | 'titleFontSize'
  | 'titleColor'
  | 'titleBackground'
  | 'cardShowTitle'
  | 'cardTitleFontSize'
  | 'cardTitleColor'
  | 'cardShowImage'
  | 'cardShowDescription'
  | 'cardDescriptionFontSize'
  | 'cardDescriptionLines'
  | 'cardDescriptionColor'
  | 'cardShowFooter'
  | 'cardImageLazy'
  | 'cardFooterColor'
  | 'cardTitleAlign'
  | 'cardDescriptionAlign'
  | 'cardTitleBold'
  | 'cardDescriptionBold'
  | 'cardTitleItalic'
  | 'cardDescriptionItalic'
  | 'cardBackground'
  | 'cardTitleFontHeight'
  | 'cardDescriptionFontHeight'
  | 'cardShowBorder'
  | 'cardBorderColor'
>;

export type UpdateEmbedFeedMutationVariables = Types.Exact<{
  input: Types.EmbedFeedInput;
}>;

export type UpdateEmbedFeedMutation = { __typename?: 'Mutation' } & {
  updateEmbedFeed?: Types.Maybe<
    { __typename?: 'EmbedFeedResponse' } & Pick<Types.EmbedFeedResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedFeed' } & Pick<Types.EmbedFeed, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedFeedSettings' } & EmbedFeedSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedGridQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedGridQuery = { __typename?: 'Query' } & {
  embedGrid?: Types.Maybe<
    { __typename?: 'EmbedGridResponse' } & Pick<Types.EmbedGridResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedGrid' } & Pick<Types.EmbedGrid, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedGridSettings' } & EmbedGridSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedGridSettingsFragment = { __typename?: 'EmbedGridSettings' } & Pick<
  Types.EmbedGridSettings,
  | 'id'
  | 'count'
  | 'spacing'
  | 'background'
  | 'fontFamily'
  | 'dateFormat'
  | 'cardBackground'
  | 'cardImageLink'
  | 'linkTarget'
  | 'customTarget'
  | 'cardImageLazy'
  | 'cardTitleFontSize'
  | 'cardTitleFontHeight'
  | 'cardShowBorder'
  | 'cardShowFooter'
  | 'cardFooterColor'
  | 'cardDescriptionColor'
  | 'cardTitleColor'
  | 'cardDescriptionFontSize'
  | 'cardDescriptionFontHeight'
  | 'template'
  | 'templateDuplicate'
  | 'type'
>;

export type UpdateEmbedGridMutationVariables = Types.Exact<{
  input: Types.EmbedGridInput;
}>;

export type UpdateEmbedGridMutation = { __typename?: 'Mutation' } & {
  updateEmbedGrid: { __typename?: 'EmbedGridResponse' } & Pick<Types.EmbedGridResponse, 'id' | 'status'> & {
      feed?: Types.Maybe<
        { __typename?: 'Feed' } & Pick<
          Types.Feed,
          'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
        > & {
            items?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                      enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                    }
                >
              >
            >;
          }
      >;
      embed?: Types.Maybe<
        { __typename?: 'EmbedGrid' } & Pick<Types.EmbedGrid, 'id' | 'createdAt'> & {
            settings?: Types.Maybe<{ __typename?: 'EmbedGridSettings' } & EmbedGridSettingsFragment>;
          }
      >;
    };
};

export type EmbedListQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedListQuery = { __typename?: 'Query' } & {
  embedList?: Types.Maybe<
    { __typename?: 'EmbedListResponse' } & Pick<Types.EmbedListResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedList' } & Pick<Types.EmbedList, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedListSettings' } & EmbedListSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedListSettingsFragment = { __typename?: 'EmbedListSettings' } & Pick<
  Types.EmbedListSettings,
  | 'id'
  | 'width'
  | 'padding'
  | 'cardsPadding'
  | 'postsCount'
  | 'background'
  | 'fontFamily'
  | 'template'
  | 'linkTarget'
  | 'customTarget'
  | 'dateFormat'
  | 'showTitle'
  | 'titleFontSize'
  | 'titleColor'
  | 'cardImageLazy'
  | 'cardShowTitle'
  | 'cardTitleFontSize'
  | 'cardTitleColor'
  | 'cardTitleLines'
  | 'cardShowImage'
  | 'cardShowDescription'
  | 'cardDescriptionFontSize'
  | 'cardDescriptionLines'
  | 'cardDescriptionColor'
  | 'cardImageLink'
  | 'cardShowBorder'
  | 'cardBackground'
  | 'cardShowHeader'
  | 'cardTitleFontHeight'
  | 'cardDescriptionFontHeight'
  | 'cardImageRadius'
  | 'cardBorderColor'
  | 'cardBorderRadius'
  | 'cardSocialSharing'
  | 'cardSocialSharingRounded'
  | 'showPagination'
  | 'paginationStyle'
  | 'paginationColor'
  | 'paginationBackground'
  | 'paginationLimit'
  | 'cardStyle'
  | 'cardFooterFontSize'
  | 'cardFooterColor'
  | 'cardFooterPosition'
  | 'cardImagePosition'
  | 'mobileShowDescription'
  | 'customCss'
> & { cardSocialSharingMap?: Types.Maybe<{ __typename?: 'SocialSharing' } & SocialSharingFragment> };

export type UpdateEmbedListMutationVariables = Types.Exact<{
  input: Types.EmbedListInput;
}>;

export type UpdateEmbedListMutation = { __typename?: 'Mutation' } & {
  updateEmbedList?: Types.Maybe<
    { __typename?: 'EmbedListResponse' } & Pick<Types.EmbedListResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedList' } & Pick<Types.EmbedList, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedListSettings' } & EmbedListSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedWallQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedWallQuery = { __typename?: 'Query' } & {
  embedWall?: Types.Maybe<
    { __typename?: 'EmbedWallResponse' } & Pick<Types.EmbedWallResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedWall' } & Pick<Types.EmbedWall, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedWallSettings' } & EmbedWallSettingsFragment>;
            }
        >;
      }
  >;
};

export type SocialSharingFragment = { __typename?: 'SocialSharing' } & Pick<
  Types.SocialSharing,
  | 'facebook'
  | 'twitter'
  | 'pinterest'
  | 'reddit'
  | 'whatsapp'
  | 'linkdin'
  | 'telegram'
  | 'yahoo'
  | 'vk'
  | 'email'
  | 'thumblr'
>;

export type EmbedWallSettingsFragment = { __typename?: 'EmbedWallSettings' } & Pick<
  Types.EmbedWallSettings,
  | 'id'
  | 'padding'
  | 'paddingY'
  | 'responsive'
  | 'columnsCount'
  | 'width'
  | 'height'
  | 'autoHeight'
  | 'postsCount'
  | 'background'
  | 'fontFamily'
  | 'linkTarget'
  | 'customTarget'
  | 'cardStyle'
  | 'dateFormat'
  | 'showTitle'
  | 'titleFontSize'
  | 'titleColor'
  | 'cardShowTitle'
  | 'cardTitleFontSize'
  | 'cardTitleColor'
  | 'cardTitleFontHeight'
  | 'cardTitleAlign'
  | 'cardTitleLines'
  | 'cardShowImage'
  | 'cardImageLazy'
  | 'cardShowDescription'
  | 'cardDescriptionFontSize'
  | 'cardDescriptionAlign'
  | 'cardSocialSharing'
  | 'cardSocialSharingRounded'
  | 'cardShowBorder'
  | 'cardBorderColor'
  | 'cardBorderRadius'
  | 'cardBackground'
  | 'cardDescriptionLines'
  | 'cardDescriptionColor'
  | 'cardDescriptionFontHeight'
  | 'cardShowFooter'
  | 'cardFooterColor'
  | 'cardImageLink'
  | 'cardImageRadius'
  | 'cardImageGradient'
  | 'showPagination'
  | 'paginationStyle'
  | 'paginationColor'
  | 'paginationBackground'
  | 'paginationLimit'
  | 'titlePaddingBottom'
  | 'template'
> & { cardSocialSharingMap?: Types.Maybe<{ __typename?: 'SocialSharing' } & SocialSharingFragment> };

export type UpdateEmbedWallMutationVariables = Types.Exact<{
  input: Types.EmbedWallInput;
}>;

export type UpdateEmbedWallMutation = { __typename?: 'Mutation' } & {
  updateEmbedWall?: Types.Maybe<
    { __typename?: 'EmbedWallResponse' } & Pick<Types.EmbedWallResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedWall' } & Pick<Types.EmbedWall, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedWallSettings' } & EmbedWallSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedTickerQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  version?: Types.Maybe<Types.Scalars['String']>;
  create?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type EmbedTickerQuery = { __typename?: 'Query' } & {
  embedTicker?: Types.Maybe<
    { __typename?: 'EmbedTickerResponse' } & Pick<Types.EmbedTickerResponse, 'id' | 'status'> & {
        feed?: Types.Maybe<
          { __typename?: 'Feed' } & Pick<
            Types.Feed,
            'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
          > & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                        enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                      }
                  >
                >
              >;
            }
        >;
        embed?: Types.Maybe<
          { __typename?: 'EmbedTicker' } & Pick<Types.EmbedTicker, 'id' | 'createdAt'> & {
              settings?: Types.Maybe<{ __typename?: 'EmbedTickerSettings' } & EmbedTickerSettingsFragment>;
            }
        >;
      }
  >;
};

export type EmbedTickerSettingsFragment = { __typename?: 'EmbedTickerSettings' } & Pick<
  Types.EmbedTickerSettings,
  | 'id'
  | 'count'
  | 'speed'
  | 'direction'
  | 'spacing'
  | 'background'
  | 'paddingY'
  | 'fontFamily'
  | 'cardTitleColor'
  | 'cardTitleTransform'
  | 'cardTitleFontSize'
  | 'cardTitleFontWeight'
  | 'template'
  | 'linkTarget'
  | 'customTarget'
  | 'dateFormat'
  | 'cardBorderRadius'
  | 'cardTitleCharacters'
  | 'showTitle'
  | 'titleColor'
  | 'titleFontSize'
  | 'titleStyle'
  | 'titleBackground'
  | 'cardShowSource'
  | 'cardSourceColor'
  | 'cardSourcePosition'
>;

export type UpdateEmbedTickerMutationVariables = Types.Exact<{
  input: Types.EmbedTickerInput;
}>;

export type UpdateEmbedTickerMutation = { __typename?: 'Mutation' } & {
  updateEmbedTicker: { __typename?: 'EmbedTickerResponse' } & Pick<Types.EmbedTickerResponse, 'id' | 'status'> & {
      feed?: Types.Maybe<
        { __typename?: 'Feed' } & Pick<
          Types.Feed,
          'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
        > & {
            items?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                      enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                    }
                >
              >
            >;
          }
      >;
      embed?: Types.Maybe<
        { __typename?: 'EmbedTicker' } & Pick<Types.EmbedTicker, 'id' | 'createdAt'> & {
            settings?: Types.Maybe<{ __typename?: 'EmbedTickerSettings' } & EmbedTickerSettingsFragment>;
          }
      >;
    };
};

export type EmbedTemplatesQueryVariables = Types.Exact<{
  type: Types.Scalars['String'];
}>;

export type EmbedTemplatesQuery = { __typename?: 'Query' } & {
  embedTemplates: Array<{ __typename?: 'EmbedTemplate' } & EmbedTemplateFragment>;
};

export type UpdateEmbedMutationVariables = Types.Exact<{
  input: Types.EmbedInput;
}>;

export type UpdateEmbedMutation = { __typename?: 'Mutation' } & {
  updateEmbed: { __typename?: 'Embed' } & EmbedFragment;
};

export type AttachFeedMutationVariables = Types.Exact<{
  feedId: Types.Scalars['ID'];
}>;

export type AttachFeedMutation = { __typename?: 'Mutation' } & {
  attachFeed?: Types.Maybe<{ __typename?: 'Feed' } & Pick<Types.Feed, 'id'>>;
};

export type DeleteFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DeleteFeedMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'deleteFeed'>;

export type UpdateFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  title?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
  tags?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
  enableGlobalSettings?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type UpdateFeedMutation = { __typename?: 'Mutation' } & {
  updateFeed?: Types.Maybe<
    { __typename?: 'Feed' } & Pick<
      Types.Feed,
      'id' | 'title' | 'description' | 'imageUrl' | 'siteUrl' | 'siteName' | 'enableGlobalSettings'
    > & {
        settings?: Types.Maybe<
          { __typename?: 'Settings' } & Pick<
            Types.Settings,
            | 'id'
            | 'imageInEnclosure'
            | 'imageInDescription'
            | 'youtubeVideoIframe'
            | 'youtubeDescription'
            | 'instagramVideos'
            | 'twitterRemoveUrlFromTitle'
            | 'twitterEmbeds'
            | 'twitterPrefixWithUsername'
            | 'includeIFramesWhenPossible'
            | 'imageInMedia'
            | 'postLimit'
            | 'onlyAscii'
          >
        >;
        tags?: Types.Maybe<
          Array<
            { __typename?: 'FeatureTag' } & Pick<Types.FeatureTag, 'id' | 'tagId'> & {
                tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
              }
          >
        >;
      }
  >;
};

export type FeedQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  after?: Types.Maybe<Types.Scalars['Int']>;
  isPreview?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type FeedQuery = { __typename?: 'Query' } & { feed?: Types.Maybe<{ __typename?: 'Feed' } & FeedFragment> };

export type FeedFragment = { __typename?: 'Feed' } & Pick<
  Types.Feed,
  | 'id'
  | 'title'
  | 'description'
  | 'feedUrl'
  | 'siteUrl'
  | 'imageUrl'
  | 'generator'
  | 'isCollection'
  | 'enableGlobalSettings'
> & {
    items?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'FeedItem' } & FeedItemFragment>>>;
    tags?: Types.Maybe<
      Array<
        { __typename?: 'FeatureTag' } & Pick<Types.FeatureTag, 'id' | 'tagId'> & {
            tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
          }
      >
    >;
    settings?: Types.Maybe<
      { __typename?: 'Settings' } & Pick<
        Types.Settings,
        | 'id'
        | 'imageInDescription'
        | 'imageInEnclosure'
        | 'imageInMedia'
        | 'youtubeVideoIframe'
        | 'youtubeDescription'
        | 'instagramVideos'
        | 'twitterEmbeds'
        | 'twitterPrefixWithUsername'
        | 'twitterRemoveUrlFromTitle'
        | 'includeIFramesWhenPossible'
        | 'postLimit'
        | 'bundlePostLimit'
        | 'maxPostFeedLimit'
        | 'maxPostBundleLimit'
        | 'onlyAscii'
      >
    >;
  };

export type FeedItemFragment = { __typename?: 'FeedItem' } & Pick<
  Types.FeedItem,
  'id' | 'title' | 'url' | 'description' | 'date'
> & { enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>> };

export type MyFeedsQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.FeedOrderByEnum>;
}>;

export type MyFeedsQuery = { __typename?: 'Query' } & {
  myFeeds?: Types.Maybe<
    { __typename?: 'MyFeeds' } & Pick<Types.MyFeeds, 'count'> & {
        rows?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Feed' } & FeedRowFragment>>>;
      }
  >;
};

export type FeedRowFragment = { __typename?: 'Feed' } & Pick<
  Types.Feed,
  'id' | 'title' | 'description' | 'imageUrl' | 'siteUrl' | 'siteName' | 'createdAt' | 'feedUrl'
> & {
    tags?: Types.Maybe<
      Array<
        { __typename?: 'FeatureTag' } & Pick<Types.FeatureTag, 'id' | 'tagId'> & {
            tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
          }
      >
    >;
  };

export type AddFilterRuleMutationVariables = Types.Exact<{
  filterId: Types.Scalars['ID'];
  body: Types.FilterRuleInput;
}>;

export type AddFilterRuleMutation = { __typename?: 'Mutation' } & {
  addFilterRule: { __typename?: 'Filter' } & FilterFragment;
};

export type RemoveFilterRuleMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  filterId: Types.Scalars['ID'];
}>;

export type RemoveFilterRuleMutation = { __typename?: 'Mutation' } & {
  removeFilterRule: { __typename?: 'Filter' } & FilterFragment;
};

export type UpdateFilterMutationVariables = Types.Exact<{
  filter?: Types.Maybe<Types.FilterInput>;
}>;

export type UpdateFilterMutation = { __typename?: 'Mutation' } & {
  updateFilter?: Types.Maybe<{ __typename?: 'Filter' } & FilterFragment>;
};

export type UpdateFilterRuleMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  filterId: Types.Scalars['ID'];
  body: Types.FilterRuleInput;
}>;

export type UpdateFilterRuleMutation = { __typename?: 'Mutation' } & {
  updateFilterRule: { __typename?: 'Filter' } & FilterFragment;
};

export type ModerationQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ModerationQuery = { __typename?: 'Query' } & {
  moderation?: Types.Maybe<{ __typename?: 'Moderation' } & ModerationFragment>;
};

export type ModerationFragment = { __typename?: 'Moderation' } & Pick<
  Types.Moderation,
  'id' | 'prefixList' | 'postfixList'
> & {
    feed?: Types.Maybe<
      { __typename?: 'Feed' } & Pick<
        Types.Feed,
        'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
      > & {
          items?: Types.Maybe<
            Array<
              Types.Maybe<
                { __typename?: 'FeedItem' } & Pick<
                  Types.FeedItem,
                  'title' | 'url' | 'description' | 'date' | 'createdAt'
                > & { enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>> }
              >
            >
          >;
        }
    >;
    filter?: Types.Maybe<{ __typename?: 'Filter' } & FilterFragment>;
  };

export type FilterFragment = { __typename?: 'Filter' } & Pick<
  Types.Filter,
  | 'id'
  | 'feedId'
  | 'hideFilteredPosts'
  | 'noImages'
  | 'noDate'
  | 'duplicateTitles'
  | 'duplicateDescriptions'
  | 'hideNonSecureLinks'
  | 'noDescription'
  | 'whitelist'
  | 'whiteListByTitle'
  | 'whiteListByDescription'
  | 'whiteListByLink'
  | 'whiteListByImageUrl'
  | 'blacklist'
  | 'blackListByTitle'
  | 'blackListByDescription'
  | 'blackListByLink'
  | 'blackListByImageUrl'
  | 'enableDateFilter'
  | 'secondsUntil'
  | 'titleReplaceKeywords'
  | 'titleAutoCleaner'
  | 'orderBy'
  | 'order'
> & { rules: Array<{ __typename?: 'FilterRule' } & FilterRuleFragment> };

export type FilterRuleFragment = { __typename?: 'FilterRule' } & Pick<
  Types.FilterRule,
  'id' | 'type' | 'searchTitle' | 'searchDescription' | 'searchUrl' | 'take' | 'put'
>;

export type ClearKeyValuesMutationVariables = Types.Exact<{ [key: string]: never }>;

export type ClearKeyValuesMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'clearKeyValues'>>;
};

export type CreateKeyValueMutationVariables = Types.Exact<{
  key: Types.Scalars['ID'];
  value: Types.Scalars['JSON'];
}>;

export type CreateKeyValueMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & { createKeyValue: { __typename?: 'KeyValue' } & KeyValueFragment }>;
};

export type KeyValueFragment = { __typename?: 'KeyValue' } & Pick<
  Types.KeyValue,
  'key' | 'value' | 'modifiedAt' | 'createdAt'
>;

export type DeleteKeyValueMutationVariables = Types.Exact<{
  key: Types.Scalars['ID'];
}>;

export type DeleteKeyValueMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'deleteKeyValue'>>;
};

export type UpdateKeyValueMutationVariables = Types.Exact<{
  key: Types.Scalars['ID'];
  value: Types.Scalars['JSON'];
}>;

export type UpdateKeyValueMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & { updateKeyValue: { __typename?: 'KeyValue' } & KeyValueFragment }>;
};

export type KeyValuesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type KeyValuesQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & { keyValues: Array<{ __typename?: 'KeyValue' } & KeyValueFragment> }>;
};

export type CreatePlanMutationVariables = Types.Exact<{
  params: Types.CreatePlanInput;
}>;

export type CreatePlanMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & { createPlan: { __typename?: 'AdminPlan' } & AdminPlanFragment }>;
};

export type AdminPlanFragment = { __typename?: 'AdminPlan' } & Pick<Types.AdminPlan, 'id' | 'name' | 'price'>;

export type PlanQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type PlanQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      plan?: Types.Maybe<
        { __typename?: 'AdminPlan' } & Pick<
          Types.AdminPlan,
          | 'id'
          | 'name'
          | 'stars'
          | 'price'
          | 'feedsLimit'
          | 'refreshRate'
          | 'chargbeePlanId'
          | 'postPerFeed'
          | 'postLinkToRss'
          | 'isInstagram'
          | 'isBundles'
          | 'isFilters'
          | 'isCustomEmbeds'
          | 'isSupport'
          | 'maxPostLimit'
          | 'timePeriod'
          | 'displayName'
          | 'maxPostBundleLimit'
          | 'maxPostFeedLimit'
          | 'isPrivate'
          | 'isCustom'
        >
      >;
    }
  >;
};

export type PlansQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>;
  rowsPerPage?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.Scalars['String']>;
}>;

export type PlansQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      plans?: Types.Maybe<
        { __typename?: 'AdminPlansResponse' } & Pick<Types.AdminPlansResponse, 'count'> & {
            rows: Array<
              { __typename?: 'AdminPlan' } & Pick<Types.AdminPlan, 'id' | 'name' | 'price' | 'isPrivate' | 'isCustom'>
            >;
          }
      >;
    }
  >;
};

export type ActiveTemplateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  active: Types.Scalars['Boolean'];
}>;

export type ActiveTemplateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { activeTemplate: { __typename?: 'EmbedTemplate' } & EmbedTemplateFragment }
  >;
};

export type CreateTemplateMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  type: Types.Scalars['String'];
  feedId: Types.Scalars['ID'];
}>;

export type CreateTemplateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { createTemplate: { __typename?: 'EmbedTemplate' } & EmbedTemplateFragment }
  >;
};

export type EmbedTemplateFragment = { __typename?: 'EmbedTemplate' } & Pick<
  Types.EmbedTemplate,
  'id' | 'title' | 'feedId' | 'type' | 'active' | 'weight' | 'modifiedAt' | 'createdAt'
> & {
    settings:
      | ({ __typename?: 'EmbedWallSettings' } & EmbedWallSettingsFragment)
      | ({ __typename?: 'EmbedFeedSettings' } & EmbedFeedSettingsFragment)
      | ({ __typename?: 'EmbedTickerSettings' } & EmbedTickerSettingsFragment)
      | ({ __typename?: 'EmbedCarouselSettings' } & EmbedCarouselSettingsFragment)
      | ({ __typename?: 'EmbedListSettings' } & EmbedListSettingsFragment)
      | ({ __typename?: 'EmbedGridSettings' } & EmbedGridSettingsFragment);
  };

export type DeleteTemplateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  deleted: Types.Scalars['Boolean'];
}>;

export type DeleteTemplateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { deleteTemplate: { __typename?: 'EmbedTemplate' } & EmbedTemplateFragment }
  >;
};

export type ReorderTemplateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  step: Types.Scalars['Int'];
}>;

export type ReorderTemplateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { reorderTemplate: { __typename?: 'EmbedTemplate' } & EmbedTemplateFragment }
  >;
};

export type UpdateTemplateMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  settings?: Types.Maybe<Types.Scalars['JSON']>;
  title?: Types.Maybe<Types.Scalars['String']>;
  feedId?: Types.Maybe<Types.Scalars['ID']>;
}>;

export type UpdateTemplateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { updateTemplate: { __typename?: 'EmbedTemplate' } & EmbedTemplateFragment }
  >;
};

export type TemplatesQueryVariables = Types.Exact<{
  type: Types.Scalars['String'];
}>;

export type TemplatesQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { templates: Array<{ __typename?: 'EmbedTemplate' } & EmbedTemplateFragment> }
  >;
};

export type AddSpamEmailMutationVariables = Types.Exact<{
  emails?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;

export type AddSpamEmailMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'addSpamEmail'>>;
};

export type AllUserFeedsQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type AllUserFeedsQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      allUserFeeds: Array<
        { __typename?: 'AdminFeed' } & Pick<
          Types.AdminFeed,
          'id' | 'linkToFeed' | 'title' | 'disabled' | 'providerId' | 'lastRefreshed' | 'lastNewPosts' | 'deleted'
        >
      >;
    }
  >;
};

export type BlockUserMutationVariables = Types.Exact<{
  ids: Array<Types.Maybe<Types.Scalars['ID']>> | Types.Maybe<Types.Scalars['ID']>;
}>;

export type BlockUserMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'blockUser'>>;
};

export type BotsType1ReportQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  period?: Types.Maybe<Types.Scalars['String']>;
}>;

export type BotsType1ReportQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      botsType1Report?: Types.Maybe<
        { __typename?: 'BotsType1Report' } & Pick<Types.BotsType1Report, 'total' | 'page' | 'perPage'> & {
            filters?: Types.Maybe<{ __typename?: 'SpamAccountFilters' } & Pick<Types.SpamAccountFilters, 'period'>>;
            data?: Types.Maybe<
              Array<Types.Maybe<{ __typename?: 'BotsType1Data' } & Pick<Types.BotsType1Data, 'ip' | 'count'>>>
            >;
          }
      >;
    }
  >;
};

export type BotsType2ReportQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BotsType2ReportQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      botsType2Report?: Types.Maybe<
        { __typename?: 'BotsType2Report' } & Pick<Types.BotsType2Report, 'total' | 'page' | 'perPage'> & {
            data?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'BotsType2Data' } & Pick<Types.BotsType2Data, 'ip' | 'inputUrl' | 'createdAt'>
                >
              >
            >;
          }
      >;
    }
  >;
};

export type ClearUserCacheMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ClearUserCacheMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      clearUserCache?: Types.Maybe<{ __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'id'>>;
    }
  >;
};

export type DeleteOneGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  userId: Types.Scalars['String'];
}>;

export type DeleteOneGroupMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'deleteOneGroup'>>;
};

export type DeleteAllGroupsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type DeleteAllGroupsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'deleteAllGroups'>>;
};

export type DeleteOneFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  userId: Types.Scalars['String'];
}>;

export type DeleteOneFeedMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'deleteOneFeed'>>;
};

export type DeleteAllFeedsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type DeleteAllFeedsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'deleteAllFeeds'>>;
};

export type DeleteUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & { deleteUser?: Types.Maybe<{ __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'id'>> }
  >;
};

export type DisableFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type DisableFeedMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'disableFeed'>>;
};

export type DisableAllUserFeedsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type DisableAllUserFeedsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'disableAllUserFeeds'>>;
};

export type EnableFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type EnableFeedMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'enableFeed'>>;
};

export type EnableAllUserFeedsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type EnableAllUserFeedsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'enableAllUserFeeds'>>;
};

export type EnableFeedsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type EnableFeedsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'enableFeeds'>>;
};

export type GetUserFeedbackQueryVariables = Types.Exact<{
  page: Types.Scalars['Int'];
  rowsPerPage: Types.Scalars['Int'];
  period: Types.Scalars['String'];
}>;

export type GetUserFeedbackQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      getUserFeedback?: Types.Maybe<
        { __typename?: 'UserFeedbackReport' } & Pick<Types.UserFeedbackReport, 'count'> & {
            rows: Array<
              Types.Maybe<
                { __typename?: 'Feedback' } & Pick<
                  Types.Feedback,
                  'rate' | 'option' | 'description' | 'countActiveFeeds' | 'createdAt'
                > & { user?: Types.Maybe<{ __typename?: 'User' } & Pick<Types.User, 'id' | 'email'>> }
              >
            >;
          }
      >;
    }
  >;
};

export type RefetchFeedMutationVariables = Types.Exact<{
  feedId: Types.Scalars['ID'];
}>;

export type RefetchFeedMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'refetchFeed'>>;
};

export type RemoveAllUserJobsMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
}>;

export type RemoveAllUserJobsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'removeAllUserJobs'>>;
};

export type RestoreOneGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  userId: Types.Scalars['String'];
}>;

export type RestoreOneGroupMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'restoreOneGroup'>>;
};

export type RestoreAllGroupsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type RestoreAllGroupsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'restoreAllGroups'>>;
};

export type RestoreOneFeedMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type RestoreOneFeedMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'restoreOneFeed'>>;
};

export type RestoreAllFeedsMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type RestoreAllFeedsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'restoreAllFeeds'>>;
};

export type ScheduleAllUserJobsMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
}>;

export type ScheduleAllUserJobsMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<{ __typename?: 'Admin' } & Pick<Types.Admin, 'scheduleAllUserJobs'>>;
};

export type SpamAccountReportQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  period?: Types.Maybe<Types.Scalars['String']>;
}>;

export type SpamAccountReportQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      spamAccountReport?: Types.Maybe<
        { __typename?: 'SpamAccountReport' } & Pick<Types.SpamAccountReport, 'total' | 'page' | 'perPage'> & {
            filters?: Types.Maybe<{ __typename?: 'SpamAccountFilters' } & Pick<Types.SpamAccountFilters, 'period'>>;
            data?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'SpamAccountData' } & Pick<
                    Types.SpamAccountData,
                    'ip' | 'count' | 'usersCount' | 'lastCreatedAt'
                  > & {
                      users?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            { __typename?: 'UserInfo' } & Pick<
                              Types.UserInfo,
                              'id' | 'email' | 'isTrial' | 'deleted' | 'blocked' | 'createdAt' | 'ip'
                            > & { plan: { __typename?: 'Plan' } & Pick<Types.Plan, 'name'> }
                          >
                        >
                      >;
                    }
                >
              >
            >;
          }
      >;
    }
  >;
};

export type UpdateIsSubExpiredMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
  isSubExpired: Types.Scalars['Boolean'];
}>;

export type UpdateIsSubExpiredMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      updateIsSubExpired?: Types.Maybe<{ __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'isSubExpired'>>;
    }
  >;
};

export type UpdateIsTrialMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
  isTrial: Types.Scalars['Boolean'];
}>;

export type UpdateIsTrialMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      updateIsTrial?: Types.Maybe<{ __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'isTrial'>>;
    }
  >;
};

export type UpdateTrialEndDateMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
  trialEnd: Types.Scalars['Date'];
}>;

export type UpdateTrialEndDateMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      updateTrialEndDate?: Types.Maybe<{ __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'trialEnd'>>;
    }
  >;
};

export type UpdateUserFeaturesMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
  featuresId: Types.Scalars['ID'];
  features: Types.UserFeaturesInput;
}>;

export type UpdateUserFeaturesMutation = { __typename?: 'Mutation' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      updateUserFeatures?: Types.Maybe<
        { __typename?: 'UserInfo' } & Pick<Types.UserInfo, 'id'> & {
            features?: Types.Maybe<{ __typename?: 'UserFeatures' } & UserFeaturesFragment>;
          }
      >;
    }
  >;
};

export type UsersQueryVariables = Types.Exact<{
  count?: Types.Maybe<Types.Scalars['Int']>;
  searchQuery?: Types.Maybe<Types.Scalars['String']>;
}>;

export type UsersQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      users?: Types.Maybe<
        Array<
          Types.Maybe<
            { __typename?: 'UserInfo' } & Pick<
              Types.UserInfo,
              'id' | 'email' | 'firstName' | 'lastName' | 'isTrial' | 'customerId' | 'chargebeeId'
            > & { plan: { __typename?: 'Plan' } & Pick<Types.Plan, 'name'> }
          >
        >
      >;
    }
  >;
};

export type UserFeedsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserFeedsQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      userFeeds: Array<
        { __typename?: 'AdminFeed' } & Pick<
          Types.AdminFeed,
          'id' | 'linkToFeed' | 'title' | 'disabled' | 'providerId' | 'lastRefreshed' | 'lastNewPosts' | 'deleted'
        >
      >;
    }
  >;
};

export type UserInformationQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type UserInformationQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      userInformation?: Types.Maybe<
        { __typename?: 'UserInfo' } & Pick<
          Types.UserInfo,
          | 'id'
          | 'email'
          | 'firstName'
          | 'lastName'
          | 'startDate'
          | 'trialEnd'
          | 'isTrial'
          | 'isSubExpired'
          | 'cancelledAt'
          | 'emailVerified'
          | 'deleted'
          | 'createdAt'
          | 'updatedAt'
          | 'ip'
          | 'customerId'
          | 'chargebeeId'
          | 'photo'
        > & {
            plan: { __typename?: 'Plan' } & Pick<Types.Plan, 'name' | 'refreshRate' | 'feedsLimit' | 'maxPostLimit'>;
            features?: Types.Maybe<{ __typename?: 'UserFeatures' } & UserFeaturesFragment>;
            setting?: Types.Maybe<
              { __typename?: 'Settings' } & Pick<
                Types.Settings,
                | 'imageInEnclosure'
                | 'imageInDescription'
                | 'youtubeVideoIframe'
                | 'youtubeDescription'
                | 'instagramVideos'
                | 'twitterEmbeds'
                | 'twitterPrefixWithUsername'
                | 'twitterRemoveUrlFromTitle'
                | 'imageInMedia'
                | 'includeIFramesWhenPossible'
              >
            >;
          }
      >;
    }
  >;
};

export type AllUserBundlesQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type AllUserBundlesQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      allUserBundles: Array<
        { __typename?: 'AdminBundle' } & Pick<
          Types.AdminBundle,
          'id' | 'title' | 'deleted' | 'isMaster' | 'createdAt' | 'feeds' | 'userId'
        >
      >;
    }
  >;
};

export type FeedsQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>;
  rowsPerPage?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  order?: Types.Maybe<Types.OrderEnum>;
  orderBy?: Types.Maybe<Types.Scalars['String']>;
}>;

export type FeedsQuery = { __typename?: 'Query' } & {
  admin?: Types.Maybe<
    { __typename?: 'Admin' } & {
      feeds: Array<
        { __typename?: 'AdminFeed' } & Pick<
          Types.AdminFeed,
          'id' | 'title' | 'linkToFeed' | 'providerId' | 'disabled' | 'deleted' | 'createdAt' | 'userId'
        >
      >;
    }
  >;
};

export type CreateKnowledgeCategoryMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  summary: Types.Scalars['String'];
  image: Types.Scalars['String'];
  color: Types.Scalars['String'];
}>;

export type CreateKnowledgeCategoryMutation = { __typename?: 'Mutation' } & {
  createKnowledgeCategory: { __typename?: 'KnowledgeCategory' } & KnowledgeCategoryFragment;
};

export type CreateKnowledgePostMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  summary: Types.Scalars['String'];
  body: Types.Scalars['String'];
  published?: Types.Maybe<Types.Scalars['Boolean']>;
  categories: Array<Types.Scalars['ID']> | Types.Scalars['ID'];
}>;

export type CreateKnowledgePostMutation = { __typename?: 'Mutation' } & {
  createKnowledgePost: { __typename?: 'KnowledgePost' } & KnowledgePostFragment;
};

export type DeleteKnowledgeCategoryMutationVariables = Types.Exact<{
  categoryId: Types.Scalars['ID'];
}>;

export type DeleteKnowledgeCategoryMutation = { __typename?: 'Mutation' } & Pick<
  Types.Mutation,
  'deleteKnowledgeCategory'
>;

export type DeleteKnowledgePostMutationVariables = Types.Exact<{
  postId: Types.Scalars['ID'];
}>;

export type DeleteKnowledgePostMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'deleteKnowledgePost'>;

export type UpdateKnowledgeCategoryMutationVariables = Types.Exact<{
  categoryId: Types.Scalars['ID'];
  title?: Types.Maybe<Types.Scalars['String']>;
  summary?: Types.Maybe<Types.Scalars['String']>;
  image?: Types.Maybe<Types.Scalars['String']>;
  color?: Types.Maybe<Types.Scalars['String']>;
}>;

export type UpdateKnowledgeCategoryMutation = { __typename?: 'Mutation' } & {
  updateKnowledgeCategory: { __typename?: 'KnowledgeCategory' } & KnowledgeCategoryFragment;
};

export type UpdateKnowledgePostMutationVariables = Types.Exact<{
  postId: Types.Scalars['ID'];
  title?: Types.Maybe<Types.Scalars['String']>;
  summary?: Types.Maybe<Types.Scalars['String']>;
  body?: Types.Maybe<Types.Scalars['String']>;
  published?: Types.Maybe<Types.Scalars['Boolean']>;
  categories?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;

export type UpdateKnowledgePostMutation = { __typename?: 'Mutation' } & {
  updateKnowledgePost: { __typename?: 'KnowledgePost' } & KnowledgePostFragment;
};

export type KnowledgeCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type KnowledgeCategoriesQuery = { __typename?: 'Query' } & {
  knowledgeCategories: Array<{ __typename?: 'KnowledgeCategoryRow' } & KnowledgeCategoryRowFragment>;
};

export type KnowledgeCategoryRowFragment = { __typename?: 'KnowledgeCategoryRow' } & Pick<
  Types.KnowledgeCategoryRow,
  'id' | 'title' | 'summary' | 'image'
>;

export type KnowledgeCategoryQueryVariables = Types.Exact<{
  categoryId: Types.Scalars['ID'];
}>;

export type KnowledgeCategoryQuery = { __typename?: 'Query' } & {
  knowledgeCategory: { __typename?: 'KnowledgeCategory' } & KnowledgeCategoryFragment;
};

export type KnowledgeCategoryFragment = { __typename?: 'KnowledgeCategory' } & Pick<
  Types.KnowledgeCategory,
  'id' | 'title' | 'summary' | 'image' | 'color'
> & { posts: Array<{ __typename?: 'KnowledgePost' } & KnowledgePostFragment> };

export type KnowledgePostQueryVariables = Types.Exact<{
  postId: Types.Scalars['ID'];
}>;

export type KnowledgePostQuery = { __typename?: 'Query' } & {
  knowledgePost: { __typename?: 'KnowledgePost' } & KnowledgePostFragment;
};

export type KnowledgePostFragment = { __typename?: 'KnowledgePost' } & Pick<
  Types.KnowledgePost,
  'id' | 'title' | 'summary' | 'body' | 'publishedAt'
>;

export type KnowledgeRelationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type KnowledgeRelationsQuery = { __typename?: 'Query' } & {
  knowledgeRelations: Array<{ __typename?: 'KnowledgeRelation' } & KnowledgeRelationFragment>;
};

export type KnowledgeRelationFragment = { __typename?: 'KnowledgeRelation' } & Pick<
  Types.KnowledgeRelation,
  'postId' | 'categoryId'
>;

export type ProviderAppListQueryVariables = Types.Exact<{
  published?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type ProviderAppListQuery = { __typename?: 'Query' } & {
  providerAppList?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'ProviderApp' } & Pick<
          Types.ProviderApp,
          'id' | 'name' | 'fromSection' | 'color' | 'logo' | 'url' | 'createdAt'
        >
      >
    >
  >;
};

export type ProviderAppQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type ProviderAppQuery = { __typename?: 'Query' } & {
  providerApp?: Types.Maybe<
    { __typename?: 'ProviderApp' } & Pick<
      Types.ProviderApp,
      'id' | 'name' | 'fromSection' | 'color' | 'logo' | 'url' | 'createdAt' | 'examples'
    >
  >;
};

export type ChangeEmailMutationVariables = Types.Exact<{
  newEmail: Types.Scalars['String'];
}>;

export type ChangeEmailMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'changeEmail'>;

export type ChangeTwitterEmailMutationVariables = Types.Exact<{
  newEmail: Types.Scalars['String'];
  newPassword: Types.Scalars['String'];
}>;

export type ChangeTwitterEmailMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'changeTwitterEmail'>;

export type TagsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TagsQuery = { __typename?: 'Query' } & {
  tags: Array<{ __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>>;
};

export type CreateTagMutationVariables = Types.Exact<{
  label: Types.Scalars['String'];
  resourceId?: Types.Maybe<Types.Scalars['ID']>;
  resourceType?: Types.Maybe<Types.TagResourceTypeEnum>;
}>;

export type CreateTagMutation = { __typename?: 'Mutation' } & {
  createTag: { __typename?: 'CreateTagResponse' } & {
    tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
    featureTag?: Types.Maybe<
      { __typename?: 'FeatureTag' } & Pick<Types.FeatureTag, 'id' | 'tagId'> & {
          tag: { __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>;
        }
    >;
  };
};

export type RemoveTagMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type RemoveTagMutation = { __typename?: 'Mutation' } & {
  removeTag?: Types.Maybe<{ __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'label'>>;
};

export type UpdatePasswordMutationVariables = Types.Exact<{
  oldPassword: Types.Scalars['String'];
  newPassword: Types.Scalars['String'];
}>;

export type UpdatePasswordMutation = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'updatePassword'>;

export type UpdateUserSettingsMutationVariables = Types.Exact<{
  openDrawer?: Types.Maybe<Types.Scalars['Boolean']>;
  feedsLayout?: Types.Maybe<Types.FeedLayoutEnum>;
  feedsOrder?: Types.Maybe<Types.OrderEnum>;
  feedsOrderBy?: Types.Maybe<Types.FeedOrderByEnum>;
  feedsLimit?: Types.Maybe<Types.Scalars['Int']>;
  bundlesLayout?: Types.Maybe<Types.BundleLayoutEnum>;
  bundlesOrder?: Types.Maybe<Types.OrderEnum>;
  bundlesOrderBy?: Types.Maybe<Types.BundleOrderByEnum>;
  bundlesLimit?: Types.Maybe<Types.Scalars['Int']>;
  collectionsLayout?: Types.Maybe<Types.CollectionLayoutEnum>;
  collectionsOrder?: Types.Maybe<Types.OrderEnum>;
  collectionsOrderBy?: Types.Maybe<Types.CollectionOrderByEnum>;
  collectionsLimit?: Types.Maybe<Types.Scalars['Int']>;
  themeStyle?: Types.Maybe<Types.ThemeStyleEnum>;
}>;

export type UpdateUserSettingsMutation = { __typename?: 'Mutation' } & {
  updateUserSettings?: Types.Maybe<
    { __typename?: 'UserSettings' } & Pick<
      Types.UserSettings,
      | 'openDrawer'
      | 'feedsLayout'
      | 'feedsOrder'
      | 'feedsOrderBy'
      | 'feedsLimit'
      | 'bundlesLayout'
      | 'bundlesOrder'
      | 'bundlesOrderBy'
      | 'bundlesLimit'
      | 'collectionsLayout'
      | 'collectionsOrder'
      | 'collectionsOrderBy'
      | 'collectionsLimit'
      | 'themeStyle'
    >
  >;
};

export type UserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserQuery = { __typename?: 'Query' } & {
  user?: Types.Maybe<
    { __typename?: 'User' } & Pick<
      Types.User,
      | 'id'
      | 'photo'
      | 'email'
      | 'companyName'
      | 'firstName'
      | 'lastName'
      | 'oauth'
      | 'createdAt'
      | 'isSubExpired'
      | 'isAdmin'
    > & {
        features?: Types.Maybe<{ __typename?: 'UserFeatures' } & UserFeaturesFragment>;
        subscription?: Types.Maybe<
          { __typename?: 'Subscription' } & Pick<
            Types.Subscription,
            'id' | 'customerId' | 'isTrial' | 'trialEnd' | 'plan' | 'startDate' | 'cancelledAt'
          > & {
              selectedPlan?: Types.Maybe<
                { __typename?: 'Plan' } & Pick<
                  Types.Plan,
                  | 'id'
                  | 'planId'
                  | 'name'
                  | 'stars'
                  | 'price'
                  | 'feedsLimit'
                  | 'refreshRate'
                  | 'chargbeePlanId'
                  | 'postPerFeed'
                  | 'postLinkToRss'
                  | 'isInstagram'
                  | 'isBundles'
                  | 'isFilters'
                  | 'isCustomEmbeds'
                  | 'isSupport'
                  | 'maxPostLimit'
                  | 'timePeriod'
                  | 'displayName'
                >
              >;
            }
        >;
      }
  >;
};

export type UserFeaturesFragment = { __typename?: 'UserFeatures' } & Pick<
  Types.UserFeatures,
  | 'id'
  | 'rssBuilderIsJS'
  | 'rssBuilderCssSelector'
  | 'bundleLimit'
  | 'postLimit'
  | 'tags'
  | 'customCss'
  | 'rssPicker'
  | 'embedGrid'
  | 'embedFeedShadowRoot'
  | 'wallGallery'
  | 'feedOnBundles'
  | 'enableBundleLimit'
  | 'newGridTemplates'
  | 'pickerCssSelectors'
  | 'pickerEnableJs'
  | 'customTarget'
  | 'isCollections'
  | 'wallPinterest'
  | 'masterBundle'
  | 'dateFormat'
  | 'carouselNavigation'
  | 'carouselGallery'
  | 'wallTemplates'
  | 'feedTemplates'
  | 'listTemplates'
  | 'carouselTemplates'
  | 'tickerTemplates'
  | 'gridTemplates'
  | 'filterFormatter'
  | 'rssBuilderUrlParams'
  | 'onlyAscii'
  | 'ignoreIframelyCache'
  | 'yearlyPlans'
  | 'newIntegrations'
>;

export type UserSettingsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UserSettingsQuery = { __typename?: 'Query' } & {
  userSettings?: Types.Maybe<
    { __typename?: 'UserSettings' } & Pick<
      Types.UserSettings,
      | 'openDrawer'
      | 'feedsLayout'
      | 'feedsOrder'
      | 'feedsOrderBy'
      | 'feedsLimit'
      | 'bundlesLayout'
      | 'bundlesOrder'
      | 'bundlesOrderBy'
      | 'bundlesLimit'
      | 'collectionsLayout'
      | 'collectionsOrder'
      | 'collectionsOrderBy'
      | 'collectionsLimit'
      | 'themeStyle'
    >
  >;
};

export type UpdateUserMutationVariables = Types.Exact<{
  companyName?: Types.Maybe<Types.Scalars['String']>;
  firstName?: Types.Maybe<Types.Scalars['String']>;
  lastName?: Types.Maybe<Types.Scalars['String']>;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Types.Maybe<
    { __typename?: 'User' } & Pick<Types.User, 'companyName' | 'firstName' | 'lastName' | 'photo'> & {
        subscription?: Types.Maybe<
          { __typename?: 'Subscription' } & Pick<Types.Subscription, 'id' | 'isTrial' | 'plan' | 'cancelledAt'> & {
              selectedPlan?: Types.Maybe<
                { __typename?: 'Plan' } & Pick<
                  Types.Plan,
                  | 'id'
                  | 'planId'
                  | 'name'
                  | 'stars'
                  | 'price'
                  | 'feedsLimit'
                  | 'refreshRate'
                  | 'chargbeePlanId'
                  | 'postPerFeed'
                  | 'postLinkToRss'
                  | 'isInstagram'
                  | 'isBundles'
                  | 'isFilters'
                  | 'isCustomEmbeds'
                  | 'isSupport'
                  | 'maxPostLimit'
                  | 'timePeriod'
                  | 'displayName'
                >
              >;
            }
        >;
      }
  >;
};

export type WidgetFeedQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type WidgetFeedQuery = { __typename?: 'Query' } & {
  widgetFeed: { __typename?: 'WidgetFeedResponse' } & Pick<Types.WidgetFeedResponse, 'id' | 'status'> & {
      feed: { __typename?: 'Feed' } & Pick<
        Types.Feed,
        'id' | 'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
      > & {
          items?: Types.Maybe<
            Array<
              Types.Maybe<
                { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                    enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                  }
              >
            >
          >;
        };
      settings: { __typename?: 'EmbedFeedSettings' } & EmbedFeedSettingsFragment;
    };
};

export type WidgetTickerQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type WidgetTickerQuery = { __typename?: 'Query' } & {
  widgetTicker: { __typename?: 'WidgetTickerResponse' } & Pick<Types.WidgetTickerResponse, 'id' | 'status'> & {
      feed: { __typename?: 'Feed' } & Pick<
        Types.Feed,
        'id' | 'title' | 'description' | 'feedUrl' | 'siteUrl' | 'imageUrl' | 'generator'
      > & {
          items?: Types.Maybe<
            Array<
              Types.Maybe<
                { __typename?: 'FeedItem' } & Pick<Types.FeedItem, 'title' | 'url' | 'description' | 'date'> & {
                    enclosure?: Types.Maybe<{ __typename?: 'Enclosure' } & Pick<Types.Enclosure, 'url'>>;
                  }
              >
            >
          >;
        };
      settings: { __typename?: 'EmbedTickerSettings' } & EmbedTickerSettingsFragment;
    };
};
