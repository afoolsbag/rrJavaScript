/**
 * @file 基础类型
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/basic-types.html Basic Types}
 * @see {@link https://www.tslang.cn/docs/handbook/basic-types.html 基础类型}
 *
 * @version 2019-12-02
 * @since 2018-11-10
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

/**
 * 真假值
 */
test('boolean', () => {
    const bool: boolean = false;
    expect(typeof bool).toBe('boolean');
});

/**
 * 数字
 */
test('number', () => {
    const num: number = 1337;
    expect(typeof num).toBe('number');
});

/**
 * 字符串
 */
test('string', () => {
    const str: string = 'love you';
    expect(typeof str).toBe('string');
});

/**
 * 数组
 */
test('array', () => {
    const arr1: number[] = [1, 3, 3, 7];
    expect(arr1).toBeInstanceOf(Array);

    const arr2: Array<number> = [1, 3, 3, 7];
    expect(arr2).toBeInstanceOf(Array);

    const arr3: ReadonlyArray<number> = [1, 3, 3, 7];
    expect(arr3).toBeInstanceOf(Array)
});

/**
 * 元组
 */
test('tuple', () => {
    const tup: [number, boolean] = [1337, true];
    expect(tup).toBeInstanceOf(Array);
});

/**
 * 枚举
 */
test('enum', () => {
    enum Enum {Val1, Val2, Val3}

    const e: Enum = Enum.Val1;
    expect(typeof e).toBe('number');
});

/**
 * 任意
 */
test('any', () => {
    let x: any;
    expect(x).toBeUndefined();
});

/**
 * Void, Null, Undefined 和 Never
 */
test('void, null, undefined & never', () => {
    const void1: void = undefined;
    expect(void1).toBeUndefined();

    // OK if `--strictNullChecks` is not given:
    // const void2: void = null;
    // expect(void2).toBeNull();

    const undef: undefined = undefined;
    expect(undef).toBeUndefined();

    const nul: null = null;
    expect(nul).toBeNull();
});

/**
 * 对象
 */
test('object', () => {
    const o: object = {};
    expect(o).toEqual({});
});

/**
 * 类型断言
 * 编译器不对此进行类型检查
 */
test('type assertions', () => {
    const x: any = 'love you';
    expect((<string>x).length).toBe(8);
    expect((x as string).length).toBe(8);
});
