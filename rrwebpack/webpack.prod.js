/**
 * @file webpack 生产模式配置文件
 *
 * @see {@link https://webpack.docschina.org/configuration/}
 *
 * @version 2020-07-22
 * @since 2020-07-21
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {

  // 模式
  // 告知 webpack 使用相应的内置优化
  // https://webpack.docschina.org/configuration/mode/
  mode: 'production',

  // 开发工具
  // 生成源码映射
  // https://webpack.docschina.org/configuration/devtool/
  devtool: 'source-map',

  // 输出
  // https://webpack.docschina.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },

  // 优化
  // https://webpack.docschina.org/configuration/optimization/
  optimization: {

    // 指定模块标识规则
    // https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids
    moduleIds: 'hashed',

  },

  // 插件
  // https://webpack.docschina.org/configuration/plugins/
  plugins: [

    // https://github.com/johnagan/clean-webpack-plugin
    // 清理 ./dist
    new CleanWebpackPlugin(),

  ],

})
