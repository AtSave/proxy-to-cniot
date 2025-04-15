const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 環境變數 TARGET_URL 決定代理目標
const target = process.env.TARGET_URL || 'https://gc.cniot.vip/#/iot-atsave-';

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  ws: true,
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('Host', 'gc.cniot.vip');
  },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT} -> ${target}`);
});
