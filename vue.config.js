// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pwa: {
    name: "study-vue",
    themeColor: "#4dba87",
    msTileColor: "#000",
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, "index.html"],
    },
  },
  publicPath: "/study-vue",
  outputDir: "docs",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variabled.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
};
