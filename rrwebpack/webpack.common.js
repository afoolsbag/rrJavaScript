/**
 * @file webpack 通用配置文件
 *
 * @see {@link https://webpack.docschina.org/configuration/}
 *
 * @version 2020-07-22
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
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },

    // 指定代码块运行时
    // https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk
    runtimeChunk: 'single',

    // 指定模块标识规则
    // https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids
    // ......

  },

  // 模块
  // https://webpack.docschina.org/configuration/module/
  module: {
    rules: [

      // 加载样式表
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader',],
      },

      // 加载图像
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: ['file-loader',],
      },

      // 加载字体
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: ['file-loader',],
      },

      // 加载数据
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader',],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader',],
      },

    ],
  },

  // 插件
  // https://webpack.docschina.org/configuration/plugins/
  plugins: [

    // https://github.com/johnagan/clean-webpack-plugin
    // 清理 ./dist
    // ......

    // https://webpack.docschina.org/plugins/html-webpack-plugin/
    // 生成 index.html
    new HtmlWebpackPlugin(),

    // https://webpack.docschina.org/plugins/mini-css-extract-plugin/
    // 提取 CSS
    new MiniCssExtractPlugin(),

  ],

}
