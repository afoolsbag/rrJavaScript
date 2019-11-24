/**
 * @file
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions 函数}
 *
 * @version 2019-11-24
 * @since 2018-11-09
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

/**
 * 函数。
 */
test('function', () => {
  function func (arg) {
    return arg
  }

  expect(func(7)).toBe(7)
})

/**
 * 函数表达式。
 */
test('function expression', () => {
  const funcexpr = function (arg) {
    return arg
  }

  expect(funcexpr(7)).toBe(7)
})

/**
 * 闭包。
 */
test('closure', () => {
  function outside (x) {
    function inside (y) {
      return x + y
    }

    return inside
  }

  const custom_inside = outside(1)
  expect(custom_inside(3)).toBe(4)
  expect(outside(5)(7)).toBe(12)

  function createCode () {
    let code
    return {
      setCode: function (newCode) {
        code = newCode
      },
      getCode: function () {
        return code
      }
    }
  }

  const code = createCode()
  code.setCode('666')
  expect(code.getCode()).toBe('666')
})

/**
 * 实际参数。
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
 * 形式参数。
 */
test('parameters', () => {
  function power (base, exponent = 2) {
    let p = 1
    for (let i = 0; i < exponent; ++i) {
      p *= base
    }
    return p
  }

  expect(power(3)).toBe(9)

  function multiply (multiplier, ...restArgs) {
    return restArgs.map(x => multiplier * x)
  }

  expect(multiply(3, 1, 2, 3)).toEqual([3, 6, 9])
})

/**
 * 胖箭头函数。
 */
test('arrow function', () => {
  const af0p1e = () => 1 + 2 + 3
  expect(af0p1e()).toBe(6)

  const af1p1e = x => x * x
  expect(af1p1e(3)).toBe(9)

  const af2p1e = (x, y) => x + y
  expect(af2p1e(1, 2)).toBe(3)

  const af0p9s = () => { return 666 }
  expect(af0p9s()).toBe(666)
})
