/**
 * @file 类
 *
 * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes}
 *
 * @version 2020-12-01
 * @since 2018-11-09
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

import { test, expect } from '@jest/globals'

class Clazz {}

test('class', () => {
  const obj = new Clazz()
  expect(obj).toBeInstanceOf(Clazz)
})
