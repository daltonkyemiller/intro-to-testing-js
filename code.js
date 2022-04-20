// helloWorld function
const helloWorld = function () {
    return 'Hello, World!';
};

function sayHello(param) {
    if (!param || typeof param !== 'string' || !isNaN(param)) return 'Hello, World!';
    return 'Hello, ' + param + '!';
}

function isFive(param) {
    return parseFloat(param) === 5;
}

function isEven(param) {
    return parseFloat(param) % 2 === 0;
}

function isVowel(param) {
    if (typeof param !== 'string') return false;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let normalizedParam = param.toLowerCase().trim();
    return vowels.includes(normalizedParam);
}