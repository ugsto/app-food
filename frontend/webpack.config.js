const { ProvidePlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

const config = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            process: 'process/browser',
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        }),
        new ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    devServer: {
        open: true,
        host: 'localhost',
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack'),
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = 'development';
    }

    return config;
};
