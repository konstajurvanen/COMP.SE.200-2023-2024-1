import isEmpty from '../src/isEmpty'

describe('isEmpty', () => {
    test('should return true for empty values', () => {
        expect(isEmpty(null)).toBe(true)
        expect(isEmpty(true)).toBe(true)
        expect(isEmpty(1)).toBe(true)
        expect(isEmpty([])).toBe(true)
        expect(isEmpty('')).toBe(true)
        expect(isEmpty(new Map())).toBe(true)
        expect(isEmpty(new Set())).toBe(true)
        expect(isEmpty(new Object())).toBe(true)
        expect(isEmpty(Object.prototype)).toBe(true)
        expect(isEmpty({})).toBe(true)
    })

    test('should return false for non-empty values', () => {
        function MyObject() {
            this.propertyOnInstance = 'I am on the instance';
        }
        MyObject.prototype.propertyOnPrototype = 'I am on the prototype';
        const myInstance = new MyObject();

        expect(isEmpty([1, 2, 3])).toBe(false)
        expect(isEmpty('abc')).toBe(false)
        expect(isEmpty({ 'a': 1 })).toBe(false)
        expect(isEmpty(new Map([['a', 1]]))).toBe(false)
        expect(isEmpty(new Set([1]))).toBe(false)
        expect(isEmpty(new Object('a'))).toBe(false)
        ecpect(isEmpty(myInstance)).toBe(false)
    })
})

