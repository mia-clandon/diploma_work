import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export const GroupFragmentDoc = gql`
  fragment Group on Group {
    id
    name
    description
    feeds
    feedsData {
      id
      title
      imageUrl
      isCollection
    }
    isMaster
    createdAt
    isLimitPostsOfFeed
    limitPostsOfFeed
    enableGlobalSettings
    settings {
      id
      imageInDescription
      imageInEnclosure
      imageInMedia
      youtubeVideoIframe
      youtubeDescription
      instagramVideos
      twitterEmbeds
      twitterPrefixWithUsername
      twitterRemoveUrlFromTitle
      includeIFramesWhenPossible
      postLimit
      bundlePostLimit
      maxPostFeedLimit
      maxPostBundleLimit
      onlyAscii
    }
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
  }
`;
export const GroupRowFragmentDoc = gql`
  fragment GroupRow on Group {
    id
    name
    feeds
    isMaster
    createdAt
  }
`;
export const CollectionCardFragmentDoc = gql`
  fragment CollectionCard on CollectionCard {
    id
    url
    title
    description
    image
    author
    date
    articleReferenceId
    createdAt
  }
`;
export const CollectionFragmentDoc = gql`
  fragment Collection on Collection {
    id
    title
    description
    items {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export const CollectionCardParsedFragmentDoc = gql`
  fragment CollectionCardParsed on CollectionCardParsed {
    url
    title
    description
    image
    author
    date
    createdAt
  }
`;
export const CollectionRowFragmentDoc = gql`
  fragment CollectionRow on Collection {
    id
    title
    description
    date
    author
    items {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export const FeedItemFragmentDoc = gql`
  fragment FeedItem on FeedItem {
    id
    title
    url
    description
    date
    enclosure {
      url
    }
  }
`;
export const FeedDataFragmentDoc = gql`
  fragment FeedData on Feed {
    id
    title
    description
    feedUrl
    siteUrl
    imageUrl
    generator
    items {
      ...FeedItem
    }
  }
  ${FeedItemFragmentDoc}
`;
export const SocialSharingFragmentDoc = gql`
  fragment SocialSharing on SocialSharing {
    facebook
    twitter
    pinterest
    reddit
    whatsapp
    linkdin
    telegram
    yahoo
    vk
    email
    thumblr
  }
`;
export const EmbedWallSettingsFragmentDoc = gql`
  fragment EmbedWallSettings on EmbedWallSettings {
    id
    padding
    paddingY
    responsive
    columnsCount
    width
    height
    autoHeight
    postsCount
    background
    fontFamily
    linkTarget
    customTarget
    cardStyle
    dateFormat
    showTitle
    titleFontSize
    titleColor
    cardShowTitle
    cardTitleFontSize
    cardTitleColor
    cardTitleFontHeight
    cardTitleAlign
    cardTitleLines
    cardShowImage
    cardImageLazy
    cardShowDescription
    cardDescriptionFontSize
    cardDescriptionAlign
    cardSocialSharing
    cardSocialSharingRounded
    cardShowBorder
    cardBorderColor
    cardBorderRadius
    cardSocialSharingMap {
      ...SocialSharing
    }
    cardBackground
    cardDescriptionLines
    cardDescriptionColor
    cardDescriptionFontHeight
    cardShowFooter
    cardFooterColor
    cardImageLink
    cardImageRadius
    cardImageGradient
    showPagination
    paginationStyle
    paginationColor
    paginationBackground
    paginationLimit
    titlePaddingBottom
    template
  }
  ${SocialSharingFragmentDoc}
`;
export const EmbedListSettingsFragmentDoc = gql`
  fragment EmbedListSettings on EmbedListSettings {
    id
    width
    padding
    cardsPadding
    postsCount
    background
    fontFamily
    template
    linkTarget
    customTarget
    dateFormat
    showTitle
    titleFontSize
    titleColor
    cardImageLazy
    cardShowTitle
    cardTitleFontSize
    cardTitleColor
    cardTitleLines
    cardShowImage
    cardShowDescription
    cardDescriptionFontSize
    cardDescriptionLines
    cardDescriptionColor
    cardImageLink
    cardShowBorder
    cardBackground
    cardShowHeader
    cardTitleFontHeight
    cardDescriptionFontHeight
    cardImageRadius
    cardBorderColor
    cardBorderRadius
    cardSocialSharing
    cardSocialSharingMap {
      ...SocialSharing
    }
    cardSocialSharingRounded
    showPagination
    paginationStyle
    paginationColor
    paginationBackground
    paginationLimit
    cardStyle
    cardFooterFontSize
    cardFooterColor
    cardFooterPosition
    cardImagePosition
    mobileShowDescription
    customCss
  }
  ${SocialSharingFragmentDoc}
`;
export const EmbedCarouselSettingsFragmentDoc = gql`
  fragment EmbedCarouselSettings on EmbedCarouselSettings {
    id
    dateFormat
    padding
    responsive
    postsCount
    columnsCount
    fontFamily
    template
    linkTarget
    customTarget
    cardImageLazy
    speed
    autoPlay
    width
    height
    imageAutoHeight
    imageHeight
    showTitle
    titleFontSize
    titleColor
    cardShowTitle
    cardTitleFontSize
    cardTitleColor
    cardTitleAlign
    cardShowImage
    cardShowDescription
    cardDescriptionFontSize
    cardDescriptionLines
    cardDescriptionColor
    cardShowFooter
    cardFooterColor
    cardBackground
    cardImageLink
    cardTitleFontHeight
    cardDescriptionFontHeight
    cardShowBorder
    cardBorderColor
    cardBorderRadius
    cardStyle
    navigationStyle
    navigationPosition
  }
`;
export const EmbedFeedSettingsFragmentDoc = gql`
  fragment EmbedFeedSettings on EmbedFeedSettings {
    id
    padding
    postsCount
    background
    fontFamily
    dateFormat
    template
    showTitle
    titleFontSize
    titleColor
    titleBackground
    cardShowTitle
    cardTitleFontSize
    cardTitleColor
    cardShowImage
    cardShowDescription
    cardDescriptionFontSize
    cardDescriptionLines
    cardDescriptionColor
    cardShowFooter
    cardImageLazy
    cardFooterColor
    cardTitleAlign
    cardDescriptionAlign
    cardTitleBold
    cardDescriptionBold
    cardTitleItalic
    cardDescriptionItalic
    cardBackground
    cardTitleFontHeight
    cardDescriptionFontHeight
    cardShowBorder
    cardBorderColor
  }
`;
export const EmbedTickerSettingsFragmentDoc = gql`
  fragment EmbedTickerSettings on EmbedTickerSettings {
    id
    count
    speed
    direction
    spacing
    background
    paddingY
    fontFamily
    cardTitleColor
    cardTitleTransform
    cardTitleFontSize
    cardTitleFontWeight
    template
    linkTarget
    customTarget
    dateFormat
    cardBorderRadius
    cardTitleCharacters
    showTitle
    titleColor
    titleFontSize
    titleStyle
    titleBackground
    cardShowSource
    cardSourceColor
    cardSourcePosition
  }
`;
export const EmbedGridSettingsFragmentDoc = gql`
  fragment EmbedGridSettings on EmbedGridSettings {
    id
    count
    spacing
    background
    fontFamily
    dateFormat
    cardBackground
    cardImageLink
    linkTarget
    customTarget
    cardImageLazy
    cardTitleFontSize
    cardTitleFontHeight
    cardShowBorder
    cardShowFooter
    cardFooterColor
    cardDescriptionColor
    cardTitleColor
    cardDescriptionFontSize
    cardDescriptionFontHeight
    template
    templateDuplicate
    type
  }
`;
export const EmbedFragmentDoc = gql`
  fragment Embed on Embed {
    id
    status
    feed {
      ...FeedData
    }
    settings {
      ... on EmbedWallSettings {
        ...EmbedWallSettings
      }
      ... on EmbedListSettings {
        ...EmbedListSettings
      }
      ... on EmbedCarouselSettings {
        ...EmbedCarouselSettings
      }
      ... on EmbedFeedSettings {
        ...EmbedFeedSettings
      }
      ... on EmbedTickerSettings {
        ...EmbedTickerSettings
      }
      ... on EmbedGridSettings {
        ...EmbedGridSettings
      }
    }
  }
  ${FeedDataFragmentDoc}
  ${EmbedWallSettingsFragmentDoc}
  ${EmbedListSettingsFragmentDoc}
  ${EmbedCarouselSettingsFragmentDoc}
  ${EmbedFeedSettingsFragmentDoc}
  ${EmbedTickerSettingsFragmentDoc}
  ${EmbedGridSettingsFragmentDoc}
`;
export const FeedFragmentDoc = gql`
  fragment Feed on Feed {
    id
    title
    description
    feedUrl
    siteUrl
    imageUrl
    generator
    isCollection
    items {
      ...FeedItem
    }
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
    enableGlobalSettings
    settings {
      id
      imageInDescription
      imageInEnclosure
      imageInMedia
      youtubeVideoIframe
      youtubeDescription
      instagramVideos
      twitterEmbeds
      twitterPrefixWithUsername
      twitterRemoveUrlFromTitle
      includeIFramesWhenPossible
      postLimit
      bundlePostLimit
      maxPostFeedLimit
      maxPostBundleLimit
      onlyAscii
    }
  }
  ${FeedItemFragmentDoc}
`;
export const FeedRowFragmentDoc = gql`
  fragment FeedRow on Feed {
    id
    title
    description
    imageUrl
    siteUrl
    siteName
    createdAt
    feedUrl
    tags {
      id
      tagId
      tag {
        id
        label
      }
    }
  }
`;
export const FilterRuleFragmentDoc = gql`
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
export const FilterFragmentDoc = gql`
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
  ${FilterRuleFragmentDoc}
`;
export const ModerationFragmentDoc = gql`
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
  ${FilterFragmentDoc}
`;
export const KeyValueFragmentDoc = gql`
  fragment KeyValue on KeyValue {
    key
    value
    modifiedAt
    createdAt
  }
`;
export const AdminPlanFragmentDoc = gql`
  fragment AdminPlan on AdminPlan {
    id
    name
    price
  }
`;
export const EmbedTemplateFragmentDoc = gql`
  fragment EmbedTemplate on EmbedTemplate {
    id
    title
    feedId
    type
    active
    weight
    settings {
      ... on EmbedWallSettings {
        ...EmbedWallSettings
      }
      ... on EmbedListSettings {
        ...EmbedListSettings
      }
      ... on EmbedCarouselSettings {
        ...EmbedCarouselSettings
      }
      ... on EmbedFeedSettings {
        ...EmbedFeedSettings
      }
      ... on EmbedTickerSettings {
        ...EmbedTickerSettings
      }
      ... on EmbedGridSettings {
        ...EmbedGridSettings
      }
    }
    modifiedAt
    createdAt
  }
  ${EmbedWallSettingsFragmentDoc}
  ${EmbedListSettingsFragmentDoc}
  ${EmbedCarouselSettingsFragmentDoc}
  ${EmbedFeedSettingsFragmentDoc}
  ${EmbedTickerSettingsFragmentDoc}
  ${EmbedGridSettingsFragmentDoc}
`;
export const KnowledgeCategoryRowFragmentDoc = gql`
  fragment KnowledgeCategoryRow on KnowledgeCategoryRow {
    id
    title
    summary
    image
  }
`;
export const KnowledgePostFragmentDoc = gql`
  fragment KnowledgePost on KnowledgePost {
    id
    title
    summary
    body
    publishedAt
  }
`;
export const KnowledgeCategoryFragmentDoc = gql`
  fragment KnowledgeCategory on KnowledgeCategory {
    id
    title
    summary
    image
    color
    posts {
      ...KnowledgePost
    }
  }
  ${KnowledgePostFragmentDoc}
`;
export const KnowledgeRelationFragmentDoc = gql`
  fragment KnowledgeRelation on KnowledgeRelation {
    postId
    categoryId
  }
`;
export const UserFeaturesFragmentDoc = gql`
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
  }
`;
export const LoginWithEmailDocument = gql`
  mutation loginWithEmail($email: String!, $password: String!, $updateEmailToken: String) {
    loginWithEmail(email: $email, password: $password, updateEmailToken: $updateEmailToken)
  }
`;
export type LoginWithEmailMutationFn = Apollo.MutationFunction<
  Types.LoginWithEmailMutation,
  Types.LoginWithEmailMutationVariables
>;

/**
 * __useLoginWithEmailMutation__
 *
 * To run a mutation, you first call `useLoginWithEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginWithEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginWithEmailMutation, { data, loading, error }] = useLoginWithEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      updateEmailToken: // value for 'updateEmailToken'
 *   },
 * });
 */
export function useLoginWithEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.LoginWithEmailMutation, Types.LoginWithEmailMutationVariables>
) {
  return Apollo.useMutation<Types.LoginWithEmailMutation, Types.LoginWithEmailMutationVariables>(
    LoginWithEmailDocument,
    baseOptions
  );
}
export type LoginWithEmailMutationHookResult = ReturnType<typeof useLoginWithEmailMutation>;
export type LoginWithEmailMutationResult = Apollo.MutationResult<Types.LoginWithEmailMutation>;
export type LoginWithEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.LoginWithEmailMutation,
  Types.LoginWithEmailMutationVariables
>;
export const RegistrationWithEmailDocument = gql`
  mutation RegistrationWithEmail(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
    $companyName: String
  ) {
    registrationWithEmail(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      companyName: $companyName
    )
  }
`;
export type RegistrationWithEmailMutationFn = Apollo.MutationFunction<
  Types.RegistrationWithEmailMutation,
  Types.RegistrationWithEmailMutationVariables
>;

/**
 * __useRegistrationWithEmailMutation__
 *
 * To run a mutation, you first call `useRegistrationWithEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationWithEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationWithEmailMutation, { data, loading, error }] = useRegistrationWithEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      companyName: // value for 'companyName'
 *   },
 * });
 */
export function useRegistrationWithEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RegistrationWithEmailMutation,
    Types.RegistrationWithEmailMutationVariables
  >
) {
  return Apollo.useMutation<Types.RegistrationWithEmailMutation, Types.RegistrationWithEmailMutationVariables>(
    RegistrationWithEmailDocument,
    baseOptions
  );
}
export type RegistrationWithEmailMutationHookResult = ReturnType<typeof useRegistrationWithEmailMutation>;
export type RegistrationWithEmailMutationResult = Apollo.MutationResult<Types.RegistrationWithEmailMutation>;
export type RegistrationWithEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.RegistrationWithEmailMutation,
  Types.RegistrationWithEmailMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  Types.ResetPasswordMutation,
  Types.ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ResetPasswordMutation, Types.ResetPasswordMutationVariables>
) {
  return Apollo.useMutation<Types.ResetPasswordMutation, Types.ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    baseOptions
  );
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<Types.ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  Types.ResetPasswordMutation,
  Types.ResetPasswordMutationVariables
>;
export const VerifyEmailDocument = gql`
  mutation verifyEmail($token: String!) {
    verifyEmail(token: $token)
  }
`;
export type VerifyEmailMutationFn = Apollo.MutationFunction<
  Types.VerifyEmailMutation,
  Types.VerifyEmailMutationVariables
>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.VerifyEmailMutation, Types.VerifyEmailMutationVariables>
) {
  return Apollo.useMutation<Types.VerifyEmailMutation, Types.VerifyEmailMutationVariables>(
    VerifyEmailDocument,
    baseOptions
  );
}
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<Types.VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.VerifyEmailMutation,
  Types.VerifyEmailMutationVariables
>;
export const BlogPostListDocument = gql`
  query blogPostList($status: String) {
    blogPostList(status: $status) {
      id
      title
      summary
      status
      images {
        src
        alt
      }
      mainImageIndex
      publishedDate
    }
  }
`;

/**
 * __useBlogPostListQuery__
 *
 * To run a query within a React component, call `useBlogPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostListQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useBlogPostListQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.BlogPostListQuery, Types.BlogPostListQueryVariables>
) {
  return Apollo.useQuery<Types.BlogPostListQuery, Types.BlogPostListQueryVariables>(BlogPostListDocument, baseOptions);
}
export function useBlogPostListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BlogPostListQuery, Types.BlogPostListQueryVariables>
) {
  return Apollo.useLazyQuery<Types.BlogPostListQuery, Types.BlogPostListQueryVariables>(
    BlogPostListDocument,
    baseOptions
  );
}
export type BlogPostListQueryHookResult = ReturnType<typeof useBlogPostListQuery>;
export type BlogPostListLazyQueryHookResult = ReturnType<typeof useBlogPostListLazyQuery>;
export type BlogPostListQueryResult = Apollo.QueryResult<Types.BlogPostListQuery, Types.BlogPostListQueryVariables>;
export const CopyGroupDocument = gql`
  mutation copyGroup(
    $bundleId: ID!
    $title: String!
    $feeds: [String!]!
    $filter: Boolean
    $embeds: Boolean
    $settings: Boolean
  ) {
    copyGroup(
      bundleId: $bundleId
      title: $title
      feeds: $feeds
      filter: $filter
      embeds: $embeds
      settings: $settings
    ) {
      ...Group
    }
  }
  ${GroupFragmentDoc}
`;
export type CopyGroupMutationFn = Apollo.MutationFunction<Types.CopyGroupMutation, Types.CopyGroupMutationVariables>;

/**
 * __useCopyGroupMutation__
 *
 * To run a mutation, you first call `useCopyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copyGroupMutation, { data, loading, error }] = useCopyGroupMutation({
 *   variables: {
 *      bundleId: // value for 'bundleId'
 *      title: // value for 'title'
 *      feeds: // value for 'feeds'
 *      filter: // value for 'filter'
 *      embeds: // value for 'embeds'
 *      settings: // value for 'settings'
 *   },
 * });
 */
export function useCopyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CopyGroupMutation, Types.CopyGroupMutationVariables>
) {
  return Apollo.useMutation<Types.CopyGroupMutation, Types.CopyGroupMutationVariables>(CopyGroupDocument, baseOptions);
}
export type CopyGroupMutationHookResult = ReturnType<typeof useCopyGroupMutation>;
export type CopyGroupMutationResult = Apollo.MutationResult<Types.CopyGroupMutation>;
export type CopyGroupMutationOptions = Apollo.BaseMutationOptions<
  Types.CopyGroupMutation,
  Types.CopyGroupMutationVariables
>;
export const CreateGroupDocument = gql`
  mutation createGroup($title: String!, $feeds: [String!]!) {
    createGroup(title: $title, feeds: $feeds) {
      ...Group
    }
  }
  ${GroupFragmentDoc}
`;
export type CreateGroupMutationFn = Apollo.MutationFunction<
  Types.CreateGroupMutation,
  Types.CreateGroupMutationVariables
>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      title: // value for 'title'
 *      feeds: // value for 'feeds'
 *   },
 * });
 */
export function useCreateGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreateGroupMutation, Types.CreateGroupMutationVariables>
) {
  return Apollo.useMutation<Types.CreateGroupMutation, Types.CreateGroupMutationVariables>(
    CreateGroupDocument,
    baseOptions
  );
}
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<Types.CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateGroupMutation,
  Types.CreateGroupMutationVariables
