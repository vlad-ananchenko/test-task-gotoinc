import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getCssModuleLoader = (devMode: boolean): RuleSetRule => ({
  test: /\.module\.css$/i,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: devMode ? '[path][name]__[local]' : '[hash:base64:8]'
        }
      }
    }
  ]
});
