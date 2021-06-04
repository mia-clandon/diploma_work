import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { UserInformationDocument } from '../../hooks';

function useUser(userId?: string) {
  const router = useRouter();
  const id = userId || (router.query.id as string);

  const { data: { admin: { userInformation: user = null } = {} } = {} } = useQuery<
    {
      admin: { userInformation: any };
    },
    any
  >(UserInformationDocument, {
    variables: { id },
  });
  return {
    id,
    data: user,
  };
}

export default useUser;
