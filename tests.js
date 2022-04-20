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

describe('isFive', () => {
    it('should be a defined function', () => {
        expect(typeof isFive).toBe('function');
    });
});