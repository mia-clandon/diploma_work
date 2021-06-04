import React from 'react';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import createStore from '@muzikanto/observable/createStore';
import useStore from '@muzikanto/observable/useStore';
import USER_SETTINGS from '../query/USER_SETTINGS';
import UPDATE_USER_SETTINGS from '../query/UPDATE_USER_SETTINGS';
import useUser from './useUser';

const initialState = {
  openDrawer: true,
  feedsLayout: 'list',
  feedsOrder: 'DESC',
  feedsOrderBy: 'createdAt',
  feedsLimit: 10,
  bundlesLayout: 'list',
  bundlesOrder: 'DESC',
  bundlesOrderBy: 'createdAt',
  bundlesLimit: 10,
  collectionsLayout: 'grid',
  collectionsOrder: 'DESC',
  collectionsOrderBy: 'createdAt',
  collectionsLimit: 10,
  themeStyle: 'light',
};

const store = createStore(initialState);
const isInitialUpdate = createStore(true);

// TODO need refactoring this

function useUserSettings() {
  const { cache } = useApolloClient();
  let defaultState;
  try {
    defaultState = (cache.readQuery<any>({ query: USER_SETTINGS }) || {}).userSettings;
    if (defaultState.openDrawer === null) {
      defaultState = initialState;
    }
  } catch (e) {
    defaultState = initialState;
  }

  const {
    data: { user },
  } = useUser();
  const { data: { userSettings = null } = {}, error, loading } = useQuery(USER_SETTINGS) || {};

  React.useEffect(() => {
    if (isInitialUpdate.get()) {
      const st = user ? defaultState || userSettings || initialState : initialState;

      store.set(st);
      isInitialUpdate.set(false);
    }
  }, [userSettings]);

  const state = useStore(store);

  const [update] = useMutation(UPDATE_USER_SETTINGS);

  const change = (variables, options = {}) => {
    store.set({ ...store.get(), ...variables });

    if (user) {
      update({ variables, ...options }).then();
    }
  };

  return {
    error,
    loading,

    change,
    // state: localState,

    state: isInitialUpdate.get() ? defaultState || userSettings || initialState : state,
  };
}

export default useUserSettings;
