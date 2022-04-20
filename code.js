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
    return param === 2;
}