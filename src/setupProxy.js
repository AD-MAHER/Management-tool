
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  
    app.use('/login', createProxyMiddleware({ target: 'http://10.1.1.20:8080', changeOrigin: true }));
    app.use('/change-password', createProxyMiddleware({ target: 'http://10.1.1.20:8080', changeOrigin: true }));
    app.use('/verify-otp', createProxyMiddleware({ target: 'http://10.1.1.20:8080', changeOrigin: true }));
    app.use('/forgot-password', createProxyMiddleware({ target: 'http://10.1.1.20:8080', changeOrigin: true }));

};
