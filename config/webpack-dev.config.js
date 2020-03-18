const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safeParser = require('postcss-safe-parser');

const webpackConfiguration = {
    devServer: {
        inline: true,
        contentBase: baseConfig.output.path,
        port: 3000
    },
    devtool: 'eval-cheap-module-source-map',
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
            { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
            {
                test: /\.(sa|sc|c)ss$/,
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
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "app.css" })
    ]
};

module.exports = merge(baseConfig, webpackConfiguration);
