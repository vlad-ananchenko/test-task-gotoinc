import { Configuration } from 'webpack';

import { setupPlugins } from './plugins/setup/plugins';
import { setupLoaders } from './loaders/setup/loaders';
import { setupResolvers } from './resolvers/setup/resolvers';
import { setupDevServer } from './servers/setup/devServer';
import { SetupOptions } from './lib/types';

const configureWebpack = (options: SetupOptions): Configuration => {
  const { mode, paths } = options;
  const devMode = mode === 'development';

  return {
    mode,
    entry: paths.entry,
    output: {
      publicPath: '/',
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: setupPlugins(options),
    module: {
      rules: setupLoaders(options)
    },
    resolve: setupResolvers(options),
    devtool: devMode ? 'source-map' : false,
    devServer: devMode && setupDevServer(options)
  };
};

export default configureWebpack;
