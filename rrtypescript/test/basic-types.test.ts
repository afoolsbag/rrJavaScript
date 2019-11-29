/**
 * @file 基础类型
 *
 * @see {@link https://typescriptlang.org/docs/handbook/basic-types.html}
 *
 * @version 2019-11-29
 * @since 2018-11-10
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

/**
 * 真假值
 */
test('boolean', () => {
    let bool: boolean = false;
    expect(typeof bool).toBe('boolean');
});

/**
 * 数字
 */
test('number', () => {
    let num: number = 1337;
    expect(typeof num).toBe('number');
});

/**
 * 字符串
 */
test('string', () => {
    let str: string = 'love you';
    expect(typeof str).toBe('string');
});

/**
 * 数组
 */
test('array', () => {
    let arr1: number[] = [1, 3, 3, 7];
    expect(arr1).toBeInstanceOf(Array);


    let arr2: Array<number> = [1, 3, 3, 7];
    expect(arr2).toBeInstanceOf(Array);
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
 * Void, Null & Undefined
 */
test('void, null & undefined', () => {
    const undef: undefined = undefined;
    expect(undef).toBeUndefined();

    const nul: null = null;
    expect(nul).toBeNull();

    const void1: void = undefined;
    expect(void1).toBeUndefined();

    const void2: void = null;
    expect(void2).toBeNull();
});

test('never', () => {
    function error(message: string): never {
        throw new Error(message);
    }

    try {
        error('Never');
    } catch (e) {
        expect(e.name).toBe('Error');
        expect(e.message).toBe('Never');
    }
});

test('object', () => {
    const o: object = {};
    expect(o).toEqual({});
});

test('type assertions', () => {
    const ly: any = 'love you';
    expect((<string>ly).length).toBe(8);
    expect((ly as string).length).toBe(8);
});
