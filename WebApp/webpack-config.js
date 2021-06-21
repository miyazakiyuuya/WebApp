
module.exports = {
    devtool: 'source-map',
    entry: './app.tsx',
    mode: 'development',
    output: {
        filename: '../wwwroot/js/app-bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}