# zhengrr 所知的 Node.js

基于 Chrome V8 引擎的 JavaScript 运行时 Node.js，官网 <https://nodejs.org/>。

```cmder
:: 交互式壳层
%USERPROFILE% λ node

:: 运行脚本
%USERPROFILE% λ node <script.js>
```

## Awesome

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
