import defaultTo from "../src/defaultTo"

describe("Set to default value", () => {
    test('Set NaN value to a default value', () => {
        expect(defaultTo(NaN, 2)).toBe(2);
    });

    test('Set null value to a default value', () => {
        expect(defaultTo(null, 2)).toBe(2);
    });

    test('Set undefined value to a default value', () => {
        expect(defaultTo(undefined, 2)).toBe(2);
    });

    test('Do not change correct values', () => {
        expect(defaultTo(1, 2)).toBe(1);
    });
})