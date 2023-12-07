import compact from '../src/compact';

describe('compact', () => {
    it('should remove all falsey values from the array', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });

    it('should return an empty array if all values are falsey', () => {
        expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
    });

    it('should return the same array if it contains no falsey values', () => {
        expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should return an empty array if the input array is empty', () => {
        expect(compact([])).toEqual([]);
    });

    it('should return a new array and not modify the original array', () => {
        const input = [0, 1, false, 2, '', 3];
        const result = compact(input);
        expect(result).toEqual([1, 2, 3]);
        expect(input).toEqual([0, 1, false, 2, '', 3]);
    });
});

