import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getMiniCssExtractPlugin = () =>
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[id].[contenthash:8].css'
  });
