const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(createProxyMiddleware('/auth/google', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/auth/facebook', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/categories/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/products/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/details/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/reviews/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/orders/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/cart/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/users/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/subcategories/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/coupons/*', {target: 'http://localhost:9800'}));
//     app.use(createProxyMiddleware('/contacts/*', {target: 'http://localhost:9800'}));
// };

module.exports = function(app) {
    app.use(createProxyMiddleware('/*', {target: 'http://localhost:9800'}));
};