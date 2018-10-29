'use strict'

test('Undefined', () => {
  expect(typeof undefined).toBe('undefined')
})

test('Null', () => {
  const n = null
  expect(typeof n).toBe('object')
})

test('Number', () => {
  const n = 1337
  expect(typeof n).toBe('number')
})

test('String', () => {
  const s = 'hello, world'
  expect(typeof s).toBe('string')
})

test('Boolean', () => {
  const b = false
  expect(typeof b).toBe('boolean')
})

test('Symbol', () => {
  const s = Symbol()
  expect(typeof s).toBe('symbol')
})

test('Object', () => {
  const o = {}
  expect(typeof o).toBe('object')

  const f = function () {}
  expect(typeof f).toBe('function')

  const a = []
  expect(Array.isArray(a)).toBe(true)

  const d = new Date()
  expect(typeof d).toBe('object')

  const r = /regex/
  expect(typeof r).toBe('object')
})
