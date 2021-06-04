import gql from 'graphql-tag';

const UPDATE_FILTER_TEXT_FORMATTER = gql`
  mutation addFilterRule($filterId: ID!, $body: FilterRuleInput!) {
    addFilterRule(filterId: $filterId, body: $body) {
      ...Filter
    }
  }
`;

export default UPDATE_FILTER_TEXT_FORMATTER;
