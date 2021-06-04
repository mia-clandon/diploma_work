import gql from 'graphql-tag';

const SITE_HTML = gql`
  query siteHtml($site: String!) {
    siteHtml(site: $site) {
      body
    }
  }
`;

export default SITE_HTML;
