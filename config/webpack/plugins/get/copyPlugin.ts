import CopyPlugin from 'copy-webpack-plugin';

// This plugin is currently not in use
export const getCopyPlugin = () =>
  new CopyPlugin({
    patterns: []
  });
//
