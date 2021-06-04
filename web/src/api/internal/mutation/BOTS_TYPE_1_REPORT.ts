import gql from 'graphql-tag';

const BOTS_TYPE_1_REPORT = gql`
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

export default BOTS_TYPE_1_REPORT;
