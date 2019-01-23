const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        vendor: [
            'lodash'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 500
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                    }
                ]
            },
            {
                test: /.(csv|tsv)$/,
                use: [
                    {
                        loader: "csv-loader"
                    }
                ]
            },
            {
                test: /.xml$/,
                use: [
                    {
                        loader: "xml-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLWebpackPlugin({
            title: 'webpack-test'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                    chunks: "initial",
                    minChunks: 2,
                    minSize: 0
                },
                vendor: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    minChunks: 1,
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority: 100
                }
            }
        }
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve('dist'),
        publicPath: "/"
    }
};