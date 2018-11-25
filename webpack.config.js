module.exports = {
    mode: 'development',
    entry: {
        main:'./app/static/js/index.js',
        main2: './app/static/js/result/index2.js'
},
    output: {
        publicPath: 'http://127.0.0.1:8080/'
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
                use: ['style-loader','css-loader'],
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
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}