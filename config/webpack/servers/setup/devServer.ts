import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { SetupOptions } from '../../lib/types';

export const setupDevServer = ({ port }: SetupOptions): DevServerConfiguration => ({
  compress: true,
  historyApiFallback: true,
  hot: true,
  port
});
