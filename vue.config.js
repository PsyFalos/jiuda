// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // 精确处理Univer的CSS文件
    config.module.rule('univer-css')
        .test(/@univerjs[\\/]presets[\\/]lib[\\/]styles[\\/]preset-sheets-core\.css$/)
        .use('style-loader')
        .loader('style-loader')
        .end()
        .use('css-loader')
        .loader('css-loader')
        .options({
          importLoaders: 1,
          modules: false
        })

    // 禁用默认的CSS规则对Univer文件的影响
    config.module.rule('css').exclude.add(/@univerjs[\\/]presets/)

    // 原hydration配置保持
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
      })
      return definitions
    })
  }
})