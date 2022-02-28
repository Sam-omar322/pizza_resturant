const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

    entry: {
        'app': './src/index.js'
    },

    output: {
      publicPath: '/',
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },

    devServer: {
      contentBase: path.join(__dirname, "build"),
      host: "192.168.1.15",
      open: true,
      port: 7878,
      writeToDisk: true,
      stats: "errors-only"
    },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader'
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                miniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"

            ]
        },
        {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            exclude: /images/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts',
                    }
                }
            ]
        },
        {
            test: /\.(svg|png|jpe?g|gif)$/,
            exclude: /fonts/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images',
                    }
                }
            ]
        },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/pizza.html",
          filename: "pizza.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/about.html",
          filename: "about.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/contact.html",
          filename: "contact.html"
        }),
        // CSS
        new optimizeCssAssetsWebpackPlugin({}),
        new miniCssExtractPlugin({
            filename: "assets/css/style.css"
        })
    ]
};
