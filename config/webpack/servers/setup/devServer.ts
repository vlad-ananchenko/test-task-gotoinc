import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { SetupOptions } from '../../lib/types';

export const setupDevServer = ({ port, paths }: SetupOptions): DevServerConfiguration => ({
  static: {
    directory: paths.output
  },
  compress: true,
  historyApiFallback: true,
  hot: true,
  port
});
