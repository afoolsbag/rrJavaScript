# zhengrr 所知的 JavaScript

[*GitHub Pages*](https://afoolsbag.github.io/rrJavaScript/)

```cmder
%USERPROFILE% λ node <script.js>  :: 运行脚本
%USERPROFILE% λ node              :: 交互式 Node.js 壳层

%USERPROFILE% λ npm config list  :: 列出配置
:: abbr.        npm c list
%USERPROFILE% λ npm config edit  :: 编辑配置
:: abbr.        npm c edit

%USERPROFILE% λ npm set registry https://registry.npm.taobao.org/
:: 或者
%USERPROFILE% λ npm install --global nrm
:: abbr.        npm i -g nrm
%USERPROFILE% λ nrm ls
%USERPROFILE% λ nrm use <registry>

%USERPROFILE% λ npm update --global npm           :: 升级 npm
:: abbr.        npm up -g npm
%USERPROFILE% λ npm list --global                 :: 列出已安装的包
:: abbr.        npm ls -g
%USERPROFILE% λ npm search <package>              :: 搜索包
:: abbr.        npm s <package>
%USERPROFILE% λ npm install --global <package>    :: 安装包
:: abbr.        npm i -g <package>
%USERPROFILE% λ npm update --global <package>     :: 升级包
:: abbr.        npm up -g <package>
%USERPROFILE% λ npm uninstall --global <package>  :: 卸载包
:: abbr.        npm r -g <package>

:: 升级 Node.js
:: https://github.com/nvm-sh/nvm
:: https://github.com/coreybutler/nvm-windows
%USERPROFILE% λ nvm node_mirror https://npm.taobao.org/mirrors/node/
%USERPROFILE% λ nvm npm_mirror https://npm.taobao.org/mirrors/npm/
%USERPROFILE% λ nvm list available
%USERPROFILE% λ nvm install <version>
%USERPROFILE% λ nvm use <version>
```

## Awesome

| [*Awesome HTML5*](https://github.com/diegocard/awesome-html5)
| [*Awesome CSS*](https://github.com/awesome-css-group/awesome-css)

| [*Less*](http://lesscss.org/)
| [*Sass*](https://sass-lang.com/)
| [*Stylus*](http://stylus-lang.com/)

| [*Babel*](https://babeljs.io/) <sub>
      [*cmn-hans*](https://babeljs.cn/) </sub>
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
      [*zh_cn *](https://github.com/pingfangx/jetbrains-in-chinese/tree/master/WebStorm) </sub>

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
