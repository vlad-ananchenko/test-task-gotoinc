import HtmlWebpackPlugin from 'html-webpack-plugin';

import { resolveFaviconPath } from '../../lib/helpers';

export const getHtmlWebpackPlugin = (template: string, publicPath: string) =>
  new HtmlWebpackPlugin({ template, favicon: resolveFaviconPath(publicPath) });
