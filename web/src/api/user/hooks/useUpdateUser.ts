import { useMutation } from '@apollo/client';
import USER_UPDATE from '../query/USER_UPDATE';
import { UserDocument } from '../../hooks';

interface UpdateUserState {
  firstName: string;
  lastName: string;
  companyName: string;
}

const useUpdateUser = () => {
  const [updateUserMutation] = useMutation(USER_UPDATE);

  return async (state: UpdateUserState) => {
    const {
      data: { updateUser },
    } = await updateUserMutation({ variables: state, refetchQueries: [{ query: UserDocument }] });

    return updateUser;
  };
};

export default useUpdateUser;
