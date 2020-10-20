/**
 * Merges two webpack config objects into one.  Typically a base object into a dev | prod object.
 */
const { merge } = require('webpack-merge');
/**
 * This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
 *  Further setup of his plug is recommended:  https://www.npmjs.com/package/mini-css-extract-plugin/v/1.1.0
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * A Webpack plugin to optimize \ minimize CSS assets.
 */
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
/**
 * A fault-tolerant CSS parser for PostCSS, which will find & fix syntax errors, capable of parsing any input.
 */
const safeParser = require('postcss-safe-parser');
/**
 * The base webpack config object to be merged
 */
const baseConfig = require('./webpack-base.config.js');
/**
 * Returns the webpack configuration object.
 *   -- env is passed in via the package.json file.  It can be used to determine if the build is being run locally.
 *        EX:  "scripts": "prodLocal": "set NODE_ENV=production && webpack --config config/webpack-dev.config.js --env local"
 *
 *   -- mode can be used from the command line or package.json file.
 *        This is only used to determine how to find the correct config file to launch.  It is not available inside the config file.
 *        EX:  "scripts": "build": "webpack --mode developmnet | production" 

 * @param {object} env - data that can be passed in from the command line / package.json
 */
const webpackConfiguration = (env) => {
    return {
        devServer: {
            inline: true,
            contentBase: baseConfig.output.path,
            port: 3000
        },
        devtool: 'eval-cheap-module-source-map',

        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
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
                { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        'css-loader',
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "app.css" })
        ]
    }
};

module.exports = (env) => merge(baseConfig, webpackConfiguration(env));
