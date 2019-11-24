# [npm](https://npmjs.com/)

Node.js 包管理器（Node Package Manager）

## 配置本地位置

```shell script
# 1. 配置系统 PATH

# 2. 配置 npm prefix
npm set prefix "E:\\.npm"
# 3. 配置 npm cache
npm set cache "E:\\.npm-cache"

# 4. 配置 cnpm prefix
cnpm set prefix "E:\\.npm"
# 5. 配置 cnpm cache
cnpm set cache "E:\\.npm-cache"
```

## 配置注册表镜像

```shell script
# 可以使用 cnpm 而不变更 npm 注册表
npm i -g --registry=https://r.npm.taobao.org/ cnpm

# 或者变更 npm 注册表
npm set registry https://registry.npm.taobao.org/  # 淘宝镜像
# npm set registry https://r.cnpmjs.org/           # Company 镜像
# npm set registry https://registry.npmjs.com/     # 源
```

## 常用命令
```shell script
npm config list [-l]
npm c list [-l]

npm install [--global] [--verbose] <package>
npm i [-g] [--verbose] <package>

npm install --save[-prod] <package>
npm i -P <package>

npm install --save-dev <package>
npm i -D <package>

npm install --save-bundle <package>
npm i -B <package>

npm install --save-optional <package>
npm i -O <package>

npm remove [--global] <package>
npm r [-g] <package>
```

## 配置 [*package.json*](https://docs.npmjs.com/files/package.json)

```json
{
  "name" : null,
  "version" : null,
  "description" : null,
  "keywords" : null,
  "homepage" : null,
  "bugs" : null,
  "license" : null,
  "author" : null,
  "contributors" : null,
  "files" : null,
  "main" :  null,
  "browser" : null,
  "bin" : null,
  "man" : null,
  "directories" : null,
  "repository" : null,
  "scripts" : null,
  "config" : null,
  "dependencies" : null,
  "devDependencies" : null,
  "peerDependencies" : null,
  "bundledDependencies" : null,
  "optionalDependencies" : null,
  "engines" : null,
  "engineStrict" : null,
  "os" : null,
  "cpu" : null,
  "private" : null,
  "publishConfig" : null
}
```

