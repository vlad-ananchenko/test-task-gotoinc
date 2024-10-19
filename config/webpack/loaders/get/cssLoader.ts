import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getCssLoader = (devMode: boolean): RuleSetRule => ({
  test: /\.css$/i,
  exclude: /\.module\.css$/,
  use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
});
