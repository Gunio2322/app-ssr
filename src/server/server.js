const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { HelmetProvider } = require('react-helmet-async');
const App = require('../client/App').default;

const app = express();
console.log('Starting server...');

// Middleware do obsługi plików statycznych
app.use('/static', express.static(path.resolve(__dirname, '../../public/static')));
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/static/favicon.ico'));
});

app.get('*', (req, res) => {
    const helmetContext = {};

    const reactApp = ReactDOMServer.renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </HelmetProvider>
    );

    const { helmet } = helmetContext;

    console.log('Helmet title:', helmet.title.toString());
    console.log('Helmet meta:', helmet.meta.toString());

    const htmlTemplate = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), 'utf8');
    const finalHtml = htmlTemplate
        .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        .replace('<title></title>', helmet.title.toString())
        .replace('<meta name="description" content="">', helmet.meta.toString());

    res.send(finalHtml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
