/**
 * @file 类
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/classes.html Classes}
 * @see {@link https://www.tslang.cn/docs/handbook/classes.html 类}
 *
 * @version 2019-12-04
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

/**
 * 自定义类
 */
class Clazz {
}

test('class', () => {
    const obj = new Clazz();
    expect(obj).toBeInstanceOf(Clazz);
});
