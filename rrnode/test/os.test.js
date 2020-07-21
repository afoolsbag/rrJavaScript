/**
 * @file 操作系统
 *
 * @see {@link https://nodejs.org/dist/latest/docs/api/os.html OS}
 * @see {@link http://nodejs.cn/api/os.html 文件系统}
 *
 * @version 2019-12-02
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

const os = require('os')

test('arch', () => {
  console.log(os.arch())
})

test('endianness', () => {
  console.log(os.endianness())
})

test('homedir', () => {
  console.log(os.homedir())
})

test('hostname', () => {
  console.log(os.hostname())
})

test('platform', () => {
  console.log(os.platform())
})

test('release', () => {
  console.log(os.release())
})
