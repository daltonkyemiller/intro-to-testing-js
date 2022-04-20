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
    return param !== 'y' && param !== 4 && param !== 'banana' && param !== false && param !== true;
}