import slice from '../src/slice';

describe('slice', () => {
    it('should return a slice of the array from start to end', () => {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, 1, 4)).toEqual([2, 3, 4]);
    });

    it('should return a slice of the array from start to the end of the array if end is not provided', () => {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, 2)).toEqual([3, 4, 5]);
    });

    it('should return an empty array if start is greater than or equal to end', () => {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, 3, 2)).toEqual([]);
    });

    it('should treat negative start as an offset from the end of the array', () => {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, -3, 5)).toEqual([3, 4, 5]);
    });

    it('should treat negative end as an offset from the end of the array', () => {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, 0, -2)).toEqual([1, 2, 3]);
    });
});
