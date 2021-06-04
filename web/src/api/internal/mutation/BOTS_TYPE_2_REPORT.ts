import gql from 'graphql-tag';

const BOTS_TYPE_2_REPORT = gql`
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

export default BOTS_TYPE_2_REPORT;
