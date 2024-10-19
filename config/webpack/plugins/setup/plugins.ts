import { Configuration } from 'webpack';

import { getHtmlWebpackPlugin } from '../get/htmlWebpackPlugin';
import { getMiniCssExtractPlugin } from '../get/miniCssExtractPlugin';
import { getProgressPlugin } from '../get/progressPlugin';
import { SetupOptions } from '../../lib/types';
import { getBundleAnalyzerPlugin } from '../get/bundleAnalyzerPlugin';
import { getDefinePlugin } from '../get/definePlugin';
import { getForkTsCheckerWebpackPlugin } from '../get/forkTsCheckerWebpackPlugin';
import { getReactRefreshWebpackPlugin } from '../get/reactRefreshWebpackPlugin';

export const setupPlugins = ({
  mode,
  paths: { template, publicPath },
  analyzer,
  device
}: SetupOptions): Configuration['plugins'] => {
  const devMode = mode === 'development';

  return [
    getHtmlWebpackPlugin(template, publicPath),
    getDefinePlugin(device),
    getForkTsCheckerWebpackPlugin(),
    ...(devMode ? [getProgressPlugin()] : [getMiniCssExtractPlugin()]),
    ...(devMode ? [getReactRefreshWebpackPlugin()] : []),
    ...(analyzer ? [getBundleAnalyzerPlugin()] : [])
  ];
};
