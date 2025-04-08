// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            AutoImport({
                imports: [
                    'vue',
                    {
                        'element-plus': [
                            'ElMessage' // 需要自动导入的组件
                        ]
                    }
                ],
                dts: true // 生成自动导入的类型声明文件
            })
        ]
    },
    chainWebpack(config) {
        // 原有Univer配置保持不变
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

        config.module.rule('css').exclude.add(/@univerjs[\\/]presets/)

        config.plugin('define').tap((definitions) => {
            Object.assign(definitions[0], {
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
            })
            return definitions
        })
    }
})