const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/server/server.js', // Główny plik serwera
    target: 'node', // Ustawienie celu na Node.js
    externals: [nodeExternals()], // Wyklucz moduły z node_modules
    output: {
        path: path.resolve(__dirname, 'dist/server'), // Katalog wyjściowy
        filename: 'server.js', // Nazwa pliku wyjściowego
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Obsługa plików .js i .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Transpilacja ES6+ i JSX
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/server/templates/index.html', to: 'templates/index.html' },
            ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Obsługiwane rozszerzenia
    },
    mode: 'production', // Tryb produkcyjny
};