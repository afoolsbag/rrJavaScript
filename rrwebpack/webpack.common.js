/**
 * @file webpack 通用配置文件
 *
 * @see {@link https://webpack.docschina.org/configuration/}
 *
 * @version 2020-12-10
 * @since 2020-07-21
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  // 模式
  // 告知 webpack 使用相应的内置优化
  // https://webpack.docschina.org/configuration/mode/
  // ......

  // 开发工具
  // 生成源码映射
  // https://webpack.docschina.org/configuration/devtool/
  // ......

  // 开发服务器
  // https://webpack.docschina.org/configuration/dev-server/
  // ......

  // 入口
  // https://webpack.docschina.org/configuration/entry-context/
  entry: {
    index: './src/index.js',
    another: './src/another.js'
  },

  // 输出
  // https://webpack.docschina.org/configuration/output/
  // ......

  // 优化
  // https://webpack.docschina.org/configuration/optimization/
  optimization: {

    // 分割代码块以重用
    // https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks
    splitChunks: {
      // 尽可能分割代码块
      chunks: 'all',
      // 将第三方库分割到同一代码块
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },

    // 指定代码块运行时
    // https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk
    runtimeChunk: 'single'

    // 指定模块标识规则
    // https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids
    // ......

  },

  // 模块
  // https://webpack.docschina.org/configuration/module/
  module: {
    rules: [

      // 加载语言

      // ECMAScript, AME Module, CommonJS Module
      // 原生支持

      // ESNext (Babel)
      // https://webpack.docschina.org/loaders/babel-loader/
      // npm i @babel/core @babel/preset-env babel-loader -D
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // TypeScript
      // https://github.com/TypeStrong/ts-loader
      // npm i typescript ts-loader -D
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader'
      },

      // 加载样式表

      // CSS
      // https://webpack.docschina.org/loaders/css-loader/
      // npm i css-loader -D
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      // Sass
      // https://webpack.docschina.org/loaders/sass-loader/
      // npm i sass sass-loader -D
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },

      // 加载资源
      // https://webpack.docschina.org/loaders/file-loader/
      // npm i file-loader -D

      // 图像
      {
        test: /\.(gif|jpg|png|svg)$/i,
        use: ['file-loader']
      },

      // 字体
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        use: ['file-loader']
      }

    ]
  },

  // 解析
  // https://webpack.docschina.org/configuration/resolve/
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  // 插件
  // https://webpack.docschina.org/configuration/plugins/
  plugins: [

    // https://github.com/johnagan/clean-webpack-plugin
    // 清理 ./dist
    // ......

    // 生成 index.html
    // https://webpack.docschina.org/plugins/html-webpack-plugin/
    // npm i html-webpack-plugin -D
    new HtmlWebpackPlugin(),

    // 提取 CSS
    // https://webpack.docschina.org/plugins/mini-css-extract-plugin/
    // npm install mini-css-extract-plugin -D
    new MiniCssExtractPlugin()

  ]

}
