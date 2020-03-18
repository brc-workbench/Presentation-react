const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setPath = function (folderName) {
  return path.join(__dirname, '..', folderName);
};

const webpackConfiguration = {
  entry: setPath('src/index.tsx'),
  output: {
    path: setPath('dist'),
    filename: 'assets/js/[name]-bundle.js',
    publicPath: '/',
    chunkFilename: 'assets/js/[name].chunk.js',
    pathinfo: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      app: setPath('src'),
      assets: setPath('assets'),
      // From DevExtreme documentation
      globalize$: path.resolve( __dirname, "node_modules/globalize/dist/globalize.js" ),
      globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
      cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
      cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
              minimize: false
            }
          },
          {
            loader: 'markup-inline-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true
                  },
                  {
                    removeUselessStrokeAndFill: false
                  },
                  {
                    removeUnknownsAndDefaults: false
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/fonts/, /node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2|svg)$/,
        exclude: [/images/, /node_modules/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: setPath("src/index.html"),
      filename: "index.html"
    })
  ]
};

module.exports = webpackConfiguration;