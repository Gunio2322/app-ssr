const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/client/index.js', // Punkt wejścia dla klienta
    target: 'web', // Dla kodu klienta
    output: {
        path: path.resolve(__dirname, 'public/static/js'), // Wyjście dla klienta
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/server/templates/index.html', // Szablon HTML
            filename: 'index.html', // Nazwa pliku wyjściowego
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Obsługiwane rozszerzenia
    },
    mode: 'production', // Tryb produkcyjny


    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        proxy: [
            {
                context: ['/api'], // Ścieżki, które mają być przekierowane
                target: 'http://localhost:5000', // Adres serwera API
                changeOrigin: true, // Zmiana nagłówka `Host` na docelowy serwer
            },
        ],
    },



};