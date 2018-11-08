/**
 * @file
 *
 * @version 2018-11-08
 * @since 2018-11-08
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

test('comments', () => {
  // 单行注释
  /*
   * 多行注释
   */
})

test('declarations', () => {
  let blockVariable = 6    // 块变量
  const blockConstant = 9  // 块常量

  expect(blockVariable).toBe(6)
  expect(blockConstant).toBe(9)
})
