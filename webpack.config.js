const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');

module.exports =
  {
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js'
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9000
    },
    devtool: "source-map",
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        exclude: /(index|catalog|form)\.html$/, //without this the underscore template won't be executed.
        include: path.join(__dirname, 'src/html'),
        use: [{
          loader: "html-loader",
          options: {
            minimize: true,
            interpolate: true,
            attrs: ['img:src', 'source:srcset']
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [
                require("autoprefixer")()
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: 'index',
        template: "./src/html/index.html",
        filename: "./index.html"
      }),
      new HtmlWebPackPlugin({
        title: 'catalog',
        template: "./src/html/catalog.html",
        filename: "./catalog.html"
      }),
      new HtmlWebPackPlugin({
        title: 'form',
        template: "./src/html/form.html",
        filename: "./form.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    ]
  };