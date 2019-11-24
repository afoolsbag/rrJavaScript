/**
 * @file 数据类型和数据结构
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Data_structures JavaScript 数据类型和数据结构}
 *
 * @version 2019-11-24
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

/**
 * undefined
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined undefined}
 */
test('undefined', () => {
  let x
  expect(typeof x).toBe('undefined')
})

/**
 * null
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null null}
 */
test('null', () => {
  let x = null
  expect(typeof x).toBe('object')
})

/**
 * Boolean
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean Boolean}
 */
test('boolean', () => {
  let x = false
  expect(typeof x).toBe('boolean')
})

/**
 * Number
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
 */
test('number', () => {
  let x = 0
  let y = Infinity
  let z = NaN
  expect(typeof x).toBe('number')
  expect(typeof y).toBe('number')
  expect(typeof z).toBe('number')
})

/**
 * BigInt
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt BigInt}
 */
test('bigint', () => {
  let x = BigInt(0)
  expect(typeof x).toBe('bigint')
})

/**
 * String
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String String}
 */
test('string', () => {
  let x = ''
  expect(typeof x).toBe('string')
})

/**
 * Symbol
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
 */
test('symbol', () => {
  let x = Symbol()
  expect(typeof x).toBe('symbol')
})

/**
 * Object
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object Object}
 */
test('object', () => {
  const o = {}
  expect(typeof o).toBe('object')
  expect(o).toBeInstanceOf(Object)

  const f = function () {}
  expect(typeof f).toBe('function')
  expect(f).toBeInstanceOf(Function)

  const a = []
  expect(typeof a).toBe('object')
  expect(a).toBeInstanceOf(Array)

  const d = new Date()
  expect(typeof d).toBe('object')
  expect(d).toBeInstanceOf(Date)

  const r = /regex/
  expect(typeof r).toBe('object')
  expect(r).toBeInstanceOf(RegExp)
})
