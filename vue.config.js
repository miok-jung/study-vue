// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: "/study-vue",
  outputDir: "docs",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variabled.scss";`,
      },
    },
  },
};
