/**
 * @file 类型
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Data_structures 数据类型和数据结构}
 *
 * @version 2020-12-01
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

import { test, expect } from '@jest/globals'

/**
 * 未定义
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined}
 */
test('undefined', () => {
  let x
  expect(typeof x).toBe('undefined')
  // 判定方法
  expect(x).toBeUndefined()
  // 即
  expect(x === undefined).toBeTruthy()
})

/**
 * 真假值
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean}
 */
test('boolean', () => {
  const bool = false
  expect(typeof bool).toBe('boolean')
})

/**
 * 数字
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number}
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Infinity}
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN}
 */
test('number', () => {
  // number
  const num = 0
  expect(typeof num).toBe('number')

  // (+/-) Infinity
  const posInf = Infinity
  expect(typeof posInf).toBe('number')
  // 判定方法
  expect(posInf).toBe(Infinity)
  // 即
  expect(posInf === Infinity).toBeTruthy()

  // NaN
  const nan = NaN
  expect(typeof nan).toBe('number')
  // 判定方法
  expect(nan).toBeNaN()
  // 即
  expect(isNaN(nan)).toBeTruthy() // JavaScript 中唯一自身与自身不相等的值
})

/**
 * 大整数
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt}
 */
test('bigint', () => {
  // eslint-disable-next-line no-undef
  const big = BigInt(0)
  expect(typeof big).toBe('bigint')
})

/**
 * 字符串
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String}
 */
test('string', () => {
  const str = ''
  expect(typeof str).toBe('string')
})

/**
 * 符号
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol}
 */
test('symbol', () => {
  // eslint-disable-next-line symbol-description
  const sym = Symbol()
  expect(typeof sym).toBe('symbol')
})

/**
 * 对象
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null}
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object}
 */
test('object', () => {
  // null
  const nul = null
  expect(typeof nul).toBe('object')
  expect(nul).not.toBeInstanceOf(Object)
  // 判定方法
  expect(nul).toBeNull()
  // 即
  expect(nul === null).toBeTruthy()

  // object
  const obj = {}
  expect(typeof obj).toBe('object')
  expect(obj).toBeInstanceOf(Object)
})

/**
 * 对象：数组
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array}
 */
test('object-array', () => {
  const arr = []
  expect(typeof arr).toBe('object')
  expect(arr).toBeInstanceOf(Object)
  expect(arr).toBeInstanceOf(Array)
})

/**
 * 对象：正则表达式
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
 */
test('object-regexp', () => {
  const regex = /regex/
  expect(typeof regex).toBe('object')
  expect(regex).toBeInstanceOf(Object)
  expect(regex).toBeInstanceOf(RegExp)
})

/**
 * 对象：函数
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function}
 */
test('object-function', () => {
  const f = function () {}
  expect(typeof f).toBe('function')
  expect(f).toBeInstanceOf(Object)
  expect(f).toBeInstanceOf(Function)
})
