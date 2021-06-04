import { useQuery } from '@apollo/client';
import USERS_LIST from '../mutation/USERS_LIST';

function useUsers({ count = 10, search }: { count?: number; search?: string }) {
  const { data: { admin: { users: rows = [] } = {} } = {} } = useQuery<
    {
      admin: { users: any };
    },
    any
  >(USERS_LIST, {
    variables: { count, searchQuery: search },
  });

  return {
    data: rows,
  };
}

export default useUsers;
