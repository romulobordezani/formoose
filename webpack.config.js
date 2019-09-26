const path = require('path');

const serverConfig = {
    entry: './src/index.ts',
    target: 'node',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Formoose',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    optimization: {
        minimize: false
    }
};

module.exports = serverConfig;

