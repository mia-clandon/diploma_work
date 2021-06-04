import { useQuery } from '@apollo/client';
import TAGS from '../query/TAGS';

const defaultState = [];

function useTags() {
  const { data: { tags = defaultState } = {}, ...other } = useQuery<{ tags: any }>(TAGS);

  return {
    data: tags,
    ...other,
  };
}

export default useTags;
