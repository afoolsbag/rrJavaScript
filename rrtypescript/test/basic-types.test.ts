/**
 * @file
 *
 * @version 2018-11-10
 * @since 2018-11-10
 * @author zhengrr
 * @license Unlicense
 */

'use strict';

test('boolean', () => {
    const b: boolean = false;
    expect(b).toBe(false);
});

test('number', () => {
    const n: number = 0;
    expect(n).toBe(0);
});

test('string', () => {
    const s: string = 'love you';
    expect(s).toBe('love you');
});

test('array', () => {
    const a1: number[] = [6, 6, 6];
    expect(a1).toEqual([6, 6, 6]);

    const a2: Array<number> = [6, 6, 6];
    expect(a2).toEqual([6, 6, 6]);
});

test('tuple', () => {
    const t: [number, boolean] = [1, true];
    expect(t[0]).toBe(1);
    expect(t[1]).toBe(true);
});

test('enum', () => {
    enum Enum {Elem1, Elem2, Elem3}

    const e: Enum = Enum.Elem1;
    expect(e).toBe(Enum.Elem1);
});

test('any', () => {
    let a: any = 1;
    expect(a).toBe(1);
    a = '1';
    expect(a).toBe('1');
    a = true;
    expect(a).toBe(true);
});

test('undefined, null & void', () => {
    const u: undefined = undefined;
    expect(u).toBeUndefined();

    const n: null = null;
    expect(n).toBeNull();

    const v1: void = undefined;
    expect(v1).toBeUndefined();

    const v2: void = null;
    expect(v2).toBeNull();
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
