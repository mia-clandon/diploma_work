import { ApolloCache } from '@apollo/client/cache/core/cache';
import { CollectionCard } from '../../schemas';
import { defaultDataIdFromObject } from '@apollo/client';

function moveCollectionCard(
  cache: ApolloCache<any>,
  card: CollectionCard,
  fromCollection: string,
  toCollection: string
) {
  const keeFrom = `Collection:${fromCollection}`;
  const keeTo = `Collection:${toCollection}`;

  cache.modify({
    id: keeFrom,
    fields: {
      items: (state, { readField }) => {
        const arr = state
          .filter((itemRef) => readField('id', itemRef) !== card.id)
          .sort((a, b) => (readField('createdAt', a) > readField('createdAt', b) ? -1 : 1));

        return arr;
      },
    },
  });

  cache.modify({
    id: keeTo,
    fields: {
      items: (state, { readField }) => {
        const ref = { __ref: defaultDataIdFromObject({ __typename: 'CollectionCard', ...card }) };
        const items = [ref, ...state].sort((a, b) => (readField('createdAt', a) > readField('createdAt', b) ? -1 : 1));

        return items;
      },
    },
  });
}

export default moveCollectionCard;
