/**
 * @file 变量声明
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/variable-declarations.html Variable Declarations}
 * @see {@link https://www.tslang.cn/docs/handbook/variable-declarations.html 变量声明}
 *
 * @version 2019-12-02
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

/**
 * 函数作用域
 */
test('var', () => {
    var x: never;
});

/**
 * 块作用域
 */
test('let', () => {
    let x: never;
});

/**
 * 块作用域常量
 */
test('const', () => {
    const x: object = {};
});

/**
 * 严格的数组解构赋值
 * 元组的解构赋值类似于数组
 */
test('strict array destructuring', () => {
    const [x, y]: [number, number] = [1, 2];
    expect(x).toBe(1);
    expect(y).toBe(2);
});

/**
 * 宽松的数组解构赋值
 * 元组的解构赋值类似于数组
 */
test('loose array destructuring', () => {
    const [x, y] = [1, 2, 3, 4, 5, 6, 7];
    expect(x).toBe(1);
    expect(y).toBe(2);

    const [, z2, , z4, ...rest] = [1, 2, 3, 4, 5, 6, 7];
    expect(z2).toBe(2);
    expect(z4).toBe(4);
    expect(rest).toEqual([5, 6, 7]);
});

/**
 * 严格的对象解构赋值
 * 对象字面量的解构赋值不论是否指定类型，都是严格的
 */
test('strict object destructuring', () => {
    const {prop1: x, prop2: y}: { prop1: number, prop2: number } = {prop1: 1, prop2: 2};
    expect(x).toBe(1);
    expect(y).toBe(2);

    const {prop1: z1, prop2: z2} = {prop1: 1, prop2: 2};
    expect(z1).toBe(1);
    expect(z2).toBe(2);
});

/**
 * 宽松的对象解构赋值
 */
test('loose object destructuring', () => {
    const obj = {prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5, prop6: 6, prop7: 7};

    const {prop1: x, prop2: y} = obj;
    expect(x).toBe(1);
    expect(y).toBe(2);

    const {prop2: z2, prop4: z4, ...rest} = obj;
    expect(z2).toBe(2);
    expect(z4).toBe(4);
    expect(rest).toEqual({prop1: 1, prop3: 3, prop5: 5, prop6: 6, prop7: 7});
});

/**
 * 对象解构赋值的可选属性和默认值
 */
test('optional properties and default value of object destructuring', () => {
    const {prop1: x, prop2: y, propOpt: z = 3}: { prop1: number, prop2: number, propOpt?: number } = {
        prop1: 1,
        prop2: 2
    };
    expect(x).toBe(1);
    expect(y).toBe(2);
    expect(z).toBe(3);
});

/**
 * 数组、元组和对象属性展开
 * 其中对象属性展开，后面的属性会覆盖前面的同名属性
 */
test('spread', () => {
    const x = [1, 2, 3];
    const y = 4;
    const z = [5, 6, 7];
    expect([...x, y, ...z]).toEqual([1, 2, 3, 4, 5, 6, 7]);

    const o1 = {prop1: 1, prop2: 2, prop3: 3};
    const o2 = {prop4: 4};
    const o3 = {prop5: 5, prop6: 6, prop7: 7};
    expect({...o1, ...o2, ...o3}).toEqual({prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5, prop6: 6, prop7: 7})
});
