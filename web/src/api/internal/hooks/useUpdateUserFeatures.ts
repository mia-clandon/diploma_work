import { useApolloClient } from '@apollo/client';
import { UpdateUserFeaturesDocument } from '../../hooks';

function useUpdateUserFeatures(userId: string, featuresId: string) {
  const client = useApolloClient();

  return async (features: any) => {
    await client.mutate({
      mutation: UpdateUserFeaturesDocument,
      variables: { userId, featuresId, features },
      update: (cache, response) =>
        cache.modify({
          id: `UserInfo:${userId}`,
          fields: { features: () => response.data.admin.updateUserFeatures.features },
        }),
    });
  };
}

export default useUpdateUserFeatures;
