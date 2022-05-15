//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        //loader: 'url-loader?limit=100000'
        exclude: /\/favicon.ico$/,
        use: {
          loader: 'url-loader?limit=100000'
        }
      }/*,
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      }*/
    ]
  },
  resolve: { modules: ['./src/client', 'node_modules'] },
  devServer: {
    port: 3002,
    open: true,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3003',
      '/hackathon-api': {
        target: 'http://localhost:3003/',
        pathRewrite: { '^/hackathon-api': '' },
        secure: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
