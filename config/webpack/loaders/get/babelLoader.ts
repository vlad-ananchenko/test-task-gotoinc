export const getBabelLoader = (devMode: boolean) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: devMode ? 'automatic' : 'classic' }]
      ]
    }
  }
});