>;
export const UpdateGroupDocument = gql`
  mutation updateGroup(
    $id: ID!
    $title: String
    $description: String
    $feeds: [String!]
    $isLimitPostsOfFeed: Boolean
    $limitPostsOfFeed: Int
    $tags: [ID!]
    $enableGlobalSettings: Boolean
  ) {
    updateGroup(
      id: $id
      title: $title
      description: $description
      feeds: $feeds
      isLimitPostsOfFeed: $isLimitPostsOfFeed
      limitPostsOfFeed: $limitPostsOfFeed
      tags: $tags
      enableGlobalSettings: $enableGlobalSettings
    ) {
      ...Group
    }
  }
  ${GroupFragmentDoc}
`;
export type UpdateGroupMutationFn = Apollo.MutationFunction<
  Types.UpdateGroupMutation,
  Types.UpdateGroupMutationVariables
>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      feeds: // value for 'feeds'
 *      isLimitPostsOfFeed: // value for 'isLimitPostsOfFeed'
 *      limitPostsOfFeed: // value for 'limitPostsOfFeed'
 *      tags: // value for 'tags'
 *      enableGlobalSettings: // value for 'enableGlobalSettings'
 *   },
 * });
 */
export function useUpdateGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateGroupMutation, Types.UpdateGroupMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateGroupMutation, Types.UpdateGroupMutationVariables>(
    UpdateGroupDocument,
    baseOptions
  );
}
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<Types.UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateGroupMutation,
  Types.UpdateGroupMutationVariables
>;
export const GroupDocument = gql`
  query group($id: ID!) {
    group(id: $id) {
      ...Group
    }
  }
  ${GroupFragmentDoc}
`;

/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGroupQuery(baseOptions: Apollo.QueryHookOptions<Types.GroupQuery, Types.GroupQueryVariables>) {
  return Apollo.useQuery<Types.GroupQuery, Types.GroupQueryVariables>(GroupDocument, baseOptions);
}
export function useGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GroupQuery, Types.GroupQueryVariables>
) {
  return Apollo.useLazyQuery<Types.GroupQuery, Types.GroupQueryVariables>(GroupDocument, baseOptions);
}
export type GroupQueryHookResult = ReturnType<typeof useGroupQuery>;
export type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>;
export type GroupQueryResult = Apollo.QueryResult<Types.GroupQuery, Types.GroupQueryVariables>;
export const GroupsDocument = gql`
  query groups($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: BundleOrderByEnum) {
    groups(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "groups", filter: []) {
      rows {
        ...GroupRow
      }
      count
    }
  }
  ${GroupRowFragmentDoc}
`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GroupsQuery, Types.GroupsQueryVariables>) {
  return Apollo.useQuery<Types.GroupsQuery, Types.GroupsQueryVariables>(GroupsDocument, baseOptions);
}
export function useGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GroupsQuery, Types.GroupsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.GroupsQuery, Types.GroupsQueryVariables>(GroupsDocument, baseOptions);
}
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<Types.GroupsQuery, Types.GroupsQueryVariables>;
export const GroupsFullDocument = gql`
  query groupsFull($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: BundleOrderByEnum) {
    groups(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "groups", filter: []) {
      rows {
        ...Group
      }
      count
    }
  }
  ${GroupFragmentDoc}
`;

/**
 * __useGroupsFullQuery__
 *
 * To run a query within a React component, call `useGroupsFullQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsFullQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsFullQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGroupsFullQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GroupsFullQuery, Types.GroupsFullQueryVariables>
) {
  return Apollo.useQuery<Types.GroupsFullQuery, Types.GroupsFullQueryVariables>(GroupsFullDocument, baseOptions);
}
export function useGroupsFullLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GroupsFullQuery, Types.GroupsFullQueryVariables>
) {
  return Apollo.useLazyQuery<Types.GroupsFullQuery, Types.GroupsFullQueryVariables>(GroupsFullDocument, baseOptions);
}
export type GroupsFullQueryHookResult = ReturnType<typeof useGroupsFullQuery>;
export type GroupsFullLazyQueryHookResult = ReturnType<typeof useGroupsFullLazyQuery>;
export type GroupsFullQueryResult = Apollo.QueryResult<Types.GroupsFullQuery, Types.GroupsFullQueryVariables>;
export const AddArticleToCollectionDocument = gql`
  mutation addArticleToCollection($input: CollectionAddArticleInput!) {
    addArticleToCollection(input: $input) {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export type AddArticleToCollectionMutationFn = Apollo.MutationFunction<
  Types.AddArticleToCollectionMutation,
  Types.AddArticleToCollectionMutationVariables
>;

/**
 * __useAddArticleToCollectionMutation__
 *
 * To run a mutation, you first call `useAddArticleToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArticleToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArticleToCollectionMutation, { data, loading, error }] = useAddArticleToCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddArticleToCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddArticleToCollectionMutation,
    Types.AddArticleToCollectionMutationVariables
  >
) {
  return Apollo.useMutation<Types.AddArticleToCollectionMutation, Types.AddArticleToCollectionMutationVariables>(
    AddArticleToCollectionDocument,
    baseOptions
  );
}
export type AddArticleToCollectionMutationHookResult = ReturnType<typeof useAddArticleToCollectionMutation>;
export type AddArticleToCollectionMutationResult = Apollo.MutationResult<Types.AddArticleToCollectionMutation>;
export type AddArticleToCollectionMutationOptions = Apollo.BaseMutationOptions<
  Types.AddArticleToCollectionMutation,
  Types.AddArticleToCollectionMutationVariables
>;
export const CreateCollectionDocument = gql`
  mutation createCollection($input: CollectionCreateInput!) {
    createCollection(input: $input) {
      ...Collection
    }
  }
  ${CollectionFragmentDoc}
`;
export type CreateCollectionMutationFn = Apollo.MutationFunction<
  Types.CreateCollectionMutation,
  Types.CreateCollectionMutationVariables
>;

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreateCollectionMutation, Types.CreateCollectionMutationVariables>
) {
  return Apollo.useMutation<Types.CreateCollectionMutation, Types.CreateCollectionMutationVariables>(
    CreateCollectionDocument,
    baseOptions
  );
}
export type CreateCollectionMutationHookResult = ReturnType<typeof useCreateCollectionMutation>;
export type CreateCollectionMutationResult = Apollo.MutationResult<Types.CreateCollectionMutation>;
export type CreateCollectionMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateCollectionMutation,
  Types.CreateCollectionMutationVariables
>;
export const CreateCollectionCardDocument = gql`
  mutation createCollectionCard($input: CollectionCardCreateInput!) {
    createCollectionCard(input: $input) {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export type CreateCollectionCardMutationFn = Apollo.MutationFunction<
  Types.CreateCollectionCardMutation,
  Types.CreateCollectionCardMutationVariables
>;

/**
 * __useCreateCollectionCardMutation__
 *
 * To run a mutation, you first call `useCreateCollectionCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionCardMutation, { data, loading, error }] = useCreateCollectionCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCollectionCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateCollectionCardMutation,
    Types.CreateCollectionCardMutationVariables
  >
) {
  return Apollo.useMutation<Types.CreateCollectionCardMutation, Types.CreateCollectionCardMutationVariables>(
    CreateCollectionCardDocument,
    baseOptions
  );
}
export type CreateCollectionCardMutationHookResult = ReturnType<typeof useCreateCollectionCardMutation>;
export type CreateCollectionCardMutationResult = Apollo.MutationResult<Types.CreateCollectionCardMutation>;
export type CreateCollectionCardMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateCollectionCardMutation,
  Types.CreateCollectionCardMutationVariables
>;
export const DeleteCollectionDocument = gql`
  mutation deleteCollection($id: ID!) {
    deleteCollection(id: $id)
  }
`;
export type DeleteCollectionMutationFn = Apollo.MutationFunction<
  Types.DeleteCollectionMutation,
  Types.DeleteCollectionMutationVariables
>;

/**
 * __useDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionMutation, { data, loading, error }] = useDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteCollectionMutation, Types.DeleteCollectionMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteCollectionMutation, Types.DeleteCollectionMutationVariables>(
    DeleteCollectionDocument,
    baseOptions
  );
}
export type DeleteCollectionMutationHookResult = ReturnType<typeof useDeleteCollectionMutation>;
export type DeleteCollectionMutationResult = Apollo.MutationResult<Types.DeleteCollectionMutation>;
export type DeleteCollectionMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteCollectionMutation,
  Types.DeleteCollectionMutationVariables
>;
export const DeleteCollectionCardDocument = gql`
  mutation deleteCollectionCard($id: ID!, $collectionId: ID!) {
    deleteCollectionCard(id: $id, collectionId: $collectionId)
  }
`;
export type DeleteCollectionCardMutationFn = Apollo.MutationFunction<
  Types.DeleteCollectionCardMutation,
  Types.DeleteCollectionCardMutationVariables
>;

/**
 * __useDeleteCollectionCardMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionCardMutation, { data, loading, error }] = useDeleteCollectionCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useDeleteCollectionCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteCollectionCardMutation,
    Types.DeleteCollectionCardMutationVariables
  >
) {
  return Apollo.useMutation<Types.DeleteCollectionCardMutation, Types.DeleteCollectionCardMutationVariables>(
    DeleteCollectionCardDocument,
    baseOptions
  );
}
export type DeleteCollectionCardMutationHookResult = ReturnType<typeof useDeleteCollectionCardMutation>;
export type DeleteCollectionCardMutationResult = Apollo.MutationResult<Types.DeleteCollectionCardMutation>;
export type DeleteCollectionCardMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteCollectionCardMutation,
  Types.DeleteCollectionCardMutationVariables
>;
export const MoveCollectionCardDocument = gql`
  mutation moveCollectionCard($id: ID!, $fromCollection: ID!, $toCollection: ID!) {
    moveCollectionCard(id: $id, fromCollection: $fromCollection, toCollection: $toCollection) {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export type MoveCollectionCardMutationFn = Apollo.MutationFunction<
  Types.MoveCollectionCardMutation,
  Types.MoveCollectionCardMutationVariables
>;

/**
 * __useMoveCollectionCardMutation__
 *
 * To run a mutation, you first call `useMoveCollectionCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveCollectionCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveCollectionCardMutation, { data, loading, error }] = useMoveCollectionCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      fromCollection: // value for 'fromCollection'
 *      toCollection: // value for 'toCollection'
 *   },
 * });
 */
export function useMoveCollectionCardMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.MoveCollectionCardMutation, Types.MoveCollectionCardMutationVariables>
) {
  return Apollo.useMutation<Types.MoveCollectionCardMutation, Types.MoveCollectionCardMutationVariables>(
    MoveCollectionCardDocument,
    baseOptions
  );
}
export type MoveCollectionCardMutationHookResult = ReturnType<typeof useMoveCollectionCardMutation>;
export type MoveCollectionCardMutationResult = Apollo.MutationResult<Types.MoveCollectionCardMutation>;
export type MoveCollectionCardMutationOptions = Apollo.BaseMutationOptions<
  Types.MoveCollectionCardMutation,
  Types.MoveCollectionCardMutationVariables
>;
export const RemoveArticleFromCollectionDocument = gql`
  mutation removeArticleFromCollection($input: CollectionRemoveArticleInput!) {
    removeArticleFromCollection(input: $input)
  }
`;
export type RemoveArticleFromCollectionMutationFn = Apollo.MutationFunction<
  Types.RemoveArticleFromCollectionMutation,
  Types.RemoveArticleFromCollectionMutationVariables
>;

