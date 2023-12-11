import eq from '../src/eq';

describe('eq function', () => {
    it('should return true when both values are the same', () => {
        expect(eq(1, 1)).toBe(true);
        expect(eq('a', 'a')).toBe(true);
        expect(eq(Object('1'), Object('1'))).toBe(true);
        expect(eq(false, false)).toBe(true);

    });

    it('should return false when values are different', () => {
        expect(eq(1, 2)).toBe(false);
        expect(eq('a', 'b')).toBe(false);
        expect(eq('a', Object('a'))).toBe(false);
        expect(eq(Object('1'), Object(1))).toBe(false);
        expect(eq(false, true)).toBe(false);

    });

    it('should return false when values are different, but could become the same after conversion', () => {
        expect(eq(2000, -2000)).toBe(false);
        expect(eq('a', ['a'])).toBe(false);
        expect(eq('1', true)).toBe(false);
        expect(eq('1', 1)).toBe(false);


    });

    it('should return true when both values are NaN/empty/null/undefined', () => {
        expect(eq(NaN, NaN)).toBe(true);
        expect(eq([], [])).toBe(true);
        expect(eq({}, {})).toBe(true);
        expect(eq('', '')).toBe(true);
        expect(eq(null, null)).toBe(true);
        expect(eq(undefined, undefined)).toBe(true);
    });

    it('should return false when comparing NaN with a non-NaN value', () => {
        expect(eq(NaN, 1)).toBe(false);
        expect(eq(1, NaN)).toBe(false);
        expect(eq(NaN, '')).toBe(false);
        expect(eq(0, NaN)).toBe(false);
        expect(eq(NaN, null)).toBe(false);
    });

    it('should return false when comparing two objects with same keys and values, and true if it is actually the same object', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        expect(eq(obj1, obj1)).toBe(true);
        expect(eq(obj1, obj2)).toBe(false);
        expect(eq(obj1, { a: 1, b: 2 })).toBe(false);
    });
});