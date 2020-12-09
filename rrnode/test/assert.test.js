/**
 * @file 断言
 *
 * @version 2020-12-01
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

const { test, expect } = require('@jest/globals')

const assert = require('assert').strict

/**
 * @see {@link https://nodejs.org/dist/latest/docs/api/assert.html Assert}
 * @see {@link http://nodejs.cn/api/assert.html 断言}
 */
test('Node.js Assert', () => {
  assert.equal(1, 1)
})

/**
 * @see {@link https://jestjs.io/docs/zh-Hans/expect Expect}
 */
test('Jest Expect', () => {
  expect(1).toBe(1)
})
