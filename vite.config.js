import path from 'node:path'
import shopify from 'vite-plugin-shopify'
import shopifyAssets from 'vite-plugin-shopify-assets'
import shopifyClean from '@by-association-only/vite-plugin-shopify-clean'

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend'),
    },
  },
  build: {
    emptyOutDir: false,
  },
  plugins: [shopify(), shopifyAssets(), shopifyClean()],
  server: {
    cors: {
      origin: [
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
        'https://mnwdd.myshopify.com',
      ],
    },
  },
}
