const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('../../dist/client/App').default;

const app = express();

app.use((req, res, next) => {
    console.log('Static file request:', req.url);
    next();
});

// Serve static files from the public directory
app.use(express.static(path.resolve(__dirname, '../../public')));



// Handle all requests
app.get('*', (req, res) => {
    console.log('Rendering URL:', req.url);
    const htmlTemplate = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), 'utf8');
    const context = {}; // Context for StaticRouter
    const reactApp = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const finalHtml = htmlTemplate.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`);
    res.send(finalHtml);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
