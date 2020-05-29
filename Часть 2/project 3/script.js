// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' has left');
// };

// let ivan = new User('Ivan', 1),
//     alex = new User('Alex', 500);


// ivan.exit();





// ------

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// ------


// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// ------


// let user = {
//     name: "John",
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));


// function count(number) {
//     return this*number;
// }

// let double = count.bind(2);


// console.log(double(20));



// ------

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('btn-success');
    this.classList.toggle('btn-primary');
    
});


// 1) Просто вызов функции - window/underfined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this  = новый созданный объект
// 4) Указание конкретного контексте - call, apply, bind