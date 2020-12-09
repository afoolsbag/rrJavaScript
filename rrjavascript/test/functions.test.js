/**
 * @file
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions}
 *
 * @version 2020-12-01
 * @since 2018-11-09
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

import { test, expect } from '@jest/globals'

/**
 * 参数默认值
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Default_parameters}
 */
test('default parameters', () => {
  function power (base, exponent = 2) {
    let p = 1
    for (let i = 0; i < exponent; ++i) {
      p *= base
    }
    return p
  }

  expect(power(3)).toBe(9)
})

/**
 * 剩余参数
 * @see {@link https://developer.mozilla.org、docs/Web/JavaScript/Reference/Functions/Rest_parameters}
 */
test('rest parameters', () => {
  function multiply (multiplier, ...restArgs) {
    return restArgs.map(x => multiplier * x)
  }

  expect(multiply(3, 1, 2, 3)).toEqual([3, 6, 9])
})

/**
 * 参数对象
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/arguments}
 */
test('arguments', () => {
  function strcat () {
    let str = ''
    for (let i = 0; i < arguments.length; ++i) {
      str += arguments[i]
    }
    return str
  }

  expect(strcat('a', 'b', 'c')).toBe('abc')
})

/**
 * 箭头函数
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions}
 */
test('arrow functions', () => {
  // arrow function, 0 parameter(s), 1 expression(s)
  const af0p1e = () => 1 + 2 + 3
  expect(af0p1e()).toBe(6)

  // arrow function, 1 parameter(s), 1 expression(s)
  const af1p1e = x => x * x
  expect(af1p1e(3)).toBe(9)

  // arrow function, 2 parameter(s), 1 expression(s)
  const af2p1e = (x, y) => x + y
  expect(af2p1e(1, 2)).toBe(3)

  // arrow function, 0 parameter(s), N statement(s)
  const af0pns = () => { return 666 }
  expect(af0pns()).toBe(666)
})

/**
 * 闭包
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Closures}
 */
test('closure', () => {
  function makeFunc (x) {
    function func (y) {
      return x + y
    }

    return func
  }

  const func = makeFunc(1)
  expect(func(2)).toBe(3)
  expect(makeFunc(4)(5)).toBe(9)
})
