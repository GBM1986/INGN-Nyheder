import { defineConfig } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api-eu-west-2.hygraph.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '/v2/cluuox3gu0k1b07uwljj3mntl/master' },
      },
    },
  },
});
