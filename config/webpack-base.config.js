const path = require('path');
/**
 * Useful constants
 */
const DEV = 'development';
const PROD = 'production';
/**
 * User can set an environment variable from the command line / package.json
 *    EX: "scripts": "build": "set NODE_ENV=production && webpack --mode development --env local"
 */
const devMode = (process.env.NODE_ENV)
    ? (process.env.NODE_ENV !== PROD)
    : true;
/**
 * HtmlWebPackPlugin
 *  This will rewrite the index.js file to include the <script> tag with the compiled index.bundle.js link.
 */
const HtmlWebPackPlugin = require("html-webpack-plugin");
/**
 * By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/**
 * Constructs a path for source files when the webpack config file is inside a subfolder.
 * In this context, the subfolder is __dirname.  
 *    The path needs to be __dirname/../folderName.
 *    Example based on structure below:   config/../src/index.ts
 * 
 * Folder structure
 *  - src
 *  -- index.ts             <-- folderName
 *  - config                <-- __dirname
 *  -- webpack-dev-config.js
 * @param {string} folderName 
 */
const setPath = function (folderName) {
  return path.join(__dirname, '..', folderName);
};
/**
 * Creates the base configuration object that is then merged with either dev | prod objects.
 */
const webpackConfiguration = {
  mode: (devMode) ? DEV : PROD,
  entry: {
    index: setPath('src/index.tsx')
    //devextremeGrid: setPath('src/components/grid/DevExDataGrid.tsx')
  },
  output: {
    path: setPath('dist'),
    filename: 'assets/js/[name]-bundle.js',
    //publicPath: '/',
    //chunkFilename: 'assets/js/[name].chunk.js',
    //pathinfo: false
  },
  resolve: {
    fallback: { "stream": false },
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      app: setPath('src'),
      assets: setPath('assets'),
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'markup-inline-loader',
            options: {
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { removeUselessStrokeAndFill: false },
                  { removeUnknownsAndDefaults: false }
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
        test: /\.(ttf|otf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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