/**
 * __useRemoveArticleFromCollectionMutation__
 *
 * To run a mutation, you first call `useRemoveArticleFromCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleFromCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleFromCollectionMutation, { data, loading, error }] = useRemoveArticleFromCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveArticleFromCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RemoveArticleFromCollectionMutation,
    Types.RemoveArticleFromCollectionMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.RemoveArticleFromCollectionMutation,
    Types.RemoveArticleFromCollectionMutationVariables
  >(RemoveArticleFromCollectionDocument, baseOptions);
}
export type RemoveArticleFromCollectionMutationHookResult = ReturnType<typeof useRemoveArticleFromCollectionMutation>;
export type RemoveArticleFromCollectionMutationResult = Apollo.MutationResult<Types.RemoveArticleFromCollectionMutation>;
export type RemoveArticleFromCollectionMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveArticleFromCollectionMutation,
  Types.RemoveArticleFromCollectionMutationVariables
>;
export const UpdateCollectionDocument = gql`
  mutation updateCollection($input: CollectionUpdateInput!) {
    updateCollection(input: $input) {
      ...Collection
    }
  }
  ${CollectionFragmentDoc}
`;
export type UpdateCollectionMutationFn = Apollo.MutationFunction<
  Types.UpdateCollectionMutation,
  Types.UpdateCollectionMutationVariables
>;

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateCollectionMutation, Types.UpdateCollectionMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateCollectionMutation, Types.UpdateCollectionMutationVariables>(
    UpdateCollectionDocument,
    baseOptions
  );
}
export type UpdateCollectionMutationHookResult = ReturnType<typeof useUpdateCollectionMutation>;
export type UpdateCollectionMutationResult = Apollo.MutationResult<Types.UpdateCollectionMutation>;
export type UpdateCollectionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateCollectionMutation,
  Types.UpdateCollectionMutationVariables
>;
export const UpdateCollectionCardDocument = gql`
  mutation updateCollectionCard($input: CollectionCardUpdateInput!) {
    updateCollectionCard(input: $input) {
      ...CollectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export type UpdateCollectionCardMutationFn = Apollo.MutationFunction<
  Types.UpdateCollectionCardMutation,
  Types.UpdateCollectionCardMutationVariables
>;

/**
 * __useUpdateCollectionCardMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionCardMutation, { data, loading, error }] = useUpdateCollectionCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCollectionCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateCollectionCardMutation,
    Types.UpdateCollectionCardMutationVariables
  >
) {
  return Apollo.useMutation<Types.UpdateCollectionCardMutation, Types.UpdateCollectionCardMutationVariables>(
    UpdateCollectionCardDocument,
    baseOptions
  );
}
export type UpdateCollectionCardMutationHookResult = ReturnType<typeof useUpdateCollectionCardMutation>;
export type UpdateCollectionCardMutationResult = Apollo.MutationResult<Types.UpdateCollectionCardMutation>;
export type UpdateCollectionCardMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateCollectionCardMutation,
  Types.UpdateCollectionCardMutationVariables
>;
export const GetCollectionArticleDocument = gql`
  query getCollectionArticle($url: String!) {
    getCollectionArticle(url: $url) {
      ...CollectionCardParsed
    }
  }
  ${CollectionCardParsedFragmentDoc}
`;

/**
 * __useGetCollectionArticleQuery__
 *
 * To run a query within a React component, call `useGetCollectionArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionArticleQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetCollectionArticleQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables>
) {
  return Apollo.useQuery<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables>(
    GetCollectionArticleDocument,
    baseOptions
  );
}
export function useGetCollectionArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables>
) {
  return Apollo.useLazyQuery<Types.GetCollectionArticleQuery, Types.GetCollectionArticleQueryVariables>(
    GetCollectionArticleDocument,
    baseOptions
  );
}
export type GetCollectionArticleQueryHookResult = ReturnType<typeof useGetCollectionArticleQuery>;
export type GetCollectionArticleLazyQueryHookResult = ReturnType<typeof useGetCollectionArticleLazyQuery>;
export type GetCollectionArticleQueryResult = Apollo.QueryResult<
  Types.GetCollectionArticleQuery,
  Types.GetCollectionArticleQueryVariables
>;
export const CollectionDocument = gql`
  query collection($id: ID!) {
    collection(id: $id) {
      ...CollectionRow
    }
  }
  ${CollectionRowFragmentDoc}
`;

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<Types.CollectionQuery, Types.CollectionQueryVariables>
) {
  return Apollo.useQuery<Types.CollectionQuery, Types.CollectionQueryVariables>(CollectionDocument, baseOptions);
}
export function useCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.CollectionQuery, Types.CollectionQueryVariables>
) {
  return Apollo.useLazyQuery<Types.CollectionQuery, Types.CollectionQueryVariables>(CollectionDocument, baseOptions);
}
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<Types.CollectionQuery, Types.CollectionQueryVariables>;
export const CollectionsDocument = gql`
  query collections($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: CollectionOrderByEnum) {
    collections(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy)
      @connection(key: "collections", filter: []) {
      rows {
        ...CollectionRow
      }
      count
    }
  }
  ${CollectionRowFragmentDoc}
`;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.CollectionsQuery, Types.CollectionsQueryVariables>
) {
  return Apollo.useQuery<Types.CollectionsQuery, Types.CollectionsQueryVariables>(CollectionsDocument, baseOptions);
}
export function useCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.CollectionsQuery, Types.CollectionsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.CollectionsQuery, Types.CollectionsQueryVariables>(CollectionsDocument, baseOptions);
}
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<Types.CollectionsQuery, Types.CollectionsQueryVariables>;
export const SiteHtmlDocument = gql`
  query siteHtml($site: String!) {
    siteHtml(site: $site) {
      body
    }
  }
`;

/**
 * __useSiteHtmlQuery__
 *
 * To run a query within a React component, call `useSiteHtmlQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteHtmlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteHtmlQuery({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useSiteHtmlQuery(
  baseOptions: Apollo.QueryHookOptions<Types.SiteHtmlQuery, Types.SiteHtmlQueryVariables>
) {
  return Apollo.useQuery<Types.SiteHtmlQuery, Types.SiteHtmlQueryVariables>(SiteHtmlDocument, baseOptions);
}
export function useSiteHtmlLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.SiteHtmlQuery, Types.SiteHtmlQueryVariables>
) {
  return Apollo.useLazyQuery<Types.SiteHtmlQuery, Types.SiteHtmlQueryVariables>(SiteHtmlDocument, baseOptions);
}
export type SiteHtmlQueryHookResult = ReturnType<typeof useSiteHtmlQuery>;
export type SiteHtmlLazyQueryHookResult = ReturnType<typeof useSiteHtmlLazyQuery>;
export type SiteHtmlQueryResult = Apollo.QueryResult<Types.SiteHtmlQuery, Types.SiteHtmlQueryVariables>;
export const EmbedDocument = gql`
  query embed($id: ID!, $type: EmbedType!, $version: String, $create: Boolean) {
    embed(id: $id, type: $type, version: $version, create: $create) {
      ...Embed
    }
  }
  ${EmbedFragmentDoc}
`;

/**
 * __useEmbedQuery__
 *
 * To run a query within a React component, call `useEmbedQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedQuery(baseOptions: Apollo.QueryHookOptions<Types.EmbedQuery, Types.EmbedQueryVariables>) {
  return Apollo.useQuery<Types.EmbedQuery, Types.EmbedQueryVariables>(EmbedDocument, baseOptions);
}
export function useEmbedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedQuery, Types.EmbedQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedQuery, Types.EmbedQueryVariables>(EmbedDocument, baseOptions);
}
export type EmbedQueryHookResult = ReturnType<typeof useEmbedQuery>;
export type EmbedLazyQueryHookResult = ReturnType<typeof useEmbedLazyQuery>;
export type EmbedQueryResult = Apollo.QueryResult<Types.EmbedQuery, Types.EmbedQueryVariables>;
export const EmbedCarouselDocument = gql`
  query embedCarousel($id: ID!, $version: String, $create: Boolean) {
    embedCarousel(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedCarouselSettings
        }
        createdAt
      }
    }
  }
  ${EmbedCarouselSettingsFragmentDoc}
`;

/**
 * __useEmbedCarouselQuery__
 *
 * To run a query within a React component, call `useEmbedCarouselQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedCarouselQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedCarouselQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedCarouselQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedCarouselQuery, Types.EmbedCarouselQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedCarouselQuery, Types.EmbedCarouselQueryVariables>(
    EmbedCarouselDocument,
    baseOptions
  );
}
export function useEmbedCarouselLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedCarouselQuery, Types.EmbedCarouselQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedCarouselQuery, Types.EmbedCarouselQueryVariables>(
    EmbedCarouselDocument,
    baseOptions
  );
}
export type EmbedCarouselQueryHookResult = ReturnType<typeof useEmbedCarouselQuery>;
export type EmbedCarouselLazyQueryHookResult = ReturnType<typeof useEmbedCarouselLazyQuery>;
export type EmbedCarouselQueryResult = Apollo.QueryResult<Types.EmbedCarouselQuery, Types.EmbedCarouselQueryVariables>;
export const UpdateEmbedCarouselDocument = gql`
  mutation updateEmbedCarousel($input: EmbedCarouselInput!) {
    updateEmbedCarousel(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedCarouselSettings
        }
        createdAt
      }
    }
  }
  ${EmbedCarouselSettingsFragmentDoc}
`;
export type UpdateEmbedCarouselMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedCarouselMutation,
  Types.UpdateEmbedCarouselMutationVariables
>;

/**
 * __useUpdateEmbedCarouselMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedCarouselMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedCarouselMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedCarouselMutation, { data, loading, error }] = useUpdateEmbedCarouselMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedCarouselMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateEmbedCarouselMutation,
    Types.UpdateEmbedCarouselMutationVariables
  >
) {
  return Apollo.useMutation<Types.UpdateEmbedCarouselMutation, Types.UpdateEmbedCarouselMutationVariables>(
    UpdateEmbedCarouselDocument,
    baseOptions
  );
}
export type UpdateEmbedCarouselMutationHookResult = ReturnType<typeof useUpdateEmbedCarouselMutation>;
export type UpdateEmbedCarouselMutationResult = Apollo.MutationResult<Types.UpdateEmbedCarouselMutation>;
export type UpdateEmbedCarouselMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedCarouselMutation,
  Types.UpdateEmbedCarouselMutationVariables
>;
export const EmbedFeedDocument = gql`
  query embedFeed($id: ID!, $version: String, $create: Boolean) {
    embedFeed(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedFeedSettings
        }
        createdAt
      }
    }
  }
  ${EmbedFeedSettingsFragmentDoc}
`;

/**
 * __useEmbedFeedQuery__
 *
 * To run a query within a React component, call `useEmbedFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedFeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedFeedQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedFeedQuery, Types.EmbedFeedQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedFeedQuery, Types.EmbedFeedQueryVariables>(EmbedFeedDocument, baseOptions);
}
export function useEmbedFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedFeedQuery, Types.EmbedFeedQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedFeedQuery, Types.EmbedFeedQueryVariables>(EmbedFeedDocument, baseOptions);
}
export type EmbedFeedQueryHookResult = ReturnType<typeof useEmbedFeedQuery>;
export type EmbedFeedLazyQueryHookResult = ReturnType<typeof useEmbedFeedLazyQuery>;
export type EmbedFeedQueryResult = Apollo.QueryResult<Types.EmbedFeedQuery, Types.EmbedFeedQueryVariables>;
export const UpdateEmbedFeedDocument = gql`
  mutation updateEmbedFeed($input: EmbedFeedInput!) {
    updateEmbedFeed(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedFeedSettings
        }
        createdAt
      }
    }
  }
  ${EmbedFeedSettingsFragmentDoc}
`;
export type UpdateEmbedFeedMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedFeedMutation,
  Types.UpdateEmbedFeedMutationVariables
>;

/**
 * __useUpdateEmbedFeedMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedFeedMutation, { data, loading, error }] = useUpdateEmbedFeedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedFeedMutation, Types.UpdateEmbedFeedMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedFeedMutation, Types.UpdateEmbedFeedMutationVariables>(
    UpdateEmbedFeedDocument,
    baseOptions
  );
}
export type UpdateEmbedFeedMutationHookResult = ReturnType<typeof useUpdateEmbedFeedMutation>;
export type UpdateEmbedFeedMutationResult = Apollo.MutationResult<Types.UpdateEmbedFeedMutation>;
export type UpdateEmbedFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedFeedMutation,
  Types.UpdateEmbedFeedMutationVariables
>;
export const EmbedGridDocument = gql`
  query embedGrid($id: ID!, $version: String, $create: Boolean) {
    embedGrid(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedGridSettings
        }
        createdAt
      }
    }
  }
  ${EmbedGridSettingsFragmentDoc}
`;

/**
 * __useEmbedGridQuery__
 *
 * To run a query within a React component, call `useEmbedGridQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedGridQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedGridQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedGridQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedGridQuery, Types.EmbedGridQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedGridQuery, Types.EmbedGridQueryVariables>(EmbedGridDocument, baseOptions);
}
export function useEmbedGridLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedGridQuery, Types.EmbedGridQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedGridQuery, Types.EmbedGridQueryVariables>(EmbedGridDocument, baseOptions);
}
export type EmbedGridQueryHookResult = ReturnType<typeof useEmbedGridQuery>;
export type EmbedGridLazyQueryHookResult = ReturnType<typeof useEmbedGridLazyQuery>;
export type EmbedGridQueryResult = Apollo.QueryResult<Types.EmbedGridQuery, Types.EmbedGridQueryVariables>;
export const UpdateEmbedGridDocument = gql`
  mutation updateEmbedGrid($input: EmbedGridInput!) {
    updateEmbedGrid(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedGridSettings
        }
        createdAt
      }
    }
  }
  ${EmbedGridSettingsFragmentDoc}
`;
export type UpdateEmbedGridMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedGridMutation,
  Types.UpdateEmbedGridMutationVariables
>;

/**
 * __useUpdateEmbedGridMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedGridMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedGridMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedGridMutation, { data, loading, error }] = useUpdateEmbedGridMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedGridMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedGridMutation, Types.UpdateEmbedGridMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedGridMutation, Types.UpdateEmbedGridMutationVariables>(
    UpdateEmbedGridDocument,
    baseOptions
  );
}
export type UpdateEmbedGridMutationHookResult = ReturnType<typeof useUpdateEmbedGridMutation>;
export type UpdateEmbedGridMutationResult = Apollo.MutationResult<Types.UpdateEmbedGridMutation>;
export type UpdateEmbedGridMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedGridMutation,
  Types.UpdateEmbedGridMutationVariables
>;
export const EmbedListDocument = gql`
  query embedList($id: ID!, $version: String, $create: Boolean) {
    embedList(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedListSettings
        }
        createdAt
      }
    }
  }
  ${EmbedListSettingsFragmentDoc}
`;

/**
 * __useEmbedListQuery__
 *
 * To run a query within a React component, call `useEmbedListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedListQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedListQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedListQuery, Types.EmbedListQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedListQuery, Types.EmbedListQueryVariables>(EmbedListDocument, baseOptions);
}
export function useEmbedListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedListQuery, Types.EmbedListQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedListQuery, Types.EmbedListQueryVariables>(EmbedListDocument, baseOptions);
}
export type EmbedListQueryHookResult = ReturnType<typeof useEmbedListQuery>;
export type EmbedListLazyQueryHookResult = ReturnType<typeof useEmbedListLazyQuery>;
export type EmbedListQueryResult = Apollo.QueryResult<Types.EmbedListQuery, Types.EmbedListQueryVariables>;
export const UpdateEmbedListDocument = gql`
  mutation updateEmbedList($input: EmbedListInput!) {
    updateEmbedList(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedListSettings
        }
        createdAt
      }
    }
  }
  ${EmbedListSettingsFragmentDoc}
`;
export type UpdateEmbedListMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedListMutation,
  Types.UpdateEmbedListMutationVariables
>;

/**
 * __useUpdateEmbedListMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedListMutation, { data, loading, error }] = useUpdateEmbedListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedListMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedListMutation, Types.UpdateEmbedListMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedListMutation, Types.UpdateEmbedListMutationVariables>(
    UpdateEmbedListDocument,
    baseOptions
  );
}
export type UpdateEmbedListMutationHookResult = ReturnType<typeof useUpdateEmbedListMutation>;
export type UpdateEmbedListMutationResult = Apollo.MutationResult<Types.UpdateEmbedListMutation>;
export type UpdateEmbedListMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedListMutation,
  Types.UpdateEmbedListMutationVariables
>;
export const EmbedWallDocument = gql`
  query embedWall($id: ID!, $version: String, $create: Boolean) {
    embedWall(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedWallSettings
        }
        createdAt
      }
    }
  }
  ${EmbedWallSettingsFragmentDoc}
`;

/**
 * __useEmbedWallQuery__
 *
 * To run a query within a React component, call `useEmbedWallQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedWallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedWallQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedWallQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedWallQuery, Types.EmbedWallQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedWallQuery, Types.EmbedWallQueryVariables>(EmbedWallDocument, baseOptions);
}
export function useEmbedWallLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedWallQuery, Types.EmbedWallQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedWallQuery, Types.EmbedWallQueryVariables>(EmbedWallDocument, baseOptions);
}
export type EmbedWallQueryHookResult = ReturnType<typeof useEmbedWallQuery>;
export type EmbedWallLazyQueryHookResult = ReturnType<typeof useEmbedWallLazyQuery>;
export type EmbedWallQueryResult = Apollo.QueryResult<Types.EmbedWallQuery, Types.EmbedWallQueryVariables>;
export const UpdateEmbedWallDocument = gql`
  mutation updateEmbedWall($input: EmbedWallInput!) {
    updateEmbedWall(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedWallSettings
        }
        createdAt
      }
    }
  }
  ${EmbedWallSettingsFragmentDoc}
`;
export type UpdateEmbedWallMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedWallMutation,
  Types.UpdateEmbedWallMutationVariables
>;

/**
 * __useUpdateEmbedWallMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedWallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedWallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedWallMutation, { data, loading, error }] = useUpdateEmbedWallMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedWallMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedWallMutation, Types.UpdateEmbedWallMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedWallMutation, Types.UpdateEmbedWallMutationVariables>(
    UpdateEmbedWallDocument,
    baseOptions
  );
}
export type UpdateEmbedWallMutationHookResult = ReturnType<typeof useUpdateEmbedWallMutation>;
export type UpdateEmbedWallMutationResult = Apollo.MutationResult<Types.UpdateEmbedWallMutation>;
export type UpdateEmbedWallMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedWallMutation,
  Types.UpdateEmbedWallMutationVariables
>;
export const EmbedTickerDocument = gql`
  query embedTicker($id: ID!, $version: String, $create: Boolean) {
    embedTicker(id: $id, version: $version, create: $create) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedTickerSettings
        }
        createdAt
      }
    }
  }
  ${EmbedTickerSettingsFragmentDoc}
`;

/**
 * __useEmbedTickerQuery__
 *
 * To run a query within a React component, call `useEmbedTickerQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedTickerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedTickerQuery({
 *   variables: {
 *      id: // value for 'id'
 *      version: // value for 'version'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useEmbedTickerQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedTickerQuery, Types.EmbedTickerQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedTickerQuery, Types.EmbedTickerQueryVariables>(EmbedTickerDocument, baseOptions);
}
export function useEmbedTickerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedTickerQuery, Types.EmbedTickerQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedTickerQuery, Types.EmbedTickerQueryVariables>(EmbedTickerDocument, baseOptions);
}
export type EmbedTickerQueryHookResult = ReturnType<typeof useEmbedTickerQuery>;
export type EmbedTickerLazyQueryHookResult = ReturnType<typeof useEmbedTickerLazyQuery>;
export type EmbedTickerQueryResult = Apollo.QueryResult<Types.EmbedTickerQuery, Types.EmbedTickerQueryVariables>;
export const UpdateEmbedTickerDocument = gql`
  mutation updateEmbedTicker($input: EmbedTickerInput!) {
    updateEmbedTicker(input: $input) {
      id
      status
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
        }
      }
      embed {
        id
        settings {
          ...EmbedTickerSettings
        }
        createdAt
      }
    }
  }
  ${EmbedTickerSettingsFragmentDoc}
`;
export type UpdateEmbedTickerMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedTickerMutation,
  Types.UpdateEmbedTickerMutationVariables
>;

/**
 * __useUpdateEmbedTickerMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedTickerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedTickerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedTickerMutation, { data, loading, error }] = useUpdateEmbedTickerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedTickerMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedTickerMutation, Types.UpdateEmbedTickerMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedTickerMutation, Types.UpdateEmbedTickerMutationVariables>(
    UpdateEmbedTickerDocument,
    baseOptions
  );
}
export type UpdateEmbedTickerMutationHookResult = ReturnType<typeof useUpdateEmbedTickerMutation>;
export type UpdateEmbedTickerMutationResult = Apollo.MutationResult<Types.UpdateEmbedTickerMutation>;
export type UpdateEmbedTickerMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedTickerMutation,
  Types.UpdateEmbedTickerMutationVariables
>;
export const EmbedTemplatesDocument = gql`
  query embedTemplates($type: String!) {
    embedTemplates(type: $type) {
      ...EmbedTemplate
    }
  }
  ${EmbedTemplateFragmentDoc}
`;

/**
 * __useEmbedTemplatesQuery__
 *
 * To run a query within a React component, call `useEmbedTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedTemplatesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useEmbedTemplatesQuery(
  baseOptions: Apollo.QueryHookOptions<Types.EmbedTemplatesQuery, Types.EmbedTemplatesQueryVariables>
) {
  return Apollo.useQuery<Types.EmbedTemplatesQuery, Types.EmbedTemplatesQueryVariables>(
    EmbedTemplatesDocument,
    baseOptions
  );
}
export function useEmbedTemplatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.EmbedTemplatesQuery, Types.EmbedTemplatesQueryVariables>
) {
  return Apollo.useLazyQuery<Types.EmbedTemplatesQuery, Types.EmbedTemplatesQueryVariables>(
    EmbedTemplatesDocument,
    baseOptions
  );
}
export type EmbedTemplatesQueryHookResult = ReturnType<typeof useEmbedTemplatesQuery>;
export type EmbedTemplatesLazyQueryHookResult = ReturnType<typeof useEmbedTemplatesLazyQuery>;
export type EmbedTemplatesQueryResult = Apollo.QueryResult<
  Types.EmbedTemplatesQuery,
  Types.EmbedTemplatesQueryVariables
>;
export const UpdateEmbedDocument = gql`
  mutation updateEmbed($input: EmbedInput!) {
    updateEmbed(input: $input) {
      ...Embed
    }
  }
  ${EmbedFragmentDoc}
`;
export type UpdateEmbedMutationFn = Apollo.MutationFunction<
  Types.UpdateEmbedMutation,
  Types.UpdateEmbedMutationVariables
>;

/**
 * __useUpdateEmbedMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedMutation, { data, loading, error }] = useUpdateEmbedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmbedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateEmbedMutation, Types.UpdateEmbedMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateEmbedMutation, Types.UpdateEmbedMutationVariables>(
    UpdateEmbedDocument,
    baseOptions
  );
}
export type UpdateEmbedMutationHookResult = ReturnType<typeof useUpdateEmbedMutation>;
export type UpdateEmbedMutationResult = Apollo.MutationResult<Types.UpdateEmbedMutation>;
export type UpdateEmbedMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEmbedMutation,
  Types.UpdateEmbedMutationVariables
>;
export const AttachFeedDocument = gql`
  mutation attachFeed($feedId: ID!) {
    attachFeed(feedId: $feedId) {
      id
    }
  }
`;
export type AttachFeedMutationFn = Apollo.MutationFunction<Types.AttachFeedMutation, Types.AttachFeedMutationVariables>;

/**
 * __useAttachFeedMutation__
 *
 * To run a mutation, you first call `useAttachFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAttachFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [attachFeedMutation, { data, loading, error }] = useAttachFeedMutation({
 *   variables: {
 *      feedId: // value for 'feedId'
 *   },
 * });
 */
export function useAttachFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AttachFeedMutation, Types.AttachFeedMutationVariables>
) {
  return Apollo.useMutation<Types.AttachFeedMutation, Types.AttachFeedMutationVariables>(
    AttachFeedDocument,
    baseOptions
  );
}
export type AttachFeedMutationHookResult = ReturnType<typeof useAttachFeedMutation>;
export type AttachFeedMutationResult = Apollo.MutationResult<Types.AttachFeedMutation>;
export type AttachFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.AttachFeedMutation,
  Types.AttachFeedMutationVariables
>;
export const DeleteFeedDocument = gql`
  mutation deleteFeed($id: ID!) {
    deleteFeed(id: $id)
  }
`;
export type DeleteFeedMutationFn = Apollo.MutationFunction<Types.DeleteFeedMutation, Types.DeleteFeedMutationVariables>;

/**
 * __useDeleteFeedMutation__
 *
 * To run a mutation, you first call `useDeleteFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFeedMutation, { data, loading, error }] = useDeleteFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteFeedMutation, Types.DeleteFeedMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteFeedMutation, Types.DeleteFeedMutationVariables>(
    DeleteFeedDocument,
    baseOptions
  );
}
export type DeleteFeedMutationHookResult = ReturnType<typeof useDeleteFeedMutation>;
export type DeleteFeedMutationResult = Apollo.MutationResult<Types.DeleteFeedMutation>;
export type DeleteFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteFeedMutation,
  Types.DeleteFeedMutationVariables
>;
export const UpdateFeedDocument = gql`
  mutation updateFeed($id: ID!, $title: String, $description: String, $tags: [ID!], $enableGlobalSettings: Boolean) {
    updateFeed(
      id: $id
      title: $title
      description: $description
      tags: $tags
      enableGlobalSettings: $enableGlobalSettings
    ) {
      id
      title
      description
      imageUrl
      siteUrl
      siteName
      enableGlobalSettings
      settings {
        id
        imageInEnclosure
        imageInDescription
        youtubeVideoIframe
        youtubeDescription
        instagramVideos
        twitterRemoveUrlFromTitle
        twitterEmbeds
        twitterPrefixWithUsername
        includeIFramesWhenPossible
        imageInMedia
        postLimit
        onlyAscii
      }
      tags {
        id
        tagId
        tag {
          id
          label
        }
      }
    }
  }
`;
export type UpdateFeedMutationFn = Apollo.MutationFunction<Types.UpdateFeedMutation, Types.UpdateFeedMutationVariables>;

/**
 * __useUpdateFeedMutation__
 *
 * To run a mutation, you first call `useUpdateFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeedMutation, { data, loading, error }] = useUpdateFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      tags: // value for 'tags'
 *      enableGlobalSettings: // value for 'enableGlobalSettings'
 *   },
 * });
 */
