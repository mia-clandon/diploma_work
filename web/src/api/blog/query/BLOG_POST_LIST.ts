import gql from 'graphql-tag';

const BLOG_POST_LIST = gql`
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

export default BLOG_POST_LIST;
