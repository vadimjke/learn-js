'use strict';

let a = 5;
let b = [];
let c = b + false - null + true;

console.log(a++);

console.log(c);
console.log([]+1+2);
console.log("1");

let d =  2 && 1 && null && 0 && undefined;

console.log(d);


let e = 2+2;
console.log(!!e);

console.log(null || 2 && 3 || 4);

let aa = [1, 2, 3];
let bb = [1, 2, 3];
console.log(aa == bb);
console.log( +"Infinity");


console.log("ёжик" > "яблоко");

let f = 0 || "" || 2 || undefined || true || falsе;
console.log(f);