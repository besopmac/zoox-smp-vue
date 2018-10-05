module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_settings.scss";
          @import "@/scss/_tools.scss";
          @import "@/scss/_generic.scss";
          @import "@/scss/_base.scss";
          @import "@/scss/_objects.scss";
          @import "@/scss/_components.scss";
          @import "@/scss/_trumps.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    }
  }
};
