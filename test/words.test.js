import words from "../src/words"

describe('words function', () => {
    test('split string into an array of words using default pattern', () => {
      expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
      expect(words('hello world')).toEqual(['hello', 'world']);
      expect(words('testing 123 testing')).toEqual(['testing', '123', 'testing']);
      expect(words('')).toEqual([]);
    });
  
    test('split string into an array of words using custom pattern', () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
      expect(words('hello, world', /[^\s,]+/g)).toEqual(['hello', 'world']);
      expect(words('testing 123 testing', /[0-9]+/g)).toEqual(['123']);
      expect(words('', /pattern/g)).toEqual([]);
    });
});