const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safeParser = require('postcss-safe-parser');

const webpackConfiguration = {
    devtool: 'source-map',
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
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    exclude: /\.built\.js$/,
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false
                }
            }),

            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    parser: safeParser,
                    discardComments: {
                        removeAll: true
                    }
                },
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
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
            {
                test: /\.(sa|sc|c)ss$/, 
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: loader => [require('autoprefixer')()]
                        }
                    },
                    'fast-sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({filename: "app.css"}),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            generateStatsFile: true,
            statsOptions: { source: false },
            openAnalyzer: false
        })
    ]
};

module.exports = merge(baseConfig, webpackConfiguration);