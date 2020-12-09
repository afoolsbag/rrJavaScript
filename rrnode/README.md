# zhengrr 所知的 Node.js

[Node.js](https://nodejs.org/) 是基于 Chrome V8 引擎的 JavaScript 运行时。

``` batch
:: 交互式壳层
%USERPROFILE%> node

:: 运行脚本
%USERPROFILE%> node <script.js>
```

## Awesome

*   [ts-node](https://github.com/TypeStrong/ts-node)

### Node.js 版本管理器 nvm

``` batch
:: 使用 Scoop 安装 nvm
%USERPROFILE%> scoop install nvm

:: 为 nvm 配置 Node.js 和 npm 镜像
%USERPROFILE%> nvm node_mirror https://npm.taobao.org/mirrors/node/
%USERPROFILE%> nvm npm_mirror https://npm.taobao.org/mirrors/npm/

:: 列出可用版本
%USERPROFILE%> nvm list available

:: 下载某版本
%USERPROFILE%> nvm install {<version> | latest}

:: 列出已安装版本
%USERPROFILE%> nvm list

:: 使用某版本
%USERPROFILE%> nvm use <version>
```

参见：

*   [nvm: Node Version Manager](https://github.com/nvm-sh/nvm)
*   [nvm-windows :nvm for Windows](https://github.com/coreybutler/nvm-windows)

### Node.js 包管理器 npm

``` batch
:: 列出配置
%USERPROFILE%> npm config list
:: abbr.       npm c ls

:: 编辑配置
%USERPROFILE%> npm config edit
:: abbr.       npm c edit

:: 设置安装位置
%USERPROFILE%> npm config set prefix "%APPDATA%\npm"
:: abbr.       npm set prefix "%APPDATA%\npm"
%USERPROFILE%> npm config set cache "%APPDATA\npm-cache"
:: abbr.       npm set cache "%APPDATA%\npm-cache"

:: 设置镜像源
%USERPROFILE%> npm config set registry https://registry.npm.taobao.org/
:: abbr.       npm set registry https://registry.npm.taobao.org/

:: 或者通过 npm 注册源管理器 nrm 来管理注册源
%USERPROFILE%> npm install --global nrm
:: abbr.       npm i -g nrm
%USERPROFILE%> nrm ls
%USERPROFILE%> nrm use <registry>

:: 升级 npm
%USERPROFILE%> npm update --global npm
:: abbr.       npm up -g npm

:: 列出已安装的包
%USERPROFILE%> npm list --global
:: abbr.       npm ls -g

:: 搜索包
%USERPROFILE%> npm search <package>
:: abbr.       npm s <package>

:: 安装包
%USERPROFILE%> npm install --global <package>
:: abbr.       npm i -g <package>

:: 升级包
%USERPROFILE%> npm update --global <package>
:: abbr.       npm up -g <package>

:: 卸载包
%USERPROFILE%> npm remove --global <package>
:: abbr.       npm r -g <package>
```

参见：

*   [npm | build amazing things](https://npmjs.com/)
    *   [package.json | npm Docs](https://docs.npmjs.com/configuring-npm/package-json.html)

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
