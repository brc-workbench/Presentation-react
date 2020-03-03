const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
//const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safeParser = require('postcss-safe-parser');

const setPath = function(folderName) {
  return path.join(__dirname, '..', folderName);
};

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  entry: setPath("src/index.tsx"),
  output: {
    path: setPath("dist"),
    publicPath: "public/assets/",
    filename: "bundle.js"
  },
  devServer: {
      inline: true,
      contentBase: setPath("dist"),
      // historyApiFallback: true,
      port: 3000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      app: setPath('src'),
      assets: setPath('assets')
    }
  },
  optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                  name: "styles",
                  test: /\.css$/,
                  chunks: "all",
                  enforce: true
                }
            }
        },
        minimizer: [
          new OptimizeCSSAssetsPlugin({
              cssProcessor: require('cssnano'),
              cssProcessorOptions: {
                  safe: true,
                  parser: safeParser
              },
              cssProcessorPluginOptions: {
                  preset: [
                      'default',
                      {
                          reduceInitial: false
                      }
                  ]
              },
              canPrint: true
          })
      ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"},
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      { test: /\.(sa|sc|c)ss$/, 
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/"
            }
          },
          'css-loader',
          {
              loader: 'postcss-loader',
              options: {
                  plugins: loader => [
                      require('autoprefixer')({
                          grid: true
                      })
                  ]
              }
          },
          "postcss-loader",
          "sass-loader"          
        ]
      }
    ]
  },
  plugins:[
      new HtmlWebPackPlugin({
          template: setPath("src/index.html"),
          filename: "index.html"
      }),
      new MiniCssExtractPlugin({filename: "app.css"})
  ]
  };