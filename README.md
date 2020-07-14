# zhengrr 所知的 JavaScript

官网 <https://developer.mozilla.org/docs/Web/JavaScript>，JavaScript 始于 1995 年。

| Version        | Release | Standard |
|:-------------- |:------- |:-------- |
| ECMA-262       | -       | [*ECMA-262*](http://ecma-international.org/publications/standards/Ecma-262.htm)
| ECMAScript 10  | 2019-06 |
| ECMAScript 9   | 2018-06 |
| ECMAScript 8   | 2017-06 |
| ECMAScript 7   | 2016-06 |
| ECMAScript 6   | 2015-06 |
| ECMAScript 5.1 | 2011-06 | [*ISO/IEC 16262:2011*](https://iso.org/standard/55755.html)
| ECMAScript 5   | 2009-12 |
| ECMAScript 4   | -       |
| ECMAScript 3   | 1999-12 |
| ECMAScript 2   | 1998-06 | [*ISO/IEC 16262:1998*](https://iso.org/standard/29696.html)
| ECMAScript     | 1997-06 |

## 参考

*   MDN 上的 [*JavaScript 参考*](https://developer.mozilla.org/docs/Web/JavaScript/Reference)

## 风格

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

适用于 JavaScript 的 API 文档生成工具 [*JSDoc*](http://jsdoc.app/)。

## 指南

*   MDN 上的 [*JavaScript 指南*](https://developer.mozilla.org/docs/Web/JavaScript/Guide)
*   廖雪峰的官方网站上的 [*JavaScript 教程*](https://liaoxuefeng.com/wiki/1022910821149312)

## Awesome

[*Awesome HTML5*](https://github.com/diegocard/awesome-html5)，
[*Awesome JavaScript*](https://github.com/sorrycc/awesome-javascript)，
[*Awesome CSS*](https://github.com/awesome-css-group/awesome-css)。

*   [*webpack*](https://webpack.js.org/) <sub>
        [*cmn-Hans*](https://webpackjs.com/) </sub>
*   [*gulp.js*](https://gulpjs.com/) <sub>
        [*cmn-Hans*](https://gulpjs.com.cn/) </sub>
*   [*Browserify*](http://browserify.org/)
*   [*grunt.js*](https://gruntjs.com/)

*   [*Babel*](https://babeljs.io/) <sub>
        [*cmn-Hans*](https://babeljs.cn/) </sub>
*   [*ESLint*](https://eslint.org/) <sub>
        [*cmn-Hans*](https://eslint.bootcss.com/) </sub>
*   [*Jest*](https://jestjs.io/) <sub>
        [*zh-Hans*](https://jestjs.io/zh-Hans/)

| [*Less*](http://lesscss.org/)
| [*Sass*](https://sass-lang.com/)
| [*Stylus*](http://stylus-lang.com/)

| [*Babel*](https://babeljs.io/) <sub>
      [*cmn-Hans*](https://babeljs.cn/) </sub>
| [*CoffeeScript*](https://coffeescript.org/)

| [*SRI Hash Generator*](https://www.srihash.org)
| [*Bootstrap*](https://getbootstrap.com/) <sub>
      [*-中文网*](http://www.bootcss.com/) </sub>
| [*Dart*](https://dartlang.org/)
| [*CoffeeScript*](https://coffeescript.org/)
| [*Font Awesome*](https://fontawesome.com/)
| [*Grunt*](https://gruntjs.com/)
| [*gulp*](https://gulpjs.com/)
| [*Jest*](https://jestjs.io/)
| [*jQuery*](https://jquery.com/)
| [*Vue*](https://vuejs.org/)
| [*WebStorm*](https://jetbrains.com/webstorm/) <sub>
      [*zh_CN*](https://github.com/pingfangx/jetbrains-in-chinese/tree/master/WebStorm) </sub>

### Node.js 版本管理器 nvm

[*nvm 官网*](https://github.com/nvm-sh/nvm)，
[*nvm-windows 官网*](https://github.com/coreybutler/nvm-windows)。

```cmder
:: 使用 Scoop 安装 nvm
%USERPROFILE% λ scoop install nvm

:: 为 nvm 配置 Node.js 和 npm 镜像
%USERPROFILE% λ nvm node_mirror https://npm.taobao.org/mirrors/node/
%USERPROFILE% λ nvm npm_mirror https://npm.taobao.org/mirrors/npm/

:: 列出可用版本
%USERPROFILE% λ nvm list available

:: 下载某版本
%USERPROFILE% λ nvm install {<version> | latest}

:: 列出已安装版本
%USERPROFILE% λ nvm list

:: 使用某版本
%USERPROFILE% λ nvm use <version>
```

### 基于 Chrome V8 引擎的 JavaScript 运行时 Node.js

[*Node.js 官网*](https://nodejs.org/)。

```cmder
:: 交互式壳层
%USERPROFILE% λ node

:: 运行脚本
%USERPROFILE% λ node <script.js>
```

### Node.js 包管理器 npm

[*npm 官网*](https://npmjs.com/)。

```cmder
:: 列出配置
%USERPROFILE% λ npm config list
:: abbr.        npm c ls

:: 编辑配置
%USERPROFILE% λ npm config edit
:: abbr.        npm c edit

:: 设置安装位置
%USERPROFILE% λ npm config set prefix "%APPDATA%\npm"
:: abbr.        npm set prefix "%APPDATA%\npm"
%USERPROFILE% λ npm config set cache "%APPDATA\npm-cache"
:: abbr.        npm set cache "%APPDATA%\npm-cache"

:: 设置镜像源
%USERPROFILE% λ npm config set registry https://registry.npm.taobao.org/
:: abbr.        npm set registry https://registry.npm.taobao.org/

:: 或者通过 npm 注册源管理器 nrm 来管理注册源
%USERPROFILE% λ npm install --global nrm
:: abbr.        npm i -g nrm
%USERPROFILE% λ nrm ls
%USERPROFILE% λ nrm use <registry>

:: 升级 npm
%USERPROFILE% λ npm update --global npm
:: abbr.        npm up -g npm

:: 列出已安装的包
%USERPROFILE% λ npm list --global
:: abbr.        npm ls -g

:: 搜索包
%USERPROFILE% λ npm search <package>
:: abbr.        npm s <package>

:: 安装包
%USERPROFILE% λ npm install --global <package>
:: abbr.        npm i -g <package>

:: 升级包
%USERPROFILE% λ npm update --global <package>
:: abbr.        npm up -g <package>

:: 卸载包
%USERPROFILE% λ npm remove --global <package>
:: abbr.        npm r -g <package>
```

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
