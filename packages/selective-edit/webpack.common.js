const path = require('path');

module.exports = {
  entry: {
    example: './src/ts/example/example.ts',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
