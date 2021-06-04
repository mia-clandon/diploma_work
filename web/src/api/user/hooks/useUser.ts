import * as Apollo from '@apollo/client';
import { useUserQuery } from '../../hooks';
import * as Types from '../../operations';
import { User } from '../../schemas';

function useUser(baseOptions?: Apollo.QueryHookOptions<Types.UserQuery, Types.UserQueryVariables>) {
  const { data: { user = null } = {}, error, loading, refetch } = useUserQuery(baseOptions);

  return {
    error,
    loading,
    refetch,

    data: {
      user: user && user.id ? (user as User) : null,
    },
  };
}

export default useUser;
