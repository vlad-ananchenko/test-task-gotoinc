import { Configuration } from 'webpack';

import { DEV, PORT, PROD } from './constants';

type Port = '3000' | '5000' | '8000';

export type Device = 'mobile' | 'desktop';

type Paths = {
  entry: string;
  template: string;
  output: string;
  src: string;
  publicPath: string;
};

export type Mode = Extract<Configuration['mode'], 'development' | 'production'>;

export interface Env {
  WEBPACK_BUNDLE?: boolean;
  WEBPACK_BUILD?: boolean;
  WEBPACK_SERVE?: boolean;
  analyzer?: boolean;
  [DEV]?: boolean;
  [PROD]?: boolean;
  [PORT]?: Port;
  device?: Device;
}

export interface SetupOptions {
  port: Port;
  paths: Paths;
  mode: Mode;
  analyzer?: boolean;
  device: Device;
}
