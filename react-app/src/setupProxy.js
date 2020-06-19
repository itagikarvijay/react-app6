const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    console.log('setting up proxies')
    app.use(
        '/api/users',
        proxy({
            target: 'http://localhost:8181',
            changeOrigin: true,
        
            secure: false,
            logLevel: "debug"
        }),
    );
};