export function useUpdateFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateFeedMutation, Types.UpdateFeedMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateFeedMutation, Types.UpdateFeedMutationVariables>(
    UpdateFeedDocument,
    baseOptions
  );
}
export type UpdateFeedMutationHookResult = ReturnType<typeof useUpdateFeedMutation>;
export type UpdateFeedMutationResult = Apollo.MutationResult<Types.UpdateFeedMutation>;
export type UpdateFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateFeedMutation,
  Types.UpdateFeedMutationVariables
>;
export const FeedDocument = gql`
  query feed($id: ID!, $after: Int, $isPreview: Boolean) {
    feed(id: $id, after: $after, isPreview: $isPreview) {
      ...Feed
    }
  }
  ${FeedFragmentDoc}
`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      isPreview: // value for 'isPreview'
 *   },
 * });
 */
export function useFeedQuery(baseOptions: Apollo.QueryHookOptions<Types.FeedQuery, Types.FeedQueryVariables>) {
  return Apollo.useQuery<Types.FeedQuery, Types.FeedQueryVariables>(FeedDocument, baseOptions);
}
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.FeedQuery, Types.FeedQueryVariables>) {
  return Apollo.useLazyQuery<Types.FeedQuery, Types.FeedQueryVariables>(FeedDocument, baseOptions);
}
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<Types.FeedQuery, Types.FeedQueryVariables>;
export const MyFeedsDocument = gql`
  query myFeeds($offset: Int, $limit: Int, $order: OrderEnum, $orderBy: FeedOrderByEnum) {
    myFeeds(offset: $offset, limit: $limit, order: $order, orderBy: $orderBy) @connection(key: "myFeeds", filter: []) {
      rows {
        ...FeedRow
      }
      count
    }
  }
  ${FeedRowFragmentDoc}
`;

/**
 * __useMyFeedsQuery__
 *
 * To run a query within a React component, call `useMyFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFeedsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMyFeedsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.MyFeedsQuery, Types.MyFeedsQueryVariables>
) {
  return Apollo.useQuery<Types.MyFeedsQuery, Types.MyFeedsQueryVariables>(MyFeedsDocument, baseOptions);
}
export function useMyFeedsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MyFeedsQuery, Types.MyFeedsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.MyFeedsQuery, Types.MyFeedsQueryVariables>(MyFeedsDocument, baseOptions);
}
export type MyFeedsQueryHookResult = ReturnType<typeof useMyFeedsQuery>;
export type MyFeedsLazyQueryHookResult = ReturnType<typeof useMyFeedsLazyQuery>;
export type MyFeedsQueryResult = Apollo.QueryResult<Types.MyFeedsQuery, Types.MyFeedsQueryVariables>;
export const AddFilterRuleDocument = gql`
  mutation addFilterRule($filterId: ID!, $body: FilterRuleInput!) {
    addFilterRule(filterId: $filterId, body: $body) {
      ...Filter
    }
  }
  ${FilterFragmentDoc}
`;
export type AddFilterRuleMutationFn = Apollo.MutationFunction<
  Types.AddFilterRuleMutation,
  Types.AddFilterRuleMutationVariables
>;

/**
 * __useAddFilterRuleMutation__
 *
 * To run a mutation, you first call `useAddFilterRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFilterRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFilterRuleMutation, { data, loading, error }] = useAddFilterRuleMutation({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddFilterRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AddFilterRuleMutation, Types.AddFilterRuleMutationVariables>
) {
  return Apollo.useMutation<Types.AddFilterRuleMutation, Types.AddFilterRuleMutationVariables>(
    AddFilterRuleDocument,
    baseOptions
  );
}
export type AddFilterRuleMutationHookResult = ReturnType<typeof useAddFilterRuleMutation>;
export type AddFilterRuleMutationResult = Apollo.MutationResult<Types.AddFilterRuleMutation>;
export type AddFilterRuleMutationOptions = Apollo.BaseMutationOptions<
  Types.AddFilterRuleMutation,
  Types.AddFilterRuleMutationVariables
>;
export const RemoveFilterRuleDocument = gql`
  mutation removeFilterRule($id: ID!, $filterId: ID!) {
    removeFilterRule(id: $id, filterId: $filterId) {
      ...Filter
    }
  }
  ${FilterFragmentDoc}
`;
export type RemoveFilterRuleMutationFn = Apollo.MutationFunction<
  Types.RemoveFilterRuleMutation,
  Types.RemoveFilterRuleMutationVariables
>;

/**
 * __useRemoveFilterRuleMutation__
 *
 * To run a mutation, you first call `useRemoveFilterRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFilterRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFilterRuleMutation, { data, loading, error }] = useRemoveFilterRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      filterId: // value for 'filterId'
 *   },
 * });
 */
export function useRemoveFilterRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RemoveFilterRuleMutation, Types.RemoveFilterRuleMutationVariables>
) {
  return Apollo.useMutation<Types.RemoveFilterRuleMutation, Types.RemoveFilterRuleMutationVariables>(
    RemoveFilterRuleDocument,
    baseOptions
  );
}
export type RemoveFilterRuleMutationHookResult = ReturnType<typeof useRemoveFilterRuleMutation>;
export type RemoveFilterRuleMutationResult = Apollo.MutationResult<Types.RemoveFilterRuleMutation>;
export type RemoveFilterRuleMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveFilterRuleMutation,
  Types.RemoveFilterRuleMutationVariables
>;
export const UpdateFilterDocument = gql`
  mutation updateFilter($filter: FilterInput) {
    updateFilter(filter: $filter) {
      ...Filter
    }
  }
  ${FilterFragmentDoc}
`;
export type UpdateFilterMutationFn = Apollo.MutationFunction<
  Types.UpdateFilterMutation,
  Types.UpdateFilterMutationVariables
>;

/**
 * __useUpdateFilterMutation__
 *
 * To run a mutation, you first call `useUpdateFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFilterMutation, { data, loading, error }] = useUpdateFilterMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdateFilterMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateFilterMutation, Types.UpdateFilterMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateFilterMutation, Types.UpdateFilterMutationVariables>(
    UpdateFilterDocument,
    baseOptions
  );
}
export type UpdateFilterMutationHookResult = ReturnType<typeof useUpdateFilterMutation>;
export type UpdateFilterMutationResult = Apollo.MutationResult<Types.UpdateFilterMutation>;
export type UpdateFilterMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateFilterMutation,
  Types.UpdateFilterMutationVariables
>;
export const UpdateFilterRuleDocument = gql`
  mutation updateFilterRule($id: ID!, $filterId: ID!, $body: FilterRuleInput!) {
    updateFilterRule(id: $id, filterId: $filterId, body: $body) {
      ...Filter
    }
  }
  ${FilterFragmentDoc}
`;
export type UpdateFilterRuleMutationFn = Apollo.MutationFunction<
  Types.UpdateFilterRuleMutation,
  Types.UpdateFilterRuleMutationVariables
>;

/**
 * __useUpdateFilterRuleMutation__
 *
 * To run a mutation, you first call `useUpdateFilterRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFilterRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFilterRuleMutation, { data, loading, error }] = useUpdateFilterRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      filterId: // value for 'filterId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateFilterRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateFilterRuleMutation, Types.UpdateFilterRuleMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateFilterRuleMutation, Types.UpdateFilterRuleMutationVariables>(
    UpdateFilterRuleDocument,
    baseOptions
  );
}
export type UpdateFilterRuleMutationHookResult = ReturnType<typeof useUpdateFilterRuleMutation>;
export type UpdateFilterRuleMutationResult = Apollo.MutationResult<Types.UpdateFilterRuleMutation>;
export type UpdateFilterRuleMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateFilterRuleMutation,
  Types.UpdateFilterRuleMutationVariables
>;
export const ModerationDocument = gql`
  query moderation($id: ID!) {
    moderation(id: $id) {
      ...Moderation
    }
  }
  ${ModerationFragmentDoc}
`;

/**
 * __useModerationQuery__
 *
 * To run a query within a React component, call `useModerationQuery` and pass it any options that fit your needs.
 * When your component renders, `useModerationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModerationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useModerationQuery(
  baseOptions: Apollo.QueryHookOptions<Types.ModerationQuery, Types.ModerationQueryVariables>
) {
  return Apollo.useQuery<Types.ModerationQuery, Types.ModerationQueryVariables>(ModerationDocument, baseOptions);
}
export function useModerationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.ModerationQuery, Types.ModerationQueryVariables>
) {
  return Apollo.useLazyQuery<Types.ModerationQuery, Types.ModerationQueryVariables>(ModerationDocument, baseOptions);
}
export type ModerationQueryHookResult = ReturnType<typeof useModerationQuery>;
export type ModerationLazyQueryHookResult = ReturnType<typeof useModerationLazyQuery>;
export type ModerationQueryResult = Apollo.QueryResult<Types.ModerationQuery, Types.ModerationQueryVariables>;
export const ClearKeyValuesDocument = gql`
  mutation clearKeyValues {
    admin {
      clearKeyValues
    }
  }
`;
export type ClearKeyValuesMutationFn = Apollo.MutationFunction<
  Types.ClearKeyValuesMutation,
  Types.ClearKeyValuesMutationVariables
>;

/**
 * __useClearKeyValuesMutation__
 *
 * To run a mutation, you first call `useClearKeyValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearKeyValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearKeyValuesMutation, { data, loading, error }] = useClearKeyValuesMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearKeyValuesMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ClearKeyValuesMutation, Types.ClearKeyValuesMutationVariables>
) {
  return Apollo.useMutation<Types.ClearKeyValuesMutation, Types.ClearKeyValuesMutationVariables>(
    ClearKeyValuesDocument,
    baseOptions
  );
}
export type ClearKeyValuesMutationHookResult = ReturnType<typeof useClearKeyValuesMutation>;
export type ClearKeyValuesMutationResult = Apollo.MutationResult<Types.ClearKeyValuesMutation>;
export type ClearKeyValuesMutationOptions = Apollo.BaseMutationOptions<
  Types.ClearKeyValuesMutation,
  Types.ClearKeyValuesMutationVariables
>;
export const CreateKeyValueDocument = gql`
  mutation createKeyValue($key: ID!, $value: JSON!) {
    admin {
      createKeyValue(key: $key, value: $value) {
        ...KeyValue
      }
    }
  }
  ${KeyValueFragmentDoc}
`;
export type CreateKeyValueMutationFn = Apollo.MutationFunction<
  Types.CreateKeyValueMutation,
  Types.CreateKeyValueMutationVariables
>;

/**
 * __useCreateKeyValueMutation__
 *
 * To run a mutation, you first call `useCreateKeyValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKeyValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKeyValueMutation, { data, loading, error }] = useCreateKeyValueMutation({
 *   variables: {
 *      key: // value for 'key'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateKeyValueMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreateKeyValueMutation, Types.CreateKeyValueMutationVariables>
) {
  return Apollo.useMutation<Types.CreateKeyValueMutation, Types.CreateKeyValueMutationVariables>(
    CreateKeyValueDocument,
    baseOptions
  );
}
export type CreateKeyValueMutationHookResult = ReturnType<typeof useCreateKeyValueMutation>;
export type CreateKeyValueMutationResult = Apollo.MutationResult<Types.CreateKeyValueMutation>;
export type CreateKeyValueMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateKeyValueMutation,
  Types.CreateKeyValueMutationVariables
>;
export const DeleteKeyValueDocument = gql`
  mutation deleteKeyValue($key: ID!) {
    admin {
      deleteKeyValue(key: $key)
    }
  }
`;
export type DeleteKeyValueMutationFn = Apollo.MutationFunction<
  Types.DeleteKeyValueMutation,
  Types.DeleteKeyValueMutationVariables
>;

/**
 * __useDeleteKeyValueMutation__
 *
 * To run a mutation, you first call `useDeleteKeyValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKeyValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKeyValueMutation, { data, loading, error }] = useDeleteKeyValueMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useDeleteKeyValueMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteKeyValueMutation, Types.DeleteKeyValueMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteKeyValueMutation, Types.DeleteKeyValueMutationVariables>(
    DeleteKeyValueDocument,
    baseOptions
  );
}
export type DeleteKeyValueMutationHookResult = ReturnType<typeof useDeleteKeyValueMutation>;
export type DeleteKeyValueMutationResult = Apollo.MutationResult<Types.DeleteKeyValueMutation>;
export type DeleteKeyValueMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteKeyValueMutation,
  Types.DeleteKeyValueMutationVariables
>;
export const UpdateKeyValueDocument = gql`
  mutation updateKeyValue($key: ID!, $value: JSON!) {
    admin {
      updateKeyValue(key: $key, value: $value) {
        ...KeyValue
      }
    }
  }
  ${KeyValueFragmentDoc}
`;
export type UpdateKeyValueMutationFn = Apollo.MutationFunction<
  Types.UpdateKeyValueMutation,
  Types.UpdateKeyValueMutationVariables
>;

/**
 * __useUpdateKeyValueMutation__
 *
 * To run a mutation, you first call `useUpdateKeyValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeyValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeyValueMutation, { data, loading, error }] = useUpdateKeyValueMutation({
 *   variables: {
 *      key: // value for 'key'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useUpdateKeyValueMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateKeyValueMutation, Types.UpdateKeyValueMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateKeyValueMutation, Types.UpdateKeyValueMutationVariables>(
    UpdateKeyValueDocument,
    baseOptions
  );
}
export type UpdateKeyValueMutationHookResult = ReturnType<typeof useUpdateKeyValueMutation>;
export type UpdateKeyValueMutationResult = Apollo.MutationResult<Types.UpdateKeyValueMutation>;
export type UpdateKeyValueMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateKeyValueMutation,
  Types.UpdateKeyValueMutationVariables
>;
export const KeyValuesDocument = gql`
  query keyValues {
    admin {
      keyValues {
        ...KeyValue
      }
    }
  }
  ${KeyValueFragmentDoc}
`;

/**
 * __useKeyValuesQuery__
 *
 * To run a query within a React component, call `useKeyValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeyValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeyValuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useKeyValuesQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.KeyValuesQuery, Types.KeyValuesQueryVariables>
) {
  return Apollo.useQuery<Types.KeyValuesQuery, Types.KeyValuesQueryVariables>(KeyValuesDocument, baseOptions);
}
export function useKeyValuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.KeyValuesQuery, Types.KeyValuesQueryVariables>
) {
  return Apollo.useLazyQuery<Types.KeyValuesQuery, Types.KeyValuesQueryVariables>(KeyValuesDocument, baseOptions);
}
export type KeyValuesQueryHookResult = ReturnType<typeof useKeyValuesQuery>;
export type KeyValuesLazyQueryHookResult = ReturnType<typeof useKeyValuesLazyQuery>;
export type KeyValuesQueryResult = Apollo.QueryResult<Types.KeyValuesQuery, Types.KeyValuesQueryVariables>;
export const CreatePlanDocument = gql`
  mutation createPlan($params: CreatePlanInput!) {
    admin {
      createPlan(params: $params) {
        ...AdminPlan
      }
    }
  }
  ${AdminPlanFragmentDoc}
`;
export type CreatePlanMutationFn = Apollo.MutationFunction<Types.CreatePlanMutation, Types.CreatePlanMutationVariables>;

/**
 * __useCreatePlanMutation__
 *
 * To run a mutation, you first call `useCreatePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlanMutation, { data, loading, error }] = useCreatePlanMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreatePlanMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreatePlanMutation, Types.CreatePlanMutationVariables>
) {
  return Apollo.useMutation<Types.CreatePlanMutation, Types.CreatePlanMutationVariables>(
    CreatePlanDocument,
    baseOptions
  );
}
export type CreatePlanMutationHookResult = ReturnType<typeof useCreatePlanMutation>;
export type CreatePlanMutationResult = Apollo.MutationResult<Types.CreatePlanMutation>;
export type CreatePlanMutationOptions = Apollo.BaseMutationOptions<
  Types.CreatePlanMutation,
  Types.CreatePlanMutationVariables
>;
export const PlanDocument = gql`
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

/**
 * __usePlanQuery__
 *
 * To run a query within a React component, call `usePlanQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlanQuery(baseOptions: Apollo.QueryHookOptions<Types.PlanQuery, Types.PlanQueryVariables>) {
  return Apollo.useQuery<Types.PlanQuery, Types.PlanQueryVariables>(PlanDocument, baseOptions);
}
export function usePlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.PlanQuery, Types.PlanQueryVariables>) {
  return Apollo.useLazyQuery<Types.PlanQuery, Types.PlanQueryVariables>(PlanDocument, baseOptions);
}
export type PlanQueryHookResult = ReturnType<typeof usePlanQuery>;
export type PlanLazyQueryHookResult = ReturnType<typeof usePlanLazyQuery>;
export type PlanQueryResult = Apollo.QueryResult<Types.PlanQuery, Types.PlanQueryVariables>;
export const PlansDocument = gql`
  query plans($page: Int, $rowsPerPage: Int, $search: String, $order: OrderEnum, $orderBy: String) {
    admin {
      plans(page: $page, rowsPerPage: $rowsPerPage, search: $search, order: $order, orderBy: $orderBy) {
        rows {
          id
          name
          price
          isPrivate
          isCustom
        }
        count
      }
    }
  }
`;

/**
 * __usePlansQuery__
 *
 * To run a query within a React component, call `usePlansQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlansQuery({
 *   variables: {
 *      page: // value for 'page'
 *      rowsPerPage: // value for 'rowsPerPage'
 *      search: // value for 'search'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePlansQuery(baseOptions?: Apollo.QueryHookOptions<Types.PlansQuery, Types.PlansQueryVariables>) {
  return Apollo.useQuery<Types.PlansQuery, Types.PlansQueryVariables>(PlansDocument, baseOptions);
}
export function usePlansLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.PlansQuery, Types.PlansQueryVariables>
) {
  return Apollo.useLazyQuery<Types.PlansQuery, Types.PlansQueryVariables>(PlansDocument, baseOptions);
}
export type PlansQueryHookResult = ReturnType<typeof usePlansQuery>;
export type PlansLazyQueryHookResult = ReturnType<typeof usePlansLazyQuery>;
export type PlansQueryResult = Apollo.QueryResult<Types.PlansQuery, Types.PlansQueryVariables>;
export const ActiveTemplateDocument = gql`
  mutation activeTemplate($id: ID!, $active: Boolean!) {
    admin {
      activeTemplate(id: $id, active: $active) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;
export type ActiveTemplateMutationFn = Apollo.MutationFunction<
  Types.ActiveTemplateMutation,
  Types.ActiveTemplateMutationVariables
>;

/**
 * __useActiveTemplateMutation__
 *
 * To run a mutation, you first call `useActiveTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeTemplateMutation, { data, loading, error }] = useActiveTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useActiveTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ActiveTemplateMutation, Types.ActiveTemplateMutationVariables>
) {
  return Apollo.useMutation<Types.ActiveTemplateMutation, Types.ActiveTemplateMutationVariables>(
    ActiveTemplateDocument,
    baseOptions
  );
}
export type ActiveTemplateMutationHookResult = ReturnType<typeof useActiveTemplateMutation>;
export type ActiveTemplateMutationResult = Apollo.MutationResult<Types.ActiveTemplateMutation>;
export type ActiveTemplateMutationOptions = Apollo.BaseMutationOptions<
  Types.ActiveTemplateMutation,
  Types.ActiveTemplateMutationVariables
>;
export const CreateTemplateDocument = gql`
  mutation createTemplate($title: String!, $type: String!, $feedId: ID!) {
    admin {
      createTemplate(title: $title, type: $type, feedId: $feedId) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;
export type CreateTemplateMutationFn = Apollo.MutationFunction<
  Types.CreateTemplateMutation,
  Types.CreateTemplateMutationVariables
>;

/**
 * __useCreateTemplateMutation__
 *
 * To run a mutation, you first call `useCreateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTemplateMutation, { data, loading, error }] = useCreateTemplateMutation({
 *   variables: {
 *      title: // value for 'title'
 *      type: // value for 'type'
 *      feedId: // value for 'feedId'
 *   },
 * });
 */
