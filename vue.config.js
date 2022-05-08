const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    publicPath: './',
    devServer: {
        port: 3000,
        open: true
    },
    configureWebpack: config => {
        config["externals"] = {
          AMap: "AMap" // 高德地图配置
        };
    },
    chainWebpack: (config) => {
        // 第一 增加打包文件大小分析
        if (process.env.use_analyzer) {
          config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
      },
   
}