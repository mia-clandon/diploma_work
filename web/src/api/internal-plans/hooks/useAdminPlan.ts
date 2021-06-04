import { useRouter } from 'next/router';
import { usePlanQuery } from '../../hooks';

function useAdminPlan() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data: { admin: { plan = null } = {} } = {}, ...other } = usePlanQuery({ variables: { id } });

  return {
    id,
    data: plan,
    ...other,
  };
}

export default useAdminPlan;