export function useCreateTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreateTemplateMutation, Types.CreateTemplateMutationVariables>
) {
  return Apollo.useMutation<Types.CreateTemplateMutation, Types.CreateTemplateMutationVariables>(
    CreateTemplateDocument,
    baseOptions
  );
}
export type CreateTemplateMutationHookResult = ReturnType<typeof useCreateTemplateMutation>;
export type CreateTemplateMutationResult = Apollo.MutationResult<Types.CreateTemplateMutation>;
export type CreateTemplateMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateTemplateMutation,
  Types.CreateTemplateMutationVariables
>;
export const DeleteTemplateDocument = gql`
  mutation deleteTemplate($id: ID!, $deleted: Boolean!) {
    admin {
      deleteTemplate(id: $id, deleted: $deleted) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;
export type DeleteTemplateMutationFn = Apollo.MutationFunction<
  Types.DeleteTemplateMutation,
  Types.DeleteTemplateMutationVariables
>;

/**
 * __useDeleteTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemplateMutation, { data, loading, error }] = useDeleteTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      deleted: // value for 'deleted'
 *   },
 * });
 */
export function useDeleteTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteTemplateMutation, Types.DeleteTemplateMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteTemplateMutation, Types.DeleteTemplateMutationVariables>(
    DeleteTemplateDocument,
    baseOptions
  );
}
export type DeleteTemplateMutationHookResult = ReturnType<typeof useDeleteTemplateMutation>;
export type DeleteTemplateMutationResult = Apollo.MutationResult<Types.DeleteTemplateMutation>;
export type DeleteTemplateMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteTemplateMutation,
  Types.DeleteTemplateMutationVariables
>;
export const ReorderTemplateDocument = gql`
  mutation reorderTemplate($id: ID!, $step: Int!) {
    admin {
      reorderTemplate(id: $id, step: $step) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;
export type ReorderTemplateMutationFn = Apollo.MutationFunction<
  Types.ReorderTemplateMutation,
  Types.ReorderTemplateMutationVariables
>;

/**
 * __useReorderTemplateMutation__
 *
 * To run a mutation, you first call `useReorderTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderTemplateMutation, { data, loading, error }] = useReorderTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      step: // value for 'step'
 *   },
 * });
 */
export function useReorderTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ReorderTemplateMutation, Types.ReorderTemplateMutationVariables>
) {
  return Apollo.useMutation<Types.ReorderTemplateMutation, Types.ReorderTemplateMutationVariables>(
    ReorderTemplateDocument,
    baseOptions
  );
}
export type ReorderTemplateMutationHookResult = ReturnType<typeof useReorderTemplateMutation>;
export type ReorderTemplateMutationResult = Apollo.MutationResult<Types.ReorderTemplateMutation>;
export type ReorderTemplateMutationOptions = Apollo.BaseMutationOptions<
  Types.ReorderTemplateMutation,
  Types.ReorderTemplateMutationVariables
>;
export const UpdateTemplateDocument = gql`
  mutation updateTemplate($id: ID!, $settings: JSON, $title: String, $feedId: ID) {
    admin {
      updateTemplate(id: $id, settings: $settings, title: $title, feedId: $feedId) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;
export type UpdateTemplateMutationFn = Apollo.MutationFunction<
  Types.UpdateTemplateMutation,
  Types.UpdateTemplateMutationVariables
>;

/**
 * __useUpdateTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTemplateMutation, { data, loading, error }] = useUpdateTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      settings: // value for 'settings'
 *      title: // value for 'title'
 *      feedId: // value for 'feedId'
 *   },
 * });
 */
export function useUpdateTemplateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables>(
    UpdateTemplateDocument,
    baseOptions
  );
}
export type UpdateTemplateMutationHookResult = ReturnType<typeof useUpdateTemplateMutation>;
export type UpdateTemplateMutationResult = Apollo.MutationResult<Types.UpdateTemplateMutation>;
export type UpdateTemplateMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTemplateMutation,
  Types.UpdateTemplateMutationVariables
>;
export const TemplatesDocument = gql`
  query templates($type: String!) {
    admin {
      templates(type: $type) {
        ...EmbedTemplate
      }
    }
  }
  ${EmbedTemplateFragmentDoc}
`;

/**
 * __useTemplatesQuery__
 *
 * To run a query within a React component, call `useTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useTemplatesQuery(
  baseOptions: Apollo.QueryHookOptions<Types.TemplatesQuery, Types.TemplatesQueryVariables>
) {
  return Apollo.useQuery<Types.TemplatesQuery, Types.TemplatesQueryVariables>(TemplatesDocument, baseOptions);
}
export function useTemplatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TemplatesQuery, Types.TemplatesQueryVariables>
) {
  return Apollo.useLazyQuery<Types.TemplatesQuery, Types.TemplatesQueryVariables>(TemplatesDocument, baseOptions);
}
export type TemplatesQueryHookResult = ReturnType<typeof useTemplatesQuery>;
export type TemplatesLazyQueryHookResult = ReturnType<typeof useTemplatesLazyQuery>;
export type TemplatesQueryResult = Apollo.QueryResult<Types.TemplatesQuery, Types.TemplatesQueryVariables>;
export const AddSpamEmailDocument = gql`
  mutation AddSpamEmail($emails: [String]) {
    admin {
      addSpamEmail(emails: $emails)
    }
  }
`;
export type AddSpamEmailMutationFn = Apollo.MutationFunction<
  Types.AddSpamEmailMutation,
  Types.AddSpamEmailMutationVariables
>;

/**
 * __useAddSpamEmailMutation__
 *
 * To run a mutation, you first call `useAddSpamEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSpamEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSpamEmailMutation, { data, loading, error }] = useAddSpamEmailMutation({
 *   variables: {
 *      emails: // value for 'emails'
 *   },
 * });
 */
export function useAddSpamEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AddSpamEmailMutation, Types.AddSpamEmailMutationVariables>
) {
  return Apollo.useMutation<Types.AddSpamEmailMutation, Types.AddSpamEmailMutationVariables>(
    AddSpamEmailDocument,
    baseOptions
  );
}
export type AddSpamEmailMutationHookResult = ReturnType<typeof useAddSpamEmailMutation>;
export type AddSpamEmailMutationResult = Apollo.MutationResult<Types.AddSpamEmailMutation>;
export type AddSpamEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.AddSpamEmailMutation,
  Types.AddSpamEmailMutationVariables
>;
export const AllUserFeedsDocument = gql`
  query allUserFeeds($id: String!) {
    admin {
      allUserFeeds(id: $id) {
        id
        linkToFeed
        title
        disabled
        providerId
        lastRefreshed
        lastNewPosts
        deleted
      }
    }
  }
`;

/**
 * __useAllUserFeedsQuery__
 *
 * To run a query within a React component, call `useAllUserFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserFeedsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllUserFeedsQuery(
  baseOptions: Apollo.QueryHookOptions<Types.AllUserFeedsQuery, Types.AllUserFeedsQueryVariables>
) {
  return Apollo.useQuery<Types.AllUserFeedsQuery, Types.AllUserFeedsQueryVariables>(AllUserFeedsDocument, baseOptions);
}
export function useAllUserFeedsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.AllUserFeedsQuery, Types.AllUserFeedsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.AllUserFeedsQuery, Types.AllUserFeedsQueryVariables>(
    AllUserFeedsDocument,
    baseOptions
  );
}
export type AllUserFeedsQueryHookResult = ReturnType<typeof useAllUserFeedsQuery>;
export type AllUserFeedsLazyQueryHookResult = ReturnType<typeof useAllUserFeedsLazyQuery>;
export type AllUserFeedsQueryResult = Apollo.QueryResult<Types.AllUserFeedsQuery, Types.AllUserFeedsQueryVariables>;
export const BlockUserDocument = gql`
  mutation blockUser($ids: [ID]!) {
    admin {
      blockUser(ids: $ids)
    }
  }
`;
export type BlockUserMutationFn = Apollo.MutationFunction<Types.BlockUserMutation, Types.BlockUserMutationVariables>;

/**
 * __useBlockUserMutation__
 *
 * To run a mutation, you first call `useBlockUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockUserMutation, { data, loading, error }] = useBlockUserMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useBlockUserMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.BlockUserMutation, Types.BlockUserMutationVariables>
) {
  return Apollo.useMutation<Types.BlockUserMutation, Types.BlockUserMutationVariables>(BlockUserDocument, baseOptions);
}
export type BlockUserMutationHookResult = ReturnType<typeof useBlockUserMutation>;
export type BlockUserMutationResult = Apollo.MutationResult<Types.BlockUserMutation>;
export type BlockUserMutationOptions = Apollo.BaseMutationOptions<
  Types.BlockUserMutation,
  Types.BlockUserMutationVariables
>;
export const BotsType1ReportDocument = gql`
  query botsType1Report($offset: Int, $limit: Int, $period: String) {
    admin {
      botsType1Report(offset: $offset, limit: $limit, period: $period) {
        total
        page
        perPage
        filters {
          period
        }
        data {
          ip
          count
        }
      }
    }
  }
`;

/**
 * __useBotsType1ReportQuery__
 *
 * To run a query within a React component, call `useBotsType1ReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotsType1ReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotsType1ReportQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      period: // value for 'period'
 *   },
 * });
 */
export function useBotsType1ReportQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.BotsType1ReportQuery, Types.BotsType1ReportQueryVariables>
) {
  return Apollo.useQuery<Types.BotsType1ReportQuery, Types.BotsType1ReportQueryVariables>(
    BotsType1ReportDocument,
    baseOptions
  );
}
export function useBotsType1ReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BotsType1ReportQuery, Types.BotsType1ReportQueryVariables>
) {
  return Apollo.useLazyQuery<Types.BotsType1ReportQuery, Types.BotsType1ReportQueryVariables>(
    BotsType1ReportDocument,
    baseOptions
  );
}
export type BotsType1ReportQueryHookResult = ReturnType<typeof useBotsType1ReportQuery>;
export type BotsType1ReportLazyQueryHookResult = ReturnType<typeof useBotsType1ReportLazyQuery>;
export type BotsType1ReportQueryResult = Apollo.QueryResult<
  Types.BotsType1ReportQuery,
  Types.BotsType1ReportQueryVariables
>;
export const BotsType2ReportDocument = gql`
  query botsType2Report {
    admin {
      botsType2Report {
        total
        page
        perPage
        data {
          ip
          inputUrl
          createdAt
        }
      }
    }
  }
`;

/**
 * __useBotsType2ReportQuery__
 *
 * To run a query within a React component, call `useBotsType2ReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotsType2ReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotsType2ReportQuery({
 *   variables: {
 *   },
 * });
 */
export function useBotsType2ReportQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.BotsType2ReportQuery, Types.BotsType2ReportQueryVariables>
) {
  return Apollo.useQuery<Types.BotsType2ReportQuery, Types.BotsType2ReportQueryVariables>(
    BotsType2ReportDocument,
    baseOptions
  );
}
export function useBotsType2ReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BotsType2ReportQuery, Types.BotsType2ReportQueryVariables>
) {
  return Apollo.useLazyQuery<Types.BotsType2ReportQuery, Types.BotsType2ReportQueryVariables>(
    BotsType2ReportDocument,
    baseOptions
  );
}
export type BotsType2ReportQueryHookResult = ReturnType<typeof useBotsType2ReportQuery>;
export type BotsType2ReportLazyQueryHookResult = ReturnType<typeof useBotsType2ReportLazyQuery>;
export type BotsType2ReportQueryResult = Apollo.QueryResult<
  Types.BotsType2ReportQuery,
  Types.BotsType2ReportQueryVariables
>;
export const ClearUserCacheDocument = gql`
  mutation clearUserCache($id: ID!) {
    admin {
      clearUserCache(id: $id) {
        id
      }
    }
  }
`;
export type ClearUserCacheMutationFn = Apollo.MutationFunction<
  Types.ClearUserCacheMutation,
  Types.ClearUserCacheMutationVariables
>;

/**
 * __useClearUserCacheMutation__
 *
 * To run a mutation, you first call `useClearUserCacheMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearUserCacheMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearUserCacheMutation, { data, loading, error }] = useClearUserCacheMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClearUserCacheMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ClearUserCacheMutation, Types.ClearUserCacheMutationVariables>
) {
  return Apollo.useMutation<Types.ClearUserCacheMutation, Types.ClearUserCacheMutationVariables>(
    ClearUserCacheDocument,
    baseOptions
  );
}
export type ClearUserCacheMutationHookResult = ReturnType<typeof useClearUserCacheMutation>;
export type ClearUserCacheMutationResult = Apollo.MutationResult<Types.ClearUserCacheMutation>;
export type ClearUserCacheMutationOptions = Apollo.BaseMutationOptions<
  Types.ClearUserCacheMutation,
  Types.ClearUserCacheMutationVariables
>;
export const DeleteOneGroupDocument = gql`
  mutation deleteOneGroup($id: String!, $userId: String!) {
    admin {
      deleteOneGroup(id: $id, userId: $userId)
    }
  }
`;
export type DeleteOneGroupMutationFn = Apollo.MutationFunction<
  Types.DeleteOneGroupMutation,
  Types.DeleteOneGroupMutationVariables
>;

/**
 * __useDeleteOneGroupMutation__
 *
 * To run a mutation, you first call `useDeleteOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneGroupMutation, { data, loading, error }] = useDeleteOneGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteOneGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteOneGroupMutation, Types.DeleteOneGroupMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteOneGroupMutation, Types.DeleteOneGroupMutationVariables>(
    DeleteOneGroupDocument,
    baseOptions
  );
}
export type DeleteOneGroupMutationHookResult = ReturnType<typeof useDeleteOneGroupMutation>;
export type DeleteOneGroupMutationResult = Apollo.MutationResult<Types.DeleteOneGroupMutation>;
export type DeleteOneGroupMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteOneGroupMutation,
  Types.DeleteOneGroupMutationVariables
>;
export const DeleteAllGroupsDocument = gql`
  mutation deleteAllGroups($userId: String!) {
    admin {
      deleteAllGroups(userId: $userId)
    }
  }
`;
export type DeleteAllGroupsMutationFn = Apollo.MutationFunction<
  Types.DeleteAllGroupsMutation,
  Types.DeleteAllGroupsMutationVariables
>;

/**
 * __useDeleteAllGroupsMutation__
 *
 * To run a mutation, you first call `useDeleteAllGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllGroupsMutation, { data, loading, error }] = useDeleteAllGroupsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteAllGroupsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteAllGroupsMutation, Types.DeleteAllGroupsMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteAllGroupsMutation, Types.DeleteAllGroupsMutationVariables>(
    DeleteAllGroupsDocument,
    baseOptions
  );
}
export type DeleteAllGroupsMutationHookResult = ReturnType<typeof useDeleteAllGroupsMutation>;
export type DeleteAllGroupsMutationResult = Apollo.MutationResult<Types.DeleteAllGroupsMutation>;
export type DeleteAllGroupsMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteAllGroupsMutation,
  Types.DeleteAllGroupsMutationVariables
>;
export const DeleteOneFeedDocument = gql`
  mutation deleteOneFeed($id: String!, $userId: String!) {
    admin {
      deleteOneFeed(id: $id, userId: $userId)
    }
  }
`;
export type DeleteOneFeedMutationFn = Apollo.MutationFunction<
  Types.DeleteOneFeedMutation,
  Types.DeleteOneFeedMutationVariables
>;

/**
 * __useDeleteOneFeedMutation__
 *
 * To run a mutation, you first call `useDeleteOneFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFeedMutation, { data, loading, error }] = useDeleteOneFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteOneFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteOneFeedMutation, Types.DeleteOneFeedMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteOneFeedMutation, Types.DeleteOneFeedMutationVariables>(
    DeleteOneFeedDocument,
    baseOptions
  );
}
export type DeleteOneFeedMutationHookResult = ReturnType<typeof useDeleteOneFeedMutation>;
export type DeleteOneFeedMutationResult = Apollo.MutationResult<Types.DeleteOneFeedMutation>;
export type DeleteOneFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteOneFeedMutation,
  Types.DeleteOneFeedMutationVariables
>;
export const DeleteAllFeedsDocument = gql`
  mutation deleteAllFeeds($userId: String!) {
    admin {
      deleteAllFeeds(userId: $userId)
    }
  }
`;
export type DeleteAllFeedsMutationFn = Apollo.MutationFunction<
  Types.DeleteAllFeedsMutation,
  Types.DeleteAllFeedsMutationVariables
>;

/**
 * __useDeleteAllFeedsMutation__
 *
 * To run a mutation, you first call `useDeleteAllFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllFeedsMutation, { data, loading, error }] = useDeleteAllFeedsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteAllFeedsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteAllFeedsMutation, Types.DeleteAllFeedsMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteAllFeedsMutation, Types.DeleteAllFeedsMutationVariables>(
    DeleteAllFeedsDocument,
    baseOptions
  );
}
export type DeleteAllFeedsMutationHookResult = ReturnType<typeof useDeleteAllFeedsMutation>;
export type DeleteAllFeedsMutationResult = Apollo.MutationResult<Types.DeleteAllFeedsMutation>;
export type DeleteAllFeedsMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteAllFeedsMutation,
  Types.DeleteAllFeedsMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: ID!) {
    admin {
      deleteUser(id: $id) {
        id
      }
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>
) {
  return Apollo.useMutation<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>(
    DeleteUserDocument,
    baseOptions
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<Types.DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteUserMutation,
  Types.DeleteUserMutationVariables
>;
export const DisableFeedDocument = gql`
  mutation disableFeed($id: String!) {
    admin {
      disableFeed(id: $id)
    }
  }
`;
export type DisableFeedMutationFn = Apollo.MutationFunction<
  Types.DisableFeedMutation,
  Types.DisableFeedMutationVariables
>;

/**
 * __useDisableFeedMutation__
 *
 * To run a mutation, you first call `useDisableFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableFeedMutation, { data, loading, error }] = useDisableFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisableFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.DisableFeedMutation, Types.DisableFeedMutationVariables>
) {
  return Apollo.useMutation<Types.DisableFeedMutation, Types.DisableFeedMutationVariables>(
    DisableFeedDocument,
    baseOptions
  );
}
export type DisableFeedMutationHookResult = ReturnType<typeof useDisableFeedMutation>;
export type DisableFeedMutationResult = Apollo.MutationResult<Types.DisableFeedMutation>;
export type DisableFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.DisableFeedMutation,
  Types.DisableFeedMutationVariables
>;
export const DisableAllUserFeedsDocument = gql`
  mutation disableAllUserFeeds($userId: String!) {
    admin {
      disableAllUserFeeds(userId: $userId)
    }
  }
`;
export type DisableAllUserFeedsMutationFn = Apollo.MutationFunction<
  Types.DisableAllUserFeedsMutation,
  Types.DisableAllUserFeedsMutationVariables
>;

/**
 * __useDisableAllUserFeedsMutation__
 *
 * To run a mutation, you first call `useDisableAllUserFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableAllUserFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableAllUserFeedsMutation, { data, loading, error }] = useDisableAllUserFeedsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDisableAllUserFeedsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DisableAllUserFeedsMutation,
    Types.DisableAllUserFeedsMutationVariables
  >
) {
  return Apollo.useMutation<Types.DisableAllUserFeedsMutation, Types.DisableAllUserFeedsMutationVariables>(
    DisableAllUserFeedsDocument,
    baseOptions
  );
}
export type DisableAllUserFeedsMutationHookResult = ReturnType<typeof useDisableAllUserFeedsMutation>;
export type DisableAllUserFeedsMutationResult = Apollo.MutationResult<Types.DisableAllUserFeedsMutation>;
export type DisableAllUserFeedsMutationOptions = Apollo.BaseMutationOptions<
  Types.DisableAllUserFeedsMutation,
  Types.DisableAllUserFeedsMutationVariables
>;
export const EnableFeedDocument = gql`
  mutation enableFeed($id: String!) {
    admin {
      enableFeed(id: $id)
    }
  }
`;
export type EnableFeedMutationFn = Apollo.MutationFunction<Types.EnableFeedMutation, Types.EnableFeedMutationVariables>;

/**
 * __useEnableFeedMutation__
 *
 * To run a mutation, you first call `useEnableFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableFeedMutation, { data, loading, error }] = useEnableFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEnableFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.EnableFeedMutation, Types.EnableFeedMutationVariables>
) {
  return Apollo.useMutation<Types.EnableFeedMutation, Types.EnableFeedMutationVariables>(
    EnableFeedDocument,
    baseOptions
  );
}
export type EnableFeedMutationHookResult = ReturnType<typeof useEnableFeedMutation>;
export type EnableFeedMutationResult = Apollo.MutationResult<Types.EnableFeedMutation>;
export type EnableFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.EnableFeedMutation,
  Types.EnableFeedMutationVariables
>;
export const EnableAllUserFeedsDocument = gql`
  mutation enableAllUserFeeds($userId: String!) {
    admin {
      enableAllUserFeeds(userId: $userId)
    }
  }
`;
export type EnableAllUserFeedsMutationFn = Apollo.MutationFunction<
  Types.EnableAllUserFeedsMutation,
  Types.EnableAllUserFeedsMutationVariables
>;

/**
 * __useEnableAllUserFeedsMutation__
 *
 * To run a mutation, you first call `useEnableAllUserFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableAllUserFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableAllUserFeedsMutation, { data, loading, error }] = useEnableAllUserFeedsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEnableAllUserFeedsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.EnableAllUserFeedsMutation, Types.EnableAllUserFeedsMutationVariables>
) {
  return Apollo.useMutation<Types.EnableAllUserFeedsMutation, Types.EnableAllUserFeedsMutationVariables>(
    EnableAllUserFeedsDocument,
    baseOptions
  );
}
export type EnableAllUserFeedsMutationHookResult = ReturnType<typeof useEnableAllUserFeedsMutation>;
export type EnableAllUserFeedsMutationResult = Apollo.MutationResult<Types.EnableAllUserFeedsMutation>;
export type EnableAllUserFeedsMutationOptions = Apollo.BaseMutationOptions<
  Types.EnableAllUserFeedsMutation,
  Types.EnableAllUserFeedsMutationVariables
>;
export const EnableFeedsDocument = gql`
  mutation enableFeeds($userId: String!) {
    admin {
      enableFeeds(userId: $userId)
    }
  }
`;
export type EnableFeedsMutationFn = Apollo.MutationFunction<
  Types.EnableFeedsMutation,
  Types.EnableFeedsMutationVariables
>;

/**
 * __useEnableFeedsMutation__
 *
 * To run a mutation, you first call `useEnableFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableFeedsMutation, { data, loading, error }] = useEnableFeedsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEnableFeedsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.EnableFeedsMutation, Types.EnableFeedsMutationVariables>
) {
  return Apollo.useMutation<Types.EnableFeedsMutation, Types.EnableFeedsMutationVariables>(
    EnableFeedsDocument,
    baseOptions
  );
}
export type EnableFeedsMutationHookResult = ReturnType<typeof useEnableFeedsMutation>;
export type EnableFeedsMutationResult = Apollo.MutationResult<Types.EnableFeedsMutation>;
export type EnableFeedsMutationOptions = Apollo.BaseMutationOptions<
  Types.EnableFeedsMutation,
  Types.EnableFeedsMutationVariables
>;
export const GetUserFeedbackDocument = gql`
  query getUserFeedback($page: Int!, $rowsPerPage: Int!, $period: String!) {
    admin {
      getUserFeedback(page: $page, rowsPerPage: $rowsPerPage, period: $period) {
        rows {
          rate
          option
          description
          user {
            id
            email
          }
          countActiveFeeds
          createdAt
        }
        count
      }
    }
  }
`;

/**
 * __useGetUserFeedbackQuery__
 *
 * To run a query within a React component, call `useGetUserFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFeedbackQuery({
 *   variables: {
 *      page: // value for 'page'
 *      rowsPerPage: // value for 'rowsPerPage'
 *      period: // value for 'period'
 *   },
 * });
 */
