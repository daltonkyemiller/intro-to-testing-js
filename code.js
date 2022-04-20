// helloWorld function
const helloWorld = function () {
    return 'Hello, World!';
};

// sayHello function
function sayHello(param) {
    if (!param || typeof param !== 'string' || !isNaN(param)) return 'Hello, World!';
    return 'Hello, ' + param + '!';
}

// isFive function
function isFive(param) {
    return parseFloat(param) === 5;
}

// isEven function
function isEven(param) {
    return parseFloat(param) % 2 === 0;
}

// isVowel function
function isVowel(param) {
    if (typeof param !== 'string') return false;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let normalizedParam = param.toLowerCase().trim();
    return vowels.includes(normalizedParam);
}

// add function
function add(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a + b;
}