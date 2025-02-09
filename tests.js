// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe('string');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe('Hello, World!');
    });
    it('should never return \'undefined\' when called', function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should should return a string when called', () => {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when passed "Jane"', () => {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when passed "Alex"', () => {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when passed "Pat"', () => {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when nothing is passed', () => {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when "" is passed', () => {
        expect(sayHello('')).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when the float 2.3 is passed', () => {
        expect(sayHello(2.3)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when "5" is passed', () => {
        expect(sayHello('5')).toBe('Hello, World!');
    });
});

// Unit tests for the isFive function
describe('isFive', () => {
    it('should be a defined function', () => {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', () => {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', () => {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', () => {
        expect(isFive('5')).toBe(true);
    });
});

// Unit tests for the isEven function
describe('isEven', () => {
    it('should be a defined function', () => {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', () => {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', () => {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', () => {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed 3', () => {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', () => {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when passed 8"', () => {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity"', () => {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed false"', () => {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed true"', () => {
        expect(isEven(true)).toBe(false);
    });
});

// Unit tests for the isVowel function
describe('isVowel', () => {
    it('should be a defined function', () => {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', () => {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a"', () => {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed "A"', () => {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed "y"', () => {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when passed 4', () => {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed false', () => {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed true', () => {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed "banana"', () => {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when passed nothing', () => {
        expect(isVowel()).toBe(false);
    });
});

// Unit tests for the add function
describe('add', () => {
    it('should be a defined function', () => {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed 3 and 2', () => {
        expect(add(3, 2)).toBe(5);
    });
    it('should return 5 when passed -3 and -9', () => {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed 5 and 6', () => {
        expect(add(5, 6)).toBe(11);
    });
    it('should return 6 when passed -4 and 10', () => {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return NaN when passed "banana" and "split"', () => {
        expect(add('banana', 'split')).toBeNaN();
    });
    it('should return NaN when passed 2 and "apples"', () => {
        expect(add(2, 'apples')).toBeNaN();
    });
    it('should return NaN when passed nothing', () => {
        expect(add()).toBeNaN();
    });
});