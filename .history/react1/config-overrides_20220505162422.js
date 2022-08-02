const { name } = require("./package");

module.exports = {
  webpack: function override(config, env) {
    // 根据qiankun文档配置
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // 微前端项目中子项目必须支持跨域
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};

