import gql from 'graphql-tag';

const COPY_GROUP = gql`
  mutation copyGroup($bundleId: ID!, $title: String!, $feeds: [String!]!, $filter: Boolean, $embeds: Boolean, $settings: Boolean) {
    copyGroup(bundleId: $bundleId, title: $title, feeds: $feeds, filter: $filter, embeds: $embeds, settings: $settings) {
      ...Group
    }
  }
`;

export default COPY_GROUP;
