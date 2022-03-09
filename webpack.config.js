const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const htmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const navbarAndFooter = ['index.html', "about.html", "contact.html", "margaretPizza.html", "chikenPizza.html", "vegetablePizza.html"];
module.exports = {

    entry: {
        'app': './src/index.js',
        "./assets/js/formValidation.js": "./src/assets/js/formValidation.js",
        "./assets/js/productForm.js": "./src/assets/js/productForm.js",
        "./assets/js/productDetails.js": "./src/assets/js/productDetails.js"

    },

    output: {
      publicPath: '/',
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },

    devServer: {
      contentBase: path.join(__dirname, "build"),
      host: "192.168.1.10",
      open: true,
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
          filename: "index.html",
          chunks: ["app"]
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/margaretPizza.html",
          filename: "margaretPizza.html",
          chunks: ["app", "./assets/js/productForm.js", "./assets/js/productDetails.js"]
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/chikenPizza.html",
          filename: "chikenPizza.html",
          chunks: ["app", "./assets/js/productForm.js", "./assets/js/productDetails.js"]
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/vegetablePizza.html",
          filename: "vegetablePizza.html",
          chunks: ["app", "./assets/js/productForm.js", "./assets/js/productDetails.js"]
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/about.html",
          filename: "about.html",
          chunks: ["app"]
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/contact.html",
          filename: "contact.html",
          chunks: ["app", "./assets/js/formValidation.js"]
        }),

        // html partials
        new htmlWebpackPartialsPlugin({
          path: path.join(__dirname, "./src/components/navbar.html"),
          location: 'navbar',
          template_filename: navbarAndFooter
        }),
        new htmlWebpackPartialsPlugin({
          path: path.join(__dirname, "./src/components/footerPage.html"),
          location: 'footerPage',
          template_filename: navbarAndFooter
        }),
        new htmlWebpackPartialsPlugin({
          path: path.join(__dirname, "./src/components/form.html"),
          location: 'formContent',
          template_filename: ["contact.html"]
        }),
        new htmlWebpackPartialsPlugin({
          path: path.join(__dirname, "./src/components/relatedProducts.html"),
          location: 'related',
          template_filename: ["margaretPizza.html", "chikenPizza.html", "vegetablePizza.html"]
        }),

        // CSS
        new optimizeCssAssetsWebpackPlugin({}),
        new miniCssExtractPlugin({
            filename: "assets/css/style.css"
        })
    ]
};
