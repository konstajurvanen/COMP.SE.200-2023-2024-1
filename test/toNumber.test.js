import toNumber from "../src/toNumber"

describe('toNumber function', () => {
    test('convert a number to the same number', () => {
      expect(toNumber(3.2)).toBe(3.2);
      expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
      expect(toNumber(Infinity)).toBe(Infinity);
      expect(toNumber(0)).toBe(0);
      expect(toNumber(-0)).toBe(-0);
      expect(toNumber(422)).toBe(422);
    });
  
    test('convert a string to a number', () => {
      expect(toNumber('3.2')).toBe(3.2);
      expect(toNumber('0')).toBe(0);
      expect(toNumber('-42')).toBe(-42);
      expect(toNumber('Infinity')).toBe(Infinity);
      expect(toNumber('123e-2')).toBe(1.23);
    });
  
    test('return NaN for non-convertible values', () => {
      expect(toNumber(null)).toBeNaN();
      expect(toNumber(undefined)).toBeNaN();
      expect(toNumber(NaN)).toBeNaN();
      expect(toNumber({})).toBeNaN();
      expect(toNumber([1, 2, 3])).toBeNaN();
    });
  
    test('handle hex, octal, and binary strings', () => {
      expect(toNumber('0x10')).toBe(16);
      expect(toNumber('0o10')).toBe(8);
      expect(toNumber('0b1010')).toBe(10);
      expect(toNumber('-0x1F')).toBe(-31);
    });
});