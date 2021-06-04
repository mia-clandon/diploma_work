import gql from 'graphql-tag';

const TAGS = gql`
  query tags {
    tags {
      id
      label
    }
  }
`;

export default TAGS;
