"use strict";
var greet;
//greet = 'hello';
greet = function () {
    console.log('hello, world!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(3, 5, 1);
var minus = function (a, b) {
    return a - b;
};
var result = minus(4, 2);
