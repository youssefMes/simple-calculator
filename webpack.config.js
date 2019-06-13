var Encore = require("@symfony/webpack-encore");
Encore
  // the project directory where compiled assets will be stored
  .setOutputPath("public/build/")
  // the public path used by the web server to access the previous directory
  .setPublicPath("/build")
  .addEntry("js/app", ["babel-polyfill", "./assets/js/app.js"])
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .configureBabel(() => {}, {
    useBuiltIns: "usage",
    corejs: 3
  })
  .enableReactPreset();
module.exports = Encore.getWebpackConfig();
