import filter from "../src/filter"

describe("Filter array", () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ];

    test('should return an array of elements that match the predicate', () => {
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });
    
    test('should handle an empty array', () => {
        const result = filter([], () => true);
        expect(result).toEqual([]);
    });

    test('should handle a predicate that always returns false', () => {
        const result = filter(users, () => false);
        expect(result).toEqual([]);
    });

    test('should handle a predicate that always returns true', () => {
        const result = filter(users, () => true);
        expect(result).toEqual(users);
    });
})