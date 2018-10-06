const PROXY_CONFIG = [
  {
    context: [
      '/api/'
    ],
    target: 'https://api.exchangeratesapi.io/',
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
