/**
 * @file 控制流程
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements}
 *
 * @version 2019-12-04
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

/**
 * 条件语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/if...else}
 */
test('if...else', () => {
  if (Math.random() > 0.5) {
    console.log('50%+')
  } else {
    console.log('50%-')
  }
})

/**
 * 开关语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/switch}
 */
test('switch', () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      console.log('[0, 1)')
      break
    case 1:
      console.log('[1, 2)')
      break
    case 2:
      console.log('[2, 3)')
      break
    default:
      console.error('unexpected case')
      break
  }
})

/**
 * 尝试语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/try...catch}
 */
test('try...catch', () => {
  try {
    console.log('try')
    if (Math.random() > 0.5) {
      console.log('throw')
      throw new Error('The message')
    }
  } catch (e) {
    console.log('catch')
    expect(e.name).toBe('Error')
    expect(e.message).toBe('The message')
  } finally {
    console.log('finally')
  }
})

/**
 * while 循环语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/while}
 */
test('while', () => {
  let n = 0
  while (Math.random() > 0.5) {
    console.log('combo ', ++n)
  }
})

/**
 * do...while 循环语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/do...while}
 */
test('do...while', () => {
  let n = 0
  do {
    console.log('combo ', ++n)
  } while (Math.random() > 0.5)
})

/**
 * for 循环语句
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for}
 */
test('for', () => {
  for (let i = 0; i < 6; ++i) {
    console.log('i=', i)
  }
})

/**
 * for...in 循环语句，遍历对象的可枚举属性
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...in}
 */
test('for...in', () => {
  const obj = { prop1: 6, prop2: 6, prop3: 6 }
  for (const prop in obj) {
    expect(prop).toMatch(/prop/)
    expect(obj[prop]).toBe(6)
  }
})

/**
 * for...of 循环语句，遍历可迭代对象（数组、类数组对象、迭代器、生成器等）
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements}
 */
test('for...of', () => {
  const arr = [6, 6, 6]
  for (const item of arr) {
    expect(item).toBe(6)
  }
})
