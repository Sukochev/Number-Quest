const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main:'./app/static/js/index.js',
        main2: './app/static/js/result/index2.js'
},
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'static/'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                           },
                },
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(wav|ogg|mp3)$/,
                use: 'file-loader'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin('dist'),
    ]
};