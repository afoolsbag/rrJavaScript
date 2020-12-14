# zhengrr 所知的 Vue.js

[Vue.js](https://vuejs.org/) 是一款开源的 HTML MVVM 框架。

*   [Vue Router](https://router.vuejs.org/)
*   [Vuex](https://vuex.vuejs.org/)
*   [Vue SSR](https://ssr.vuejs.org/)
*   [Vue CLI](https://cli.vuejs.org/)

## 参考

### 指令

|                    | 模板示例                      | 缩写                     |
| ------------------ | ----------------------------- | ------------------------ |
| 文本插值           | `{{ expr }}`                  |
|                    | `<elem v-text="expr">`        |
| 代码插值           | `<elem v-html="expr">`        |
| 属性插值           | `<elem v-bind:attr="expr" />` | `<elem :attr="expr" />`  |
| `display` 属性插值 | `<elem v-show="expr" />`      |
| 条件渲染           | `<elem v-if="expr" />`        |
|                    | `<elem v-else-if="expr" />`   |
|                    | `<elem v-else />`             |
| 列表渲染           | `<elem v-for="tmp in var" />` |
| 事件监听           | `<elem v-on:event="meth" />`  | `<elem @event="meth" />` |
| 双向绑定           | `<elem v-model="var" />`      |

参见：

*   [Directives | Vue.js](https://v3.vuejs.org/api/directives.html)
*   [API — Vue.js § 指令](https://cn.vuejs.org/v2/api/#指令)

## 许可

项目采用 Unlicense 许可，文档采用 CC0-1.0 许可：

<p xmlns:dct="https://purl.org/dc/terms/">
  <a rel="license"
     href="https://creativecommons.org/publicdomain/zero/1.0/">
    <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <span resource="[_:publisher]" rel="dct:publisher">
    <span property="dct:title">zhengrr</span></span>
  has waived all copyright and related or neighboring rights to this work.
</p>
