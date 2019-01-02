module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  baseUrl: '/',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8012',
        changeOrigin: true
      }
    }
  }
}
