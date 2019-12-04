/**
 * @file 类
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes}
 *
 * @version 2019-12-02
 * @since 2018-11-09
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

class Clazz {}

test('class', () => {
  const obj = new Clazz()
  expect(obj).toBeInstanceOf(Clazz)
})
