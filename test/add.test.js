import add from "../src/add"


describe("Additions test", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test("Add integers and doubles", () => {
        expect(add(1, 1.4)).toBe(2.4);
    });

    test("Do not accept character values", () => {
        expect(add("s", 2)).toBe(NaN);
    });

    test("Do not accept string values", () => {
        expect(add("asdasdasd", 2)).toBe(NaN);
    });

    test("Do not accept NaN values", () => {
        expect(add(NaN, 2)).toBe(NaN);
    });

    test("Do not accept empty values", () => {
        expect(add("", 2)).toBe(NaN);
    });
})
