import { useRouter } from 'next/router';
import { useGroupQuery } from '../../hooks';

function useBundle(bundleId?: string) {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data: { group = null } = {}, ...other } = useGroupQuery({
    variables: { id: bundleId || id },
  });

  return {
    id: bundleId || id,
    ...other,
    data: {
      group,
    },
  };
}

export default useBundle;
