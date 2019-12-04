/**
 * @file 断言
 *
 * @see {@link https://nodejs.org/dist/latest/docs/api/assert.html Assert}
 * @see {@link http://nodejs.cn/api/assert.html 断言}
 *
 * @version 2019-12-02
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

import {strict as assert} from 'assert';

test('', () => {
    // Node.js
    assert.equal(1, 1);
    // Jest
    expect(1).toBe(1);
});
