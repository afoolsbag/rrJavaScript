/**
 * @file Electron 渲染进程
 *
 * @version 2020-07-22
 * @since 2020-07-22
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import $ from 'jquery'
import _ from 'lodash'
import Vue from 'vue'
//import Vuex from 'vuex'
//Vue.use(Vuex)

// 遍历注册 ./components 目录下所有 Vue 组件
// https://cn.vuejs.org/v2/guide/components-registration.html
const requireComponents = require.context('./components', true, /\w+\.vue$/)
requireComponents.keys().forEach(componentPath => {
  const componentConfig = requireComponents(componentPath)
  const componentName = _.upperFirst(_.camelCase(componentPath.split('/').pop().replace(/\.\w+$/, '')))
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// 创建 Vue 实例
let app = new Vue({
  el: '#app',
  template: `
    <div id="app">
      <the-title-bar/>
      <!--<the->-->
      <button-counter/>
    </div>
  `
})
