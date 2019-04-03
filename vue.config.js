module.exports = {
  publicPath: '/linkedin/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/custom.scss";`
      }
    }
  }
}