import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getScssLoader = (devMode: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { modules: true } },
    'sass-loader'
  ]
});
