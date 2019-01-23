const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const options = {
    publicPath: '/',
    hot: true,
    host: '127.0.0.1'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev-server 5000');
    console.log(options.publicPath);
});