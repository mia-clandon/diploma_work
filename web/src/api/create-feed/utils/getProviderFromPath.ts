import getFeedIdFromUrl from '../../../lib/format/link/getFeedId';
import Providers from '../../../config/providers';

const getAppFromPath = (path: string) => {
  const appPath = getFeedIdFromUrl(path);
  return Providers.find((item) => item.path === appPath);
};

export default getAppFromPath;
