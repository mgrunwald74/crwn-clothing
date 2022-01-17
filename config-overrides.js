/* config-overrides.js */

module.exports = {
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.client = {
        overlay: {
          errors: true,
          warnings: false
        },
        logging: 'error'
      };
      return config;
    };
  },
};
