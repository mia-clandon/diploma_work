import gql from 'graphql-tag';

const CREATE_PLAN = gql`    
  mutation createPlan($params: CreatePlanInput!) {
    admin {
      createPlan(params: $params) {
        ...AdminPlan
      }
    }
  }

  fragment AdminPlan on AdminPlan {
    id
    name
    price
  }
`;

export default CREATE_PLAN;
