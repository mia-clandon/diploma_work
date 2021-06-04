import React from 'react';
import useCollections from './useCollections';
import { Collection } from '../../schemas';

const arr: Collection[] = [];

function useArticleInCollections() {
  const {
    data: { rows = arr },
    loading,
  } = useCollections({
    ssr: false,
  });

  const calc = React.useCallback(
    (articleId?: string) => {
      const entries: Array<Collection & { articleId: string }> = [];
      const noEntries: Collection[] = [];

      if (!articleId) {
        return {
          entries,
          noEntries,
        };
      }

      rows.forEach((collection) => {
        if (collection.items) {
          for (const article of collection.items) {
            if (article.articleReferenceId === articleId || article.id === articleId) {
              entries.push({ ...collection, articleId: article.id });

              return;
            }
          }
        }

        noEntries.push(collection);
      });

      return {
        entries,
        noEntries,
      };
    },
    [rows]
  );

  return {
    getEntries: calc,
    loading,
    data: { rows },
  };
}

export default useArticleInCollections;
