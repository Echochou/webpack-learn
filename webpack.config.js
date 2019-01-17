const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve('dist')
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
    }

};