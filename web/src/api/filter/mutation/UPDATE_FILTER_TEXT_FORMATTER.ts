import gql from 'graphql-tag';

const UPDATE_FILTER_TEXT_FORMATTER = gql`
  mutation updateFilterRule($id: ID!, $filterId: ID!, $body: FilterRuleInput!) {
    updateFilterRule(id: $id, filterId: $filterId, body: $body) {
      ...Filter
    }
  }
`;

export default UPDATE_FILTER_TEXT_FORMATTER;
