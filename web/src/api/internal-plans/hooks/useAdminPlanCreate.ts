import { useCreatePlanMutation } from '../../hooks';

function useAdminPlanCreate(...args: Parameters<typeof useCreatePlanMutation>) {
  return useCreatePlanMutation(...args);
}

export default useAdminPlanCreate;
