'use strict';


let ans = prompt('Enter the name');

let reg = /n/gi;

// console.log(ans.search(reg));
// console.log(ans.match(reg));


// Flags : i/g/m
// \d \D
// \w \W
// \s \S

// let pass = prompt('Enter the password please');

// console.log(pass.replace(/./g,"*"));
// alert('12-34-56'.replace(/-/g, ':'));

console.log(reg.test(ans));

let str = "test / test";
console.log(str.match(/\//));