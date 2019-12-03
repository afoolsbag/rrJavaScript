/**
 * @file
 *
 * @version 2018-11-09
 * @since 2018-11-09
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

test('object', () => {
  class Base {}

  class Derived extends Base {
    constructor () { super() }
  }

  expect(Base.prototype).toEqual(new Object)
  expect(Derived.prototype).toEqual(new Base)
})
