const path = require('path');

module.exports = {
    entry: './src/client/index.js', // Główny plik wejściowy aplikacji
    output: {
        path: path.resolve(__dirname, 'public/static/js'), // Katalog wyjściowy
        filename: 'bundle.js', // Nazwa pliku wyjściowego
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Obsługa plików .js i .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Transpilacja JSX i nowoczesnego JS
                    },
                },
            },
        ],
    },
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
    },
};