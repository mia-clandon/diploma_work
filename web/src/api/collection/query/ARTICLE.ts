import gql from 'graphql-tag';

const ARTICLE = gql`
  query getCollectionArticle($url: String!) {
    getCollectionArticle(url: $url) {
      ...CollectionCardParsed
    }
  }

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

export default ARTICLE;
