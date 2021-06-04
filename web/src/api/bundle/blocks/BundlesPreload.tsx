import React from 'react';
import PreloadState from '@rssapp/storybook/lab/Util/PreloadState';
import useBundles from '../hooks/useBundles';
import useUserSettings from '../../user/hooks/useUserSettings';
import useBundlesFull from '../hooks/useBundlesFull';

export type MyBundlesPreloadProps = {
  timeout?: number;
};

function BundlesPreload({ timeout }: MyBundlesPreloadProps) {
  return <PreloadState hook={() => useBundlesFull({})} timeout={timeout} />;
}

export default BundlesPreload;
