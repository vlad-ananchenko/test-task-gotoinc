import path from 'path';

export const getSetupOptionsPaths = (rootDir: string) => ({
  output: path.resolve(rootDir, 'build'),
  entry: path.resolve(rootDir, 'src', 'index.tsx'),
  template: path.resolve(rootDir, 'public', 'index.html'),
  src: path.resolve(rootDir, 'src'),
  publicPath: path.resolve(rootDir, 'public')
});

export const resolveFaviconPath = (dirName: string, fileName = 'favicon.ico') => path.resolve(dirName, fileName);
