
describe('toString', () => {
    it('should return an empty string for null', () => {
        const result = toString(null)
        expect(result).toBe('')
    })

    it('should convert an array to a comma-separated string', () => {
        const result = toString([null, null, 3])
        expect(result).toBe('null,null,3')
    })

    it('should preserve the sign of -0', () => {
        const result = toString(-0)
        expect(result).toBe('-0')
    })

    it('should convert an array to a comma-separated string', () => {
        const result = toString([1, 2, 3])
        expect(result).toBe('1,2,3')
    })

    it('should convert a string to itself', () => {
        const result = toString('hello')
        expect(result).toBe('hello')
    })

    it('should convert a number to its string representation', () => {
        const result = toString(42)
        expect(result).toBe('42')
    })

    it('should convert a boolean to its string representation', () => {
        const result = toString(true)
        expect(result).toBe('true')
    })

    it('should convert a symbol to its string representation', () => {
        const symbol = Symbol('test')
        const result = toString(symbol)
        expect(result).toBe('Symbol(test)')
    })

    it('should convert an object to its string representation', () => {
        const obj = { name: 'John', age: 30 }
        const result = toString(obj)
        expect(result).toBe('[object Object]')
    })

    it('should convert an array with one string to just the string inside the array', () => {
        const result = toString(['hello'])
        expect(result).toBe('hello')
    })

    // Add more test cases here...

})
import toString from '../src/toString.js'
