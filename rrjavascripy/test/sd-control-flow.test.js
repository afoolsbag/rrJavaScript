/**
 * @file
 *
 * @version 2018-11-09
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

test('if...else', () => {
  if (.5 < Math.random()) {
    // ...
  } else if (.5 < Math.random()) {
    // ...
  } else {
    // ...
  }
})

test('switch', () => {
  switch (Math.floor(Math.random() * 3).toString()) {
    case '0':
      break
    case '1':
      break
    case '2':
      break
    default:
      break
  }
})

test('try...catch', () => {
  try {
    throw new Error('The message')
  } catch (e) {
    expect(e.name).toBe('Error')
    expect(e.message).toBe('The message')
  } finally {
    // ...
  }
})

test('for', () => {
  for (let i = 0; i < 6; ++i) {
    // ...
  }
})

test('while', () => {
  while (.5 < Math.random()) {
    // ...
  }
})

test('do...while', () => {
  do {
    // ...
  } while (.5 < Math.random())
})

test('for...in', () => {
  const obj = {prop1: 6, prop2: 6, prop3: 6}
  for (const prop in obj) {
    expect(prop).toMatch(/prop/)
    expect(obj[prop]).toBe(6)
  }
})

test('for...of', () => {
  const arr = [6, 6, 6]
  for (const item of arr) {
    expect(item).toBe(6)
  }
})
