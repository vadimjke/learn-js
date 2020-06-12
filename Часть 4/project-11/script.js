
// 1й метод

// let number = 1;

// (function () {
//     let number = 2;
//     console.log(number);

//     return console.log(number+3);
// }());

// console.log(number);



// 2й метод

// let user = (function() {
//     let private = function() {
//         console.log('im private');
//     };
//     return {
//         sayHello: function() {
//             console.log('Hello');
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello);


// 3й метод

// let user = (function() {
//     let private = function() {
//         console.log('im private');
//     };
//     let sayHello = function() {
//         console.log('Hello');
//     };
//     return {
//         sayHello: sayHello
//     };
    
// }());

// console.log(user);
// console.log(user.sayHello());