export function useGetUserFeedbackQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetUserFeedbackQuery, Types.GetUserFeedbackQueryVariables>
) {
  return Apollo.useQuery<Types.GetUserFeedbackQuery, Types.GetUserFeedbackQueryVariables>(
    GetUserFeedbackDocument,
    baseOptions
  );
}
export function useGetUserFeedbackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUserFeedbackQuery, Types.GetUserFeedbackQueryVariables>
) {
  return Apollo.useLazyQuery<Types.GetUserFeedbackQuery, Types.GetUserFeedbackQueryVariables>(
    GetUserFeedbackDocument,
    baseOptions
  );
}
export type GetUserFeedbackQueryHookResult = ReturnType<typeof useGetUserFeedbackQuery>;
export type GetUserFeedbackLazyQueryHookResult = ReturnType<typeof useGetUserFeedbackLazyQuery>;
export type GetUserFeedbackQueryResult = Apollo.QueryResult<
  Types.GetUserFeedbackQuery,
  Types.GetUserFeedbackQueryVariables
>;
export const RefetchFeedDocument = gql`
  mutation refetchFeed($feedId: ID!) {
    admin {
      refetchFeed(feedId: $feedId)
    }
  }
`;
export type RefetchFeedMutationFn = Apollo.MutationFunction<
  Types.RefetchFeedMutation,
  Types.RefetchFeedMutationVariables
>;

/**
 * __useRefetchFeedMutation__
 *
 * To run a mutation, you first call `useRefetchFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefetchFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refetchFeedMutation, { data, loading, error }] = useRefetchFeedMutation({
 *   variables: {
 *      feedId: // value for 'feedId'
 *   },
 * });
 */
export function useRefetchFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RefetchFeedMutation, Types.RefetchFeedMutationVariables>
) {
  return Apollo.useMutation<Types.RefetchFeedMutation, Types.RefetchFeedMutationVariables>(
    RefetchFeedDocument,
    baseOptions
  );
}
export type RefetchFeedMutationHookResult = ReturnType<typeof useRefetchFeedMutation>;
export type RefetchFeedMutationResult = Apollo.MutationResult<Types.RefetchFeedMutation>;
export type RefetchFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.RefetchFeedMutation,
  Types.RefetchFeedMutationVariables
>;
export const RemoveAllUserJobsDocument = gql`
  mutation removeAllUserJobs($userId: ID!) {
    admin {
      removeAllUserJobs(userId: $userId)
    }
  }
`;
export type RemoveAllUserJobsMutationFn = Apollo.MutationFunction<
  Types.RemoveAllUserJobsMutation,
  Types.RemoveAllUserJobsMutationVariables
>;

/**
 * __useRemoveAllUserJobsMutation__
 *
 * To run a mutation, you first call `useRemoveAllUserJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAllUserJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAllUserJobsMutation, { data, loading, error }] = useRemoveAllUserJobsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveAllUserJobsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RemoveAllUserJobsMutation, Types.RemoveAllUserJobsMutationVariables>
) {
  return Apollo.useMutation<Types.RemoveAllUserJobsMutation, Types.RemoveAllUserJobsMutationVariables>(
    RemoveAllUserJobsDocument,
    baseOptions
  );
}
export type RemoveAllUserJobsMutationHookResult = ReturnType<typeof useRemoveAllUserJobsMutation>;
export type RemoveAllUserJobsMutationResult = Apollo.MutationResult<Types.RemoveAllUserJobsMutation>;
export type RemoveAllUserJobsMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveAllUserJobsMutation,
  Types.RemoveAllUserJobsMutationVariables
>;
export const RestoreOneGroupDocument = gql`
  mutation restoreOneGroup($id: String!, $userId: String!) {
    admin {
      restoreOneGroup(id: $id, userId: $userId)
    }
  }
`;
export type RestoreOneGroupMutationFn = Apollo.MutationFunction<
  Types.RestoreOneGroupMutation,
  Types.RestoreOneGroupMutationVariables
>;

/**
 * __useRestoreOneGroupMutation__
 *
 * To run a mutation, you first call `useRestoreOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreOneGroupMutation, { data, loading, error }] = useRestoreOneGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRestoreOneGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RestoreOneGroupMutation, Types.RestoreOneGroupMutationVariables>
) {
  return Apollo.useMutation<Types.RestoreOneGroupMutation, Types.RestoreOneGroupMutationVariables>(
    RestoreOneGroupDocument,
    baseOptions
  );
}
export type RestoreOneGroupMutationHookResult = ReturnType<typeof useRestoreOneGroupMutation>;
export type RestoreOneGroupMutationResult = Apollo.MutationResult<Types.RestoreOneGroupMutation>;
export type RestoreOneGroupMutationOptions = Apollo.BaseMutationOptions<
  Types.RestoreOneGroupMutation,
  Types.RestoreOneGroupMutationVariables
>;
export const RestoreAllGroupsDocument = gql`
  mutation restoreAllGroups($userId: String!) {
    admin {
      restoreAllGroups(userId: $userId)
    }
  }
`;
export type RestoreAllGroupsMutationFn = Apollo.MutationFunction<
  Types.RestoreAllGroupsMutation,
  Types.RestoreAllGroupsMutationVariables
>;

/**
 * __useRestoreAllGroupsMutation__
 *
 * To run a mutation, you first call `useRestoreAllGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreAllGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreAllGroupsMutation, { data, loading, error }] = useRestoreAllGroupsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRestoreAllGroupsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RestoreAllGroupsMutation, Types.RestoreAllGroupsMutationVariables>
) {
  return Apollo.useMutation<Types.RestoreAllGroupsMutation, Types.RestoreAllGroupsMutationVariables>(
    RestoreAllGroupsDocument,
    baseOptions
  );
}
export type RestoreAllGroupsMutationHookResult = ReturnType<typeof useRestoreAllGroupsMutation>;
export type RestoreAllGroupsMutationResult = Apollo.MutationResult<Types.RestoreAllGroupsMutation>;
export type RestoreAllGroupsMutationOptions = Apollo.BaseMutationOptions<
  Types.RestoreAllGroupsMutation,
  Types.RestoreAllGroupsMutationVariables
>;
export const RestoreOneFeedDocument = gql`
  mutation restoreOneFeed($id: String!) {
    admin {
      restoreOneFeed(id: $id)
    }
  }
`;
export type RestoreOneFeedMutationFn = Apollo.MutationFunction<
  Types.RestoreOneFeedMutation,
  Types.RestoreOneFeedMutationVariables
>;

/**
 * __useRestoreOneFeedMutation__
 *
 * To run a mutation, you first call `useRestoreOneFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreOneFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreOneFeedMutation, { data, loading, error }] = useRestoreOneFeedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRestoreOneFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RestoreOneFeedMutation, Types.RestoreOneFeedMutationVariables>
) {
  return Apollo.useMutation<Types.RestoreOneFeedMutation, Types.RestoreOneFeedMutationVariables>(
    RestoreOneFeedDocument,
    baseOptions
  );
}
export type RestoreOneFeedMutationHookResult = ReturnType<typeof useRestoreOneFeedMutation>;
export type RestoreOneFeedMutationResult = Apollo.MutationResult<Types.RestoreOneFeedMutation>;
export type RestoreOneFeedMutationOptions = Apollo.BaseMutationOptions<
  Types.RestoreOneFeedMutation,
  Types.RestoreOneFeedMutationVariables
>;
export const RestoreAllFeedsDocument = gql`
  mutation restoreAllFeeds($userId: String!) {
    admin {
      restoreAllFeeds(userId: $userId)
    }
  }
`;
export type RestoreAllFeedsMutationFn = Apollo.MutationFunction<
  Types.RestoreAllFeedsMutation,
  Types.RestoreAllFeedsMutationVariables
>;

/**
 * __useRestoreAllFeedsMutation__
 *
 * To run a mutation, you first call `useRestoreAllFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreAllFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreAllFeedsMutation, { data, loading, error }] = useRestoreAllFeedsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRestoreAllFeedsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RestoreAllFeedsMutation, Types.RestoreAllFeedsMutationVariables>
) {
  return Apollo.useMutation<Types.RestoreAllFeedsMutation, Types.RestoreAllFeedsMutationVariables>(
    RestoreAllFeedsDocument,
    baseOptions
  );
}
export type RestoreAllFeedsMutationHookResult = ReturnType<typeof useRestoreAllFeedsMutation>;
export type RestoreAllFeedsMutationResult = Apollo.MutationResult<Types.RestoreAllFeedsMutation>;
export type RestoreAllFeedsMutationOptions = Apollo.BaseMutationOptions<
  Types.RestoreAllFeedsMutation,
  Types.RestoreAllFeedsMutationVariables
>;
export const ScheduleAllUserJobsDocument = gql`
  mutation scheduleAllUserJobs($userId: ID!) {
    admin {
      scheduleAllUserJobs(userId: $userId)
    }
  }
`;
export type ScheduleAllUserJobsMutationFn = Apollo.MutationFunction<
  Types.ScheduleAllUserJobsMutation,
  Types.ScheduleAllUserJobsMutationVariables
>;

/**
 * __useScheduleAllUserJobsMutation__
 *
 * To run a mutation, you first call `useScheduleAllUserJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScheduleAllUserJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scheduleAllUserJobsMutation, { data, loading, error }] = useScheduleAllUserJobsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useScheduleAllUserJobsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.ScheduleAllUserJobsMutation,
    Types.ScheduleAllUserJobsMutationVariables
  >
) {
  return Apollo.useMutation<Types.ScheduleAllUserJobsMutation, Types.ScheduleAllUserJobsMutationVariables>(
    ScheduleAllUserJobsDocument,
    baseOptions
  );
}
export type ScheduleAllUserJobsMutationHookResult = ReturnType<typeof useScheduleAllUserJobsMutation>;
export type ScheduleAllUserJobsMutationResult = Apollo.MutationResult<Types.ScheduleAllUserJobsMutation>;
export type ScheduleAllUserJobsMutationOptions = Apollo.BaseMutationOptions<
  Types.ScheduleAllUserJobsMutation,
  Types.ScheduleAllUserJobsMutationVariables
>;
export const SpamAccountReportDocument = gql`
  query spamAccountReport($offset: Int, $limit: Int, $period: String) {
    admin {
      spamAccountReport(offset: $offset, limit: $limit, period: $period) {
        total
        page
        perPage
        filters {
          period
        }
        data {
          ip
          count
          usersCount
          lastCreatedAt
          users {
            id
            email
            isTrial
            deleted
            blocked
            createdAt
            ip
            plan {
              name
            }
          }
        }
      }
    }
  }
`;

/**
 * __useSpamAccountReportQuery__
 *
 * To run a query within a React component, call `useSpamAccountReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpamAccountReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpamAccountReportQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      period: // value for 'period'
 *   },
 * });
 */
export function useSpamAccountReportQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.SpamAccountReportQuery, Types.SpamAccountReportQueryVariables>
) {
  return Apollo.useQuery<Types.SpamAccountReportQuery, Types.SpamAccountReportQueryVariables>(
    SpamAccountReportDocument,
    baseOptions
  );
}
export function useSpamAccountReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.SpamAccountReportQuery, Types.SpamAccountReportQueryVariables>
) {
  return Apollo.useLazyQuery<Types.SpamAccountReportQuery, Types.SpamAccountReportQueryVariables>(
    SpamAccountReportDocument,
    baseOptions
  );
}
export type SpamAccountReportQueryHookResult = ReturnType<typeof useSpamAccountReportQuery>;
export type SpamAccountReportLazyQueryHookResult = ReturnType<typeof useSpamAccountReportLazyQuery>;
export type SpamAccountReportQueryResult = Apollo.QueryResult<
  Types.SpamAccountReportQuery,
  Types.SpamAccountReportQueryVariables
>;
export const UpdateIsSubExpiredDocument = gql`
  mutation updateIsSubExpired($userId: ID!, $isSubExpired: Boolean!) {
    admin {
      updateIsSubExpired(userId: $userId, isSubExpired: $isSubExpired) {
        isSubExpired
      }
    }
  }
`;
export type UpdateIsSubExpiredMutationFn = Apollo.MutationFunction<
  Types.UpdateIsSubExpiredMutation,
  Types.UpdateIsSubExpiredMutationVariables
>;

/**
 * __useUpdateIsSubExpiredMutation__
 *
 * To run a mutation, you first call `useUpdateIsSubExpiredMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIsSubExpiredMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIsSubExpiredMutation, { data, loading, error }] = useUpdateIsSubExpiredMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      isSubExpired: // value for 'isSubExpired'
 *   },
 * });
 */
export function useUpdateIsSubExpiredMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateIsSubExpiredMutation, Types.UpdateIsSubExpiredMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateIsSubExpiredMutation, Types.UpdateIsSubExpiredMutationVariables>(
    UpdateIsSubExpiredDocument,
    baseOptions
  );
}
export type UpdateIsSubExpiredMutationHookResult = ReturnType<typeof useUpdateIsSubExpiredMutation>;
export type UpdateIsSubExpiredMutationResult = Apollo.MutationResult<Types.UpdateIsSubExpiredMutation>;
export type UpdateIsSubExpiredMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateIsSubExpiredMutation,
  Types.UpdateIsSubExpiredMutationVariables
