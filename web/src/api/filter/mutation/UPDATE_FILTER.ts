import gql from 'graphql-tag';

const UPDATE_FILTER = gql`
  mutation updateFilter($filter: FilterInput) {
    updateFilter(filter: $filter) {
      ...Filter
    }
  }
`;

export default UPDATE_FILTER;
