const merge = require("webpack-merge");
const PostCompile = require("post-compile-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Version = require("node-version-assets");
const common = require("./webpack.common.js");

const postCSSPlugins = [
  require("postcss-easy-import")({ prefix: "_" }),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-color-function"),
  require("postcss-hexrgba"),
  require("autoprefixer"),
  require("cssnano")
];

module.exports = env => {
  const opt = env || {};

  return merge(common, {
    mode: "production",
    plugins: opt.deploy && [
      new PostCompile(() => {
        new Version({
          assets: [
            "./src/public/_compiled/main.css",
            "./src/public/_compiled/main.js",
            "./src/public/_compiled/vendors~main.js",
            "./src/public/_compiled/runtime~main.js"
          ],
          grepFiles: ["./src/templates/_layout.html"]
        }).run();
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: postCSSPlugins
              }
            }
          ]
        }
      ]
    }
  });
};
