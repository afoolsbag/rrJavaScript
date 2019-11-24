/**
 * @file 标准内置对象
 *       值属性
 *       这些全局属性返回一个简单值，这些值没有自己的属性和方法。
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects JavaScript 标准内置对象}
 *
 * @version 2019-11-24
 * @since 2019-11-24
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

/**
 * Infinity
 * 全局属性 Infinity 是一个数值，表示无穷大。
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Infinity Infinity}
 */
test('Infinity', () => {
  let x = Infinity

  expect(typeof x).toBe('number')

  expect(x === Infinity).toBeTruthy()
  expect(x).toBe(Infinity)
})

/**
 * NaN
 * 全局属性 NaN 的值表示不是一个数字（Not-A-Number）。
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN NaN}
 */
test('NaN', () => {
  let x = NaN

  expect(typeof x).toBe('number')

  expect(x === NaN).toBeFalsy()  // 有且仅有 NaN 在自比较中不为真
  expect(x).toBe(NaN)

  expect(isNaN(NaN)).toBeTruthy()  // 专门的判别方法
  expect(NaN).toBeNaN()
})

/**
 * undefined
 * 全局属性 undefined 表示原始值 undefined。它是一个 JavaScript 的原始数据类型 。
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined undefined}
 */
test('undefined', () => {
  let x

  expect(typeof x).toBe('undefined')

  expect(x === undefined).toBeTruthy()
  expect(x).toBe(undefined)

  expect(x).toBeUndefined()
})

/**
 * null
 * 值 null 特指对象的值未设置。它是 JavaScript 基本类型之一。
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null null}
 */
test('null', () => {
  let x = null

  expect(typeof x).toBe('object')

  expect(x === null).toBeTruthy()
  expect(x).toBe(null)

  expect(x).toBeNull()
})

/**
 * globalThis
 * globalThis 可以获取全局对象。
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis globalThis}
 */
test('globalThis', () => {
  let x = globalThis

  expect(typeof x).toBe('object')
  expect(x).toBeInstanceOf(Object)

  expect(x === globalThis).toBeTruthy()
  expect(x).toBe(globalThis)
})
