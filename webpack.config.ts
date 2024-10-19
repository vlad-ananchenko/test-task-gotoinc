import { Configuration } from 'webpack';

import configureWebpack from './config/webpack/configureWebpack';
import { Env, Mode, PROD, getSetupOptionsPaths } from './config/webpack/lib';

export default (env: Env) => {
  const port = env.port || '3000';
  const mode: Mode = env[PROD] ? 'production' : 'development';
  const analyzer = env.analyzer;
  const paths = getSetupOptionsPaths(__dirname);
  const device = env.device || 'desktop';

  const options = {
    port,
    mode,
    paths,
    analyzer,
    device
  };

  const config: Configuration = configureWebpack(options);

  return config;
};
