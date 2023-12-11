import isEmpty from '../src/isEmpty'

describe('isEmpty', () => {
    test('should return true for empty values', () => {
        expect(isEmpty(true)).toBe(true)
        expect(isEmpty(1)).toBe(true)
        expect(isEmpty([])).toBe(true)
        expect(isEmpty('')).toBe(true)
        expect(isEmpty(new Map())).toBe(true)
        expect(isEmpty(new Set())).toBe(true)
        expect(isEmpty(new Object())).toBe(true)
        expect(isEmpty(new Object(null))).toBe(true)
        expect(isEmpty(new Object(1))).toBe(true)
        expect(isEmpty(Object.prototype)).toBe(true)
        expect(isEmpty({})).toBe(true)
    })

    test('should return false for non-empty values', () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
        expect(isEmpty('abc')).toBe(false)
        expect(isEmpty({ 'a': 1 })).toBe(false)
        expect(isEmpty(new Map([['42', 42]]))).toBe(false)
        expect(isEmpty(new Set([1]))).toBe(false)
        expect(isEmpty(new Object('a'))).toBe(false)
    })

    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true)
    })

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
    })

    test('should return true for empty object with prototype properties', () => {
        const obj = Object.create({ 'a': 1 })
        expect(isEmpty(obj)).toBe(true)
    })
    
    test('should return true for empty object with non-enumerable properties', () => {
        const obj = Object.create(null, {
            'a': {
                value: 1,
                enumerable: false
            }
        })
        expect(isEmpty(obj)).toBe(true)
    })
})