>;
export const UpdateIsTrialDocument = gql`
  mutation updateIsTrial($userId: ID!, $isTrial: Boolean!) {
    admin {
      updateIsTrial(userId: $userId, isTrial: $isTrial) {
        isTrial
      }
    }
  }
`;
export type UpdateIsTrialMutationFn = Apollo.MutationFunction<
  Types.UpdateIsTrialMutation,
  Types.UpdateIsTrialMutationVariables
>;

/**
 * __useUpdateIsTrialMutation__
 *
 * To run a mutation, you first call `useUpdateIsTrialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIsTrialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIsTrialMutation, { data, loading, error }] = useUpdateIsTrialMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      isTrial: // value for 'isTrial'
 *   },
 * });
 */
export function useUpdateIsTrialMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateIsTrialMutation, Types.UpdateIsTrialMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateIsTrialMutation, Types.UpdateIsTrialMutationVariables>(
    UpdateIsTrialDocument,
    baseOptions
  );
}
export type UpdateIsTrialMutationHookResult = ReturnType<typeof useUpdateIsTrialMutation>;
export type UpdateIsTrialMutationResult = Apollo.MutationResult<Types.UpdateIsTrialMutation>;
export type UpdateIsTrialMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateIsTrialMutation,
  Types.UpdateIsTrialMutationVariables
>;
export const UpdateTrialEndDateDocument = gql`
  mutation updateTrialEndDate($userId: ID!, $trialEnd: Date!) {
    admin {
      updateTrialEndDate(userId: $userId, trialEnd: $trialEnd) {
        trialEnd
      }
    }
  }
`;
export type UpdateTrialEndDateMutationFn = Apollo.MutationFunction<
  Types.UpdateTrialEndDateMutation,
  Types.UpdateTrialEndDateMutationVariables
>;

/**
 * __useUpdateTrialEndDateMutation__
 *
 * To run a mutation, you first call `useUpdateTrialEndDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrialEndDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrialEndDateMutation, { data, loading, error }] = useUpdateTrialEndDateMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      trialEnd: // value for 'trialEnd'
 *   },
 * });
 */
export function useUpdateTrialEndDateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateTrialEndDateMutation, Types.UpdateTrialEndDateMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateTrialEndDateMutation, Types.UpdateTrialEndDateMutationVariables>(
    UpdateTrialEndDateDocument,
    baseOptions
  );
}
export type UpdateTrialEndDateMutationHookResult = ReturnType<typeof useUpdateTrialEndDateMutation>;
export type UpdateTrialEndDateMutationResult = Apollo.MutationResult<Types.UpdateTrialEndDateMutation>;
export type UpdateTrialEndDateMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTrialEndDateMutation,
  Types.UpdateTrialEndDateMutationVariables
>;
export const UpdateUserFeaturesDocument = gql`
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
  ${UserFeaturesFragmentDoc}
`;
export type UpdateUserFeaturesMutationFn = Apollo.MutationFunction<
  Types.UpdateUserFeaturesMutation,
  Types.UpdateUserFeaturesMutationVariables
>;

/**
 * __useUpdateUserFeaturesMutation__
 *
 * To run a mutation, you first call `useUpdateUserFeaturesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserFeaturesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserFeaturesMutation, { data, loading, error }] = useUpdateUserFeaturesMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      featuresId: // value for 'featuresId'
 *      features: // value for 'features'
 *   },
 * });
 */
export function useUpdateUserFeaturesMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserFeaturesMutation, Types.UpdateUserFeaturesMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateUserFeaturesMutation, Types.UpdateUserFeaturesMutationVariables>(
    UpdateUserFeaturesDocument,
    baseOptions
  );
}
export type UpdateUserFeaturesMutationHookResult = ReturnType<typeof useUpdateUserFeaturesMutation>;
export type UpdateUserFeaturesMutationResult = Apollo.MutationResult<Types.UpdateUserFeaturesMutation>;
export type UpdateUserFeaturesMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateUserFeaturesMutation,
  Types.UpdateUserFeaturesMutationVariables
>;
export const UsersDocument = gql`
  query users($count: Int, $searchQuery: String) {
    admin {
      users(count: $count, searchQuery: $searchQuery) {
        id
        email
        firstName
        lastName
        isTrial
        customerId
        chargebeeId
        plan {
          name
        }
      }
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      count: // value for 'count'
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>) {
  return Apollo.useQuery<Types.UsersQuery, Types.UsersQueryVariables>(UsersDocument, baseOptions);
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>
) {
  return Apollo.useLazyQuery<Types.UsersQuery, Types.UsersQueryVariables>(UsersDocument, baseOptions);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<Types.UsersQuery, Types.UsersQueryVariables>;
export const UserFeedsDocument = gql`
  query userFeeds($id: ID!) {
    admin {
      userFeeds(id: $id) {
        id
        linkToFeed
        title
        disabled
        providerId
        lastRefreshed
        lastNewPosts
        deleted
      }
    }
  }
`;

/**
 * __useUserFeedsQuery__
 *
 * To run a query within a React component, call `useUserFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFeedsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserFeedsQuery(
  baseOptions: Apollo.QueryHookOptions<Types.UserFeedsQuery, Types.UserFeedsQueryVariables>
) {
  return Apollo.useQuery<Types.UserFeedsQuery, Types.UserFeedsQueryVariables>(UserFeedsDocument, baseOptions);
}
export function useUserFeedsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.UserFeedsQuery, Types.UserFeedsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.UserFeedsQuery, Types.UserFeedsQueryVariables>(UserFeedsDocument, baseOptions);
}
export type UserFeedsQueryHookResult = ReturnType<typeof useUserFeedsQuery>;
export type UserFeedsLazyQueryHookResult = ReturnType<typeof useUserFeedsLazyQuery>;
export type UserFeedsQueryResult = Apollo.QueryResult<Types.UserFeedsQuery, Types.UserFeedsQueryVariables>;
export const UserInformationDocument = gql`
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
  ${UserFeaturesFragmentDoc}
`;

/**
 * __useUserInformationQuery__
 *
 * To run a query within a React component, call `useUserInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInformationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserInformationQuery(
  baseOptions: Apollo.QueryHookOptions<Types.UserInformationQuery, Types.UserInformationQueryVariables>
) {
  return Apollo.useQuery<Types.UserInformationQuery, Types.UserInformationQueryVariables>(
    UserInformationDocument,
    baseOptions
  );
}
export function useUserInformationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.UserInformationQuery, Types.UserInformationQueryVariables>
) {
  return Apollo.useLazyQuery<Types.UserInformationQuery, Types.UserInformationQueryVariables>(
    UserInformationDocument,
    baseOptions
  );
}
export type UserInformationQueryHookResult = ReturnType<typeof useUserInformationQuery>;
export type UserInformationLazyQueryHookResult = ReturnType<typeof useUserInformationLazyQuery>;
export type UserInformationQueryResult = Apollo.QueryResult<
  Types.UserInformationQuery,
  Types.UserInformationQueryVariables
>;
export const AllUserBundlesDocument = gql`
  query allUserBundles($id: String!) {
    admin {
      allUserBundles(id: $id) {
        id
        title
        deleted
        isMaster
        createdAt
        feeds
        userId
      }
    }
  }
`;

/**
 * __useAllUserBundlesQuery__
 *
 * To run a query within a React component, call `useAllUserBundlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserBundlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserBundlesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllUserBundlesQuery(
  baseOptions: Apollo.QueryHookOptions<Types.AllUserBundlesQuery, Types.AllUserBundlesQueryVariables>
) {
  return Apollo.useQuery<Types.AllUserBundlesQuery, Types.AllUserBundlesQueryVariables>(
    AllUserBundlesDocument,
    baseOptions
  );
}
export function useAllUserBundlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.AllUserBundlesQuery, Types.AllUserBundlesQueryVariables>
) {
  return Apollo.useLazyQuery<Types.AllUserBundlesQuery, Types.AllUserBundlesQueryVariables>(
    AllUserBundlesDocument,
    baseOptions
  );
}
export type AllUserBundlesQueryHookResult = ReturnType<typeof useAllUserBundlesQuery>;
export type AllUserBundlesLazyQueryHookResult = ReturnType<typeof useAllUserBundlesLazyQuery>;
export type AllUserBundlesQueryResult = Apollo.QueryResult<
  Types.AllUserBundlesQuery,
  Types.AllUserBundlesQueryVariables
>;
export const FeedsDocument = gql`
  query feeds($page: Int, $rowsPerPage: Int, $search: String, $order: OrderEnum, $orderBy: String) {
    admin {
      feeds(page: $page, rowsPerPage: $rowsPerPage, search: $search, order: $order, orderBy: $orderBy) {
        id
        title
        linkToFeed
        providerId
        disabled
        deleted
        createdAt
        userId
      }
    }
  }
`;

/**
 * __useFeedsQuery__
 *
 * To run a query within a React component, call `useFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      rowsPerPage: // value for 'rowsPerPage'
 *      search: // value for 'search'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFeedsQuery(baseOptions?: Apollo.QueryHookOptions<Types.FeedsQuery, Types.FeedsQueryVariables>) {
  return Apollo.useQuery<Types.FeedsQuery, Types.FeedsQueryVariables>(FeedsDocument, baseOptions);
}
export function useFeedsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.FeedsQuery, Types.FeedsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.FeedsQuery, Types.FeedsQueryVariables>(FeedsDocument, baseOptions);
}
export type FeedsQueryHookResult = ReturnType<typeof useFeedsQuery>;
export type FeedsLazyQueryHookResult = ReturnType<typeof useFeedsLazyQuery>;
export type FeedsQueryResult = Apollo.QueryResult<Types.FeedsQuery, Types.FeedsQueryVariables>;
export const CreateKnowledgeCategoryDocument = gql`
  mutation createKnowledgeCategory($title: String!, $summary: String!, $image: String!, $color: String!) {
    createKnowledgeCategory(title: $title, summary: $summary, image: $image, color: $color) {
      ...KnowledgeCategory
    }
  }
  ${KnowledgeCategoryFragmentDoc}
`;
export type CreateKnowledgeCategoryMutationFn = Apollo.MutationFunction<
  Types.CreateKnowledgeCategoryMutation,
  Types.CreateKnowledgeCategoryMutationVariables
>;

/**
 * __useCreateKnowledgeCategoryMutation__
 *
 * To run a mutation, you first call `useCreateKnowledgeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKnowledgeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKnowledgeCategoryMutation, { data, loading, error }] = useCreateKnowledgeCategoryMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      image: // value for 'image'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useCreateKnowledgeCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateKnowledgeCategoryMutation,
    Types.CreateKnowledgeCategoryMutationVariables
  >
) {
  return Apollo.useMutation<Types.CreateKnowledgeCategoryMutation, Types.CreateKnowledgeCategoryMutationVariables>(
    CreateKnowledgeCategoryDocument,
    baseOptions
  );
}
export type CreateKnowledgeCategoryMutationHookResult = ReturnType<typeof useCreateKnowledgeCategoryMutation>;
export type CreateKnowledgeCategoryMutationResult = Apollo.MutationResult<Types.CreateKnowledgeCategoryMutation>;
export type CreateKnowledgeCategoryMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateKnowledgeCategoryMutation,
  Types.CreateKnowledgeCategoryMutationVariables
>;
export const CreateKnowledgePostDocument = gql`
  mutation createKnowledgePost(
    $title: String!
    $summary: String!
    $body: String!
    $published: Boolean
    $categories: [ID!]!
  ) {
    createKnowledgePost(title: $title, summary: $summary, body: $body, published: $published, categories: $categories) {
      ...KnowledgePost
    }
  }
  ${KnowledgePostFragmentDoc}
`;
export type CreateKnowledgePostMutationFn = Apollo.MutationFunction<
  Types.CreateKnowledgePostMutation,
  Types.CreateKnowledgePostMutationVariables
>;

/**
 * __useCreateKnowledgePostMutation__
 *
 * To run a mutation, you first call `useCreateKnowledgePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKnowledgePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKnowledgePostMutation, { data, loading, error }] = useCreateKnowledgePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      body: // value for 'body'
 *      published: // value for 'published'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateKnowledgePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateKnowledgePostMutation,
    Types.CreateKnowledgePostMutationVariables
  >
) {
  return Apollo.useMutation<Types.CreateKnowledgePostMutation, Types.CreateKnowledgePostMutationVariables>(
    CreateKnowledgePostDocument,
    baseOptions
  );
}
export type CreateKnowledgePostMutationHookResult = ReturnType<typeof useCreateKnowledgePostMutation>;
export type CreateKnowledgePostMutationResult = Apollo.MutationResult<Types.CreateKnowledgePostMutation>;
export type CreateKnowledgePostMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateKnowledgePostMutation,
  Types.CreateKnowledgePostMutationVariables
>;
export const DeleteKnowledgeCategoryDocument = gql`
  mutation deleteKnowledgeCategory($categoryId: ID!) {
    deleteKnowledgeCategory(categoryId: $categoryId)
  }
`;
export type DeleteKnowledgeCategoryMutationFn = Apollo.MutationFunction<
  Types.DeleteKnowledgeCategoryMutation,
  Types.DeleteKnowledgeCategoryMutationVariables
>;

/**
 * __useDeleteKnowledgeCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteKnowledgeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKnowledgeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKnowledgeCategoryMutation, { data, loading, error }] = useDeleteKnowledgeCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteKnowledgeCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteKnowledgeCategoryMutation,
    Types.DeleteKnowledgeCategoryMutationVariables
  >
) {
  return Apollo.useMutation<Types.DeleteKnowledgeCategoryMutation, Types.DeleteKnowledgeCategoryMutationVariables>(
    DeleteKnowledgeCategoryDocument,
    baseOptions
  );
}
export type DeleteKnowledgeCategoryMutationHookResult = ReturnType<typeof useDeleteKnowledgeCategoryMutation>;
export type DeleteKnowledgeCategoryMutationResult = Apollo.MutationResult<Types.DeleteKnowledgeCategoryMutation>;
export type DeleteKnowledgeCategoryMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteKnowledgeCategoryMutation,
  Types.DeleteKnowledgeCategoryMutationVariables
>;
export const DeleteKnowledgePostDocument = gql`
  mutation deleteKnowledgePost($postId: ID!) {
    deleteKnowledgePost(postId: $postId)
  }
`;
export type DeleteKnowledgePostMutationFn = Apollo.MutationFunction<
  Types.DeleteKnowledgePostMutation,
  Types.DeleteKnowledgePostMutationVariables
>;

/**
 * __useDeleteKnowledgePostMutation__
 *
 * To run a mutation, you first call `useDeleteKnowledgePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKnowledgePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKnowledgePostMutation, { data, loading, error }] = useDeleteKnowledgePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeleteKnowledgePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteKnowledgePostMutation,
    Types.DeleteKnowledgePostMutationVariables
  >
) {
  return Apollo.useMutation<Types.DeleteKnowledgePostMutation, Types.DeleteKnowledgePostMutationVariables>(
    DeleteKnowledgePostDocument,
    baseOptions
  );
}
export type DeleteKnowledgePostMutationHookResult = ReturnType<typeof useDeleteKnowledgePostMutation>;
export type DeleteKnowledgePostMutationResult = Apollo.MutationResult<Types.DeleteKnowledgePostMutation>;
export type DeleteKnowledgePostMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteKnowledgePostMutation,
  Types.DeleteKnowledgePostMutationVariables
>;
export const UpdateKnowledgeCategoryDocument = gql`
  mutation updateKnowledgeCategory($categoryId: ID!, $title: String, $summary: String, $image: String, $color: String) {
    updateKnowledgeCategory(categoryId: $categoryId, title: $title, summary: $summary, image: $image, color: $color) {
      ...KnowledgeCategory
    }
  }
  ${KnowledgeCategoryFragmentDoc}
`;
export type UpdateKnowledgeCategoryMutationFn = Apollo.MutationFunction<
  Types.UpdateKnowledgeCategoryMutation,
  Types.UpdateKnowledgeCategoryMutationVariables
>;

/**
 * __useUpdateKnowledgeCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateKnowledgeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKnowledgeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKnowledgeCategoryMutation, { data, loading, error }] = useUpdateKnowledgeCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      image: // value for 'image'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useUpdateKnowledgeCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateKnowledgeCategoryMutation,
    Types.UpdateKnowledgeCategoryMutationVariables
  >
) {
  return Apollo.useMutation<Types.UpdateKnowledgeCategoryMutation, Types.UpdateKnowledgeCategoryMutationVariables>(
    UpdateKnowledgeCategoryDocument,
    baseOptions
  );
}
export type UpdateKnowledgeCategoryMutationHookResult = ReturnType<typeof useUpdateKnowledgeCategoryMutation>;
export type UpdateKnowledgeCategoryMutationResult = Apollo.MutationResult<Types.UpdateKnowledgeCategoryMutation>;
export type UpdateKnowledgeCategoryMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateKnowledgeCategoryMutation,
  Types.UpdateKnowledgeCategoryMutationVariables
>;
export const UpdateKnowledgePostDocument = gql`
  mutation updateKnowledgePost(
    $postId: ID!
    $title: String
    $summary: String
    $body: String
    $published: Boolean
    $categories: [ID!]
  ) {
    updateKnowledgePost(
      postId: $postId
      title: $title
      summary: $summary
      body: $body
      published: $published
      categories: $categories
    ) {
      ...KnowledgePost
    }
  }
  ${KnowledgePostFragmentDoc}
`;
export type UpdateKnowledgePostMutationFn = Apollo.MutationFunction<
  Types.UpdateKnowledgePostMutation,
  Types.UpdateKnowledgePostMutationVariables
>;

/**
 * __useUpdateKnowledgePostMutation__
 *
 * To run a mutation, you first call `useUpdateKnowledgePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKnowledgePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKnowledgePostMutation, { data, loading, error }] = useUpdateKnowledgePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      body: // value for 'body'
 *      published: // value for 'published'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useUpdateKnowledgePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateKnowledgePostMutation,
    Types.UpdateKnowledgePostMutationVariables
  >
) {
  return Apollo.useMutation<Types.UpdateKnowledgePostMutation, Types.UpdateKnowledgePostMutationVariables>(
    UpdateKnowledgePostDocument,
    baseOptions
  );
}
export type UpdateKnowledgePostMutationHookResult = ReturnType<typeof useUpdateKnowledgePostMutation>;
export type UpdateKnowledgePostMutationResult = Apollo.MutationResult<Types.UpdateKnowledgePostMutation>;
export type UpdateKnowledgePostMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateKnowledgePostMutation,
  Types.UpdateKnowledgePostMutationVariables
>;
export const KnowledgeCategoriesDocument = gql`
  query knowledgeCategories {
    knowledgeCategories {
      ...KnowledgeCategoryRow
    }
  }
  ${KnowledgeCategoryRowFragmentDoc}
`;

/**
 * __useKnowledgeCategoriesQuery__
 *
 * To run a query within a React component, call `useKnowledgeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useKnowledgeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKnowledgeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useKnowledgeCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.KnowledgeCategoriesQuery, Types.KnowledgeCategoriesQueryVariables>
) {
  return Apollo.useQuery<Types.KnowledgeCategoriesQuery, Types.KnowledgeCategoriesQueryVariables>(
    KnowledgeCategoriesDocument,
    baseOptions
  );
}
export function useKnowledgeCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.KnowledgeCategoriesQuery, Types.KnowledgeCategoriesQueryVariables>
) {
  return Apollo.useLazyQuery<Types.KnowledgeCategoriesQuery, Types.KnowledgeCategoriesQueryVariables>(
    KnowledgeCategoriesDocument,
    baseOptions
  );
}
export type KnowledgeCategoriesQueryHookResult = ReturnType<typeof useKnowledgeCategoriesQuery>;
export type KnowledgeCategoriesLazyQueryHookResult = ReturnType<typeof useKnowledgeCategoriesLazyQuery>;
export type KnowledgeCategoriesQueryResult = Apollo.QueryResult<
  Types.KnowledgeCategoriesQuery,
  Types.KnowledgeCategoriesQueryVariables
>;
export const KnowledgeCategoryDocument = gql`
  query knowledgeCategory($categoryId: ID!) {
    knowledgeCategory(categoryId: $categoryId) {
      ...KnowledgeCategory
    }
  }
  ${KnowledgeCategoryFragmentDoc}
`;

/**
 * __useKnowledgeCategoryQuery__
 *
 * To run a query within a React component, call `useKnowledgeCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useKnowledgeCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKnowledgeCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useKnowledgeCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<Types.KnowledgeCategoryQuery, Types.KnowledgeCategoryQueryVariables>
) {
  return Apollo.useQuery<Types.KnowledgeCategoryQuery, Types.KnowledgeCategoryQueryVariables>(
    KnowledgeCategoryDocument,
    baseOptions
  );
}
export function useKnowledgeCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.KnowledgeCategoryQuery, Types.KnowledgeCategoryQueryVariables>
) {
  return Apollo.useLazyQuery<Types.KnowledgeCategoryQuery, Types.KnowledgeCategoryQueryVariables>(
    KnowledgeCategoryDocument,
    baseOptions
  );
}
export type KnowledgeCategoryQueryHookResult = ReturnType<typeof useKnowledgeCategoryQuery>;
export type KnowledgeCategoryLazyQueryHookResult = ReturnType<typeof useKnowledgeCategoryLazyQuery>;
export type KnowledgeCategoryQueryResult = Apollo.QueryResult<
  Types.KnowledgeCategoryQuery,
  Types.KnowledgeCategoryQueryVariables
>;
export const KnowledgePostDocument = gql`
  query knowledgePost($postId: ID!) {
    knowledgePost(postId: $postId) {
      ...KnowledgePost
    }
  }
  ${KnowledgePostFragmentDoc}
`;

/**
 * __useKnowledgePostQuery__
 *
 * To run a query within a React component, call `useKnowledgePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useKnowledgePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKnowledgePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useKnowledgePostQuery(
  baseOptions: Apollo.QueryHookOptions<Types.KnowledgePostQuery, Types.KnowledgePostQueryVariables>
) {
  return Apollo.useQuery<Types.KnowledgePostQuery, Types.KnowledgePostQueryVariables>(
    KnowledgePostDocument,
    baseOptions
  );
}
export function useKnowledgePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.KnowledgePostQuery, Types.KnowledgePostQueryVariables>
) {
  return Apollo.useLazyQuery<Types.KnowledgePostQuery, Types.KnowledgePostQueryVariables>(
    KnowledgePostDocument,
    baseOptions
  );
}
export type KnowledgePostQueryHookResult = ReturnType<typeof useKnowledgePostQuery>;
export type KnowledgePostLazyQueryHookResult = ReturnType<typeof useKnowledgePostLazyQuery>;
export type KnowledgePostQueryResult = Apollo.QueryResult<Types.KnowledgePostQuery, Types.KnowledgePostQueryVariables>;
export const KnowledgeRelationsDocument = gql`
  query knowledgeRelations {
    knowledgeRelations {
      ...KnowledgeRelation
    }
  }
  ${KnowledgeRelationFragmentDoc}
`;

/**
 * __useKnowledgeRelationsQuery__
 *
 * To run a query within a React component, call `useKnowledgeRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKnowledgeRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKnowledgeRelationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useKnowledgeRelationsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.KnowledgeRelationsQuery, Types.KnowledgeRelationsQueryVariables>
) {
  return Apollo.useQuery<Types.KnowledgeRelationsQuery, Types.KnowledgeRelationsQueryVariables>(
    KnowledgeRelationsDocument,
    baseOptions
  );
}
export function useKnowledgeRelationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.KnowledgeRelationsQuery, Types.KnowledgeRelationsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.KnowledgeRelationsQuery, Types.KnowledgeRelationsQueryVariables>(
    KnowledgeRelationsDocument,
    baseOptions
  );
}
export type KnowledgeRelationsQueryHookResult = ReturnType<typeof useKnowledgeRelationsQuery>;
export type KnowledgeRelationsLazyQueryHookResult = ReturnType<typeof useKnowledgeRelationsLazyQuery>;
export type KnowledgeRelationsQueryResult = Apollo.QueryResult<
  Types.KnowledgeRelationsQuery,
  Types.KnowledgeRelationsQueryVariables
>;
export const ProviderAppListDocument = gql`
  query providerAppList($published: Boolean) {
    providerAppList(published: $published) {
      id
      name
      fromSection
      color
      logo
      url
      createdAt
    }
  }
`;

/**
 * __useProviderAppListQuery__
 *
 * To run a query within a React component, call `useProviderAppListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderAppListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderAppListQuery({
 *   variables: {
 *      published: // value for 'published'
 *   },
 * });
 */
