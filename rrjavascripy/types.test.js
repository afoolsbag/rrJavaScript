/**
 * @file
 *
 * @version 2018-11-08
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

test('undefined', () => {
  let u
  expect(typeof u).toBe('undefined')
})

test('null', () => {
  const n = null
  expect(typeof n).toBe('object')
})

test('boolean', () => {
  const b = false
  expect(typeof b).toBe('boolean')
})

test('number', () => {
  const n = 1337
  expect(typeof n).toBe('number')
})

test('string', () => {
  const s = 'hello, world'
  expect(typeof s).toBe('string')
})

test('symbol', () => {
  const s = Symbol()
  expect(typeof s).toBe('symbol')
})

test('object', () => {
  const o = {}
  expect(o).toBeInstanceOf(Object)

  const f = function () {}
  expect(f).toBeInstanceOf(Function)

  const a = []
  expect(a).toBeInstanceOf(Array)

  const d = new Date()
  expect(d).toBeInstanceOf(Date)

  const r = /regex/
  expect(r).toBeInstanceOf(RegExp)
})
