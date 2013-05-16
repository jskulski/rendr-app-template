// Config settings for NODE_ENV=production

exports.config = {
  assets: {
    minify: true,
    cdn: {
      protocol: 'https',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  apiHosts: {
    "default": {
      host: "api.github.com",
      protocol: "https"
    }
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