export function useProviderAppListQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.ProviderAppListQuery, Types.ProviderAppListQueryVariables>
) {
  return Apollo.useQuery<Types.ProviderAppListQuery, Types.ProviderAppListQueryVariables>(
    ProviderAppListDocument,
    baseOptions
  );
}
export function useProviderAppListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.ProviderAppListQuery, Types.ProviderAppListQueryVariables>
) {
  return Apollo.useLazyQuery<Types.ProviderAppListQuery, Types.ProviderAppListQueryVariables>(
    ProviderAppListDocument,
    baseOptions
  );
}
export type ProviderAppListQueryHookResult = ReturnType<typeof useProviderAppListQuery>;
export type ProviderAppListLazyQueryHookResult = ReturnType<typeof useProviderAppListLazyQuery>;
export type ProviderAppListQueryResult = Apollo.QueryResult<
  Types.ProviderAppListQuery,
  Types.ProviderAppListQueryVariables
>;
export const ProviderAppDocument = gql`
  query providerApp($id: ID!) {
    providerApp(id: $id) {
      id
      name
      fromSection
      color
      logo
      url
      createdAt
      examples
    }
  }
`;

/**
 * __useProviderAppQuery__
 *
 * To run a query within a React component, call `useProviderAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderAppQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProviderAppQuery(
  baseOptions: Apollo.QueryHookOptions<Types.ProviderAppQuery, Types.ProviderAppQueryVariables>
) {
  return Apollo.useQuery<Types.ProviderAppQuery, Types.ProviderAppQueryVariables>(ProviderAppDocument, baseOptions);
}
export function useProviderAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.ProviderAppQuery, Types.ProviderAppQueryVariables>
) {
  return Apollo.useLazyQuery<Types.ProviderAppQuery, Types.ProviderAppQueryVariables>(ProviderAppDocument, baseOptions);
}
export type ProviderAppQueryHookResult = ReturnType<typeof useProviderAppQuery>;
export type ProviderAppLazyQueryHookResult = ReturnType<typeof useProviderAppLazyQuery>;
export type ProviderAppQueryResult = Apollo.QueryResult<Types.ProviderAppQuery, Types.ProviderAppQueryVariables>;
export const ChangeEmailDocument = gql`
  mutation ChangeEmail($newEmail: String!) {
    changeEmail(newEmail: $newEmail)
  }
`;
export type ChangeEmailMutationFn = Apollo.MutationFunction<
  Types.ChangeEmailMutation,
  Types.ChangeEmailMutationVariables
>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      newEmail: // value for 'newEmail'
 *   },
 * });
 */
export function useChangeEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ChangeEmailMutation, Types.ChangeEmailMutationVariables>
) {
  return Apollo.useMutation<Types.ChangeEmailMutation, Types.ChangeEmailMutationVariables>(
    ChangeEmailDocument,
    baseOptions
  );
}
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<Types.ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.ChangeEmailMutation,
  Types.ChangeEmailMutationVariables
>;
export const ChangeTwitterEmailDocument = gql`
  mutation ChangeTwitterEmail($newEmail: String!, $newPassword: String!) {
    changeTwitterEmail(newEmail: $newEmail, newPassword: $newPassword)
  }
`;
export type ChangeTwitterEmailMutationFn = Apollo.MutationFunction<
  Types.ChangeTwitterEmailMutation,
  Types.ChangeTwitterEmailMutationVariables
>;

/**
 * __useChangeTwitterEmailMutation__
 *
 * To run a mutation, you first call `useChangeTwitterEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTwitterEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTwitterEmailMutation, { data, loading, error }] = useChangeTwitterEmailMutation({
 *   variables: {
 *      newEmail: // value for 'newEmail'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeTwitterEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.ChangeTwitterEmailMutation, Types.ChangeTwitterEmailMutationVariables>
) {
  return Apollo.useMutation<Types.ChangeTwitterEmailMutation, Types.ChangeTwitterEmailMutationVariables>(
    ChangeTwitterEmailDocument,
    baseOptions
  );
}
export type ChangeTwitterEmailMutationHookResult = ReturnType<typeof useChangeTwitterEmailMutation>;
export type ChangeTwitterEmailMutationResult = Apollo.MutationResult<Types.ChangeTwitterEmailMutation>;
export type ChangeTwitterEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.ChangeTwitterEmailMutation,
  Types.ChangeTwitterEmailMutationVariables
>;
export const TagsDocument = gql`
  query tags {
    tags {
      id
      label
    }
  }
`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<Types.TagsQuery, Types.TagsQueryVariables>) {
  return Apollo.useQuery<Types.TagsQuery, Types.TagsQueryVariables>(TagsDocument, baseOptions);
}
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.TagsQuery, Types.TagsQueryVariables>) {
  return Apollo.useLazyQuery<Types.TagsQuery, Types.TagsQueryVariables>(TagsDocument, baseOptions);
}
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<Types.TagsQuery, Types.TagsQueryVariables>;
export const CreateTagDocument = gql`
  mutation createTag($label: String!, $resourceId: ID, $resourceType: TagResourceTypeEnum) {
    createTag(label: $label, resourceId: $resourceId, resourceType: $resourceType) {
      tag {
        id
        label
      }
      featureTag {
        id
        tag {
          id
          label
        }
        tagId
      }
    }
  }
`;
export type CreateTagMutationFn = Apollo.MutationFunction<Types.CreateTagMutation, Types.CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      label: // value for 'label'
 *      resourceId: // value for 'resourceId'
 *      resourceType: // value for 'resourceType'
 *   },
 * });
 */
export function useCreateTagMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CreateTagMutation, Types.CreateTagMutationVariables>
) {
  return Apollo.useMutation<Types.CreateTagMutation, Types.CreateTagMutationVariables>(CreateTagDocument, baseOptions);
}
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<Types.CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateTagMutation,
  Types.CreateTagMutationVariables
>;
export const RemoveTagDocument = gql`
  mutation removeTag($id: ID!) {
    removeTag(id: $id) {
      id
      label
    }
  }
`;
export type RemoveTagMutationFn = Apollo.MutationFunction<Types.RemoveTagMutation, Types.RemoveTagMutationVariables>;

/**
 * __useRemoveTagMutation__
 *
 * To run a mutation, you first call `useRemoveTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTagMutation, { data, loading, error }] = useRemoveTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTagMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RemoveTagMutation, Types.RemoveTagMutationVariables>
) {
  return Apollo.useMutation<Types.RemoveTagMutation, Types.RemoveTagMutationVariables>(RemoveTagDocument, baseOptions);
}
export type RemoveTagMutationHookResult = ReturnType<typeof useRemoveTagMutation>;
export type RemoveTagMutationResult = Apollo.MutationResult<Types.RemoveTagMutation>;
export type RemoveTagMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveTagMutation,
  Types.RemoveTagMutationVariables
>;
export const UpdatePasswordDocument = gql`
  mutation updatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<
  Types.UpdatePasswordMutation,
  Types.UpdatePasswordMutationVariables
>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdatePasswordMutation, Types.UpdatePasswordMutationVariables>
) {
  return Apollo.useMutation<Types.UpdatePasswordMutation, Types.UpdatePasswordMutationVariables>(
    UpdatePasswordDocument,
    baseOptions
  );
}
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<Types.UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdatePasswordMutation,
  Types.UpdatePasswordMutationVariables
>;
export const UpdateUserSettingsDocument = gql`
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
export type UpdateUserSettingsMutationFn = Apollo.MutationFunction<
  Types.UpdateUserSettingsMutation,
  Types.UpdateUserSettingsMutationVariables
>;

/**
 * __useUpdateUserSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserSettingsMutation, { data, loading, error }] = useUpdateUserSettingsMutation({
 *   variables: {
 *      openDrawer: // value for 'openDrawer'
 *      feedsLayout: // value for 'feedsLayout'
 *      feedsOrder: // value for 'feedsOrder'
 *      feedsOrderBy: // value for 'feedsOrderBy'
 *      feedsLimit: // value for 'feedsLimit'
 *      bundlesLayout: // value for 'bundlesLayout'
 *      bundlesOrder: // value for 'bundlesOrder'
 *      bundlesOrderBy: // value for 'bundlesOrderBy'
 *      bundlesLimit: // value for 'bundlesLimit'
 *      collectionsLayout: // value for 'collectionsLayout'
 *      collectionsOrder: // value for 'collectionsOrder'
 *      collectionsOrderBy: // value for 'collectionsOrderBy'
 *      collectionsLimit: // value for 'collectionsLimit'
 *      themeStyle: // value for 'themeStyle'
 *   },
 * });
 */
export function useUpdateUserSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserSettingsMutation, Types.UpdateUserSettingsMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateUserSettingsMutation, Types.UpdateUserSettingsMutationVariables>(
    UpdateUserSettingsDocument,
    baseOptions
  );
}
export type UpdateUserSettingsMutationHookResult = ReturnType<typeof useUpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationResult = Apollo.MutationResult<Types.UpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateUserSettingsMutation,
  Types.UpdateUserSettingsMutationVariables
>;
export const UserDocument = gql`
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
  ${UserFeaturesFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<Types.UserQuery, Types.UserQueryVariables>) {
  return Apollo.useQuery<Types.UserQuery, Types.UserQueryVariables>(UserDocument, baseOptions);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.UserQuery, Types.UserQueryVariables>) {
  return Apollo.useLazyQuery<Types.UserQuery, Types.UserQueryVariables>(UserDocument, baseOptions);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<Types.UserQuery, Types.UserQueryVariables>;
export const UserSettingsDocument = gql`
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

/**
 * __useUserSettingsQuery__
 *
 * To run a query within a React component, call `useUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.UserSettingsQuery, Types.UserSettingsQueryVariables>
) {
  return Apollo.useQuery<Types.UserSettingsQuery, Types.UserSettingsQueryVariables>(UserSettingsDocument, baseOptions);
}
export function useUserSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.UserSettingsQuery, Types.UserSettingsQueryVariables>
) {
  return Apollo.useLazyQuery<Types.UserSettingsQuery, Types.UserSettingsQueryVariables>(
    UserSettingsDocument,
    baseOptions
  );
}
export type UserSettingsQueryHookResult = ReturnType<typeof useUserSettingsQuery>;
export type UserSettingsLazyQueryHookResult = ReturnType<typeof useUserSettingsLazyQuery>;
export type UserSettingsQueryResult = Apollo.QueryResult<Types.UserSettingsQuery, Types.UserSettingsQueryVariables>;
export const UpdateUserDocument = gql`
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
export type UpdateUserMutationFn = Apollo.MutationFunction<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      companyName: // value for 'companyName'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>
) {
  return Apollo.useMutation<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>(
    UpdateUserDocument,
    baseOptions
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<Types.UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateUserMutation,
  Types.UpdateUserMutationVariables
>;
export const WidgetFeedDocument = gql`
  query widgetFeed($id: ID!) {
    widgetFeed(id: $id) {
      id
      status
      feed {
        id
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
        }
      }
      settings {
        ...EmbedFeedSettings
      }
    }
  }
  ${EmbedFeedSettingsFragmentDoc}
`;

/**
 * __useWidgetFeedQuery__
 *
 * To run a query within a React component, call `useWidgetFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWidgetFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWidgetFeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWidgetFeedQuery(
  baseOptions: Apollo.QueryHookOptions<Types.WidgetFeedQuery, Types.WidgetFeedQueryVariables>
) {
  return Apollo.useQuery<Types.WidgetFeedQuery, Types.WidgetFeedQueryVariables>(WidgetFeedDocument, baseOptions);
}
export function useWidgetFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.WidgetFeedQuery, Types.WidgetFeedQueryVariables>
) {
  return Apollo.useLazyQuery<Types.WidgetFeedQuery, Types.WidgetFeedQueryVariables>(WidgetFeedDocument, baseOptions);
}
export type WidgetFeedQueryHookResult = ReturnType<typeof useWidgetFeedQuery>;
export type WidgetFeedLazyQueryHookResult = ReturnType<typeof useWidgetFeedLazyQuery>;
export type WidgetFeedQueryResult = Apollo.QueryResult<Types.WidgetFeedQuery, Types.WidgetFeedQueryVariables>;
export const WidgetTickerDocument = gql`
  query widgetTicker($id: ID!) {
    widgetTicker(id: $id) {
      id
      status
      feed {
        id
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
        }
      }
      settings {
        ...EmbedTickerSettings
      }
    }
  }
  ${EmbedTickerSettingsFragmentDoc}
`;

/**
 * __useWidgetTickerQuery__
 *
 * To run a query within a React component, call `useWidgetTickerQuery` and pass it any options that fit your needs.
 * When your component renders, `useWidgetTickerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWidgetTickerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWidgetTickerQuery(
  baseOptions: Apollo.QueryHookOptions<Types.WidgetTickerQuery, Types.WidgetTickerQueryVariables>
) {
  return Apollo.useQuery<Types.WidgetTickerQuery, Types.WidgetTickerQueryVariables>(WidgetTickerDocument, baseOptions);
}
export function useWidgetTickerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.WidgetTickerQuery, Types.WidgetTickerQueryVariables>
) {
  return Apollo.useLazyQuery<Types.WidgetTickerQuery, Types.WidgetTickerQueryVariables>(
    WidgetTickerDocument,
    baseOptions
  );
}
export type WidgetTickerQueryHookResult = ReturnType<typeof useWidgetTickerQuery>;
export type WidgetTickerLazyQueryHookResult = ReturnType<typeof useWidgetTickerLazyQuery>;
export type WidgetTickerQueryResult = Apollo.QueryResult<Types.WidgetTickerQuery, Types.WidgetTickerQueryVariables>;
