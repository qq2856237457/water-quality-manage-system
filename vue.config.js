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
    }
}