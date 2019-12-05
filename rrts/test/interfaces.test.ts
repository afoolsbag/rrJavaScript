/**
 * @file 接口
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html Interfaces}
 * @see {@link https://www.tslang.cn/docs/handbook/interfaces.html 接口}
 *
 * @version 2019-12-05
 * @since 2019-12-02
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

/**
 * 约定函数应接受的参数类型，和应返回的值类型
 * 实际函数和约定接口的参数名可以不匹配
 */
interface FunctionInterface {
    (param1: string, param2: string): string;
}

/**
 * 约定对象应提供的属性和方法
 */
interface ObjectInterface {
    roProp: string;                // 只读属性，只在对象被创建时允许赋值
    prop: string;                  // 属性
    optProp?: string;              // 可选属性
    [propName: string]: any;       // 剩余属性索引
    method(param: string): string; // 方法
}
