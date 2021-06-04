import gql from 'graphql-tag';

const REMOVE_FILTER_TEXT_FORMATTER = gql`
  mutation removeFilterRule($id: ID!, $filterId: ID!) {
    removeFilterRule(id: $id, filterId: $filterId) {
      ...Filter
    }
  }
`;

export default REMOVE_FILTER_TEXT_FORMATTER;
