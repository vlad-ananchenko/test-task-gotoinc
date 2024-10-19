import { ModuleOptions } from 'webpack';

import { getCssLoader } from '../get/cssLoader';
import { getScssLoader } from '../get/scssLoader';
import { getCssModuleLoader } from '../get/cssModuleLoader';
import { getAssetLoader } from '../get/assetLoader';
import { SetupOptions } from '../../lib/types';
import { getSvgrLoader } from '../get/svgrLoader';
import { getBabelLoader } from '../get/babelLoader';

export const setupLoaders = ({ mode }: SetupOptions): ModuleOptions['rules'] => {
  const devMode = mode === 'development';

  return [
    getAssetLoader(),
    getCssModuleLoader(devMode),
    getCssLoader(devMode),
    getScssLoader(devMode),
    getSvgrLoader(),
    getBabelLoader(devMode)
  ];
};
