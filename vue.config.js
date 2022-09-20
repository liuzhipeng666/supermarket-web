const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/base.scss";'
      },
      // postcss: {
      //   plugins: [
      //     // 'postcss-preset-env',
      //     // {
      //     //   ident: "postcss"
      //     // },
      //     require('postcss-pxtorem')({
      //       rootValue: 100,
      //       propList: ['*'],
      //       exclude: ['node_modules']
      //     }),
      //     // require('autoprefixer')()
      //   ]
      // }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
})
// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: '@import "~@/assets/scss/base.scss";'
//       }
//     }
//   },
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:7001',
//         changeOrigin: true
//       }
//     }
//   }
// }
