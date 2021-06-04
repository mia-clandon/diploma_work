import gql from 'graphql-tag';

const TAG_CREATE = gql`
  mutation createTag($label: String!, $resourceId: ID, $resourceType: TagResourceTypeEnum) {
    createTag(label: $label, resourceId: $resourceId, resourceType: $resourceType) {
      tag {
        id
        label
      }
      featureTag {
        id
        tag {
          id
          label
        }
        tagId
      }
    }
  }
`;

export default TAG_CREATE;
