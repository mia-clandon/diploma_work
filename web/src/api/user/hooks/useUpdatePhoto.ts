import dataURLtoFile from '@rssapp/storybook/lib/file/dataURLtoFile';
import uploadImage from '../../../lib/services/ImagesUploader';

function useUpdatePhoto() {
  return async (base64: string) => {
    const file = dataURLtoFile(base64, 'user_photo.jpg');

    return uploadImage(file, '/api/user/avatar');
  };
}

export default useUpdatePhoto;
