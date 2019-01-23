const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    entry: {
        app: './src/index.js'
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
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: resolve('dist')
    }
};