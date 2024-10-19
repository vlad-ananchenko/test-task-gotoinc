import { DefinePlugin } from 'webpack';

import { Device } from 'config/webpack/lib';

export const getDefinePlugin = (device: Device) => new DefinePlugin({ __DEVICE__: JSON.stringify(device) });
