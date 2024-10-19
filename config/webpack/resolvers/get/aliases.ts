import { SetupOptions } from '../../lib/types';

export const getAliases = (options: SetupOptions) => ({
  '@': options.paths.src
});
