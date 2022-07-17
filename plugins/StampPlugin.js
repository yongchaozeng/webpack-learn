const HtmlWebpackPlugin = require("html-webpack-plugin");

class StampPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("StampWebpackPlugin", (compilation) => {
      compilation.hooks.buildModule.tap("StampWebpackPlugin", () => {
        HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tap(
          "StampWebpackPlugin",
          (htmlPluginData) => {
            const name = htmlPluginData?.assets?.js[0];
            const newName = `${name}?${new Date().getTime()}`;
            htmlPluginData.assets.js[0] = newName;
          }
        );
      });
    });
  }
}
module.exports = StampPlugin;
