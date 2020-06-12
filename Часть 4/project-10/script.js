// let app = {
//     data: 45
// };
// console.log(app);

function User (name, age) {
    this.name = name;
    let userAge = age;

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(a) {
        if (typeof(a) === 'number' && a>0 && a<110)
        {
            userAge = a;
        }
        else {
            console.log('Недопустимое значение');
        }
    };

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
    };
}

let user = new User('Ivan', 20);
console.log(user.name);
console.log(user.userAge);

user.say();
console.log(user.getAge());

user.setAge(120);
console.log(user.getAge());

// user.age = 30;
// user.name = 'Alex';
// user.say();