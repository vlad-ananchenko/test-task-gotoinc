import { Configuration } from 'webpack';

import { getExtensions } from '../get/extensions';
import { SetupOptions } from '../../lib/types';
import { getAliases } from '../get/aliases';

export const setupResolvers = (options: SetupOptions): Configuration['resolve'] => {
  return {
    extensions: getExtensions(),
    alias: getAliases(options)
  };
};
