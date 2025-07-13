// webpack.config.mjs
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => {
  return {
    entry: {
      index: './src/index.tsx',
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]-[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: { icon: true, typescript: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('public', 'index.html'),
      }),
    ],
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    output: {
      filename: '[name].js',
      assetModuleFilename: '[name].[ext]',
      path: path.resolve('dist'),
      clean: true,
    },
  };
};
