/*jshint esversion: 10 */

let json = '{"id":2}';

try {
    // console.log('Начинаем работу');
    // console.log(a);
    // console.log('Работа прервана');
    let user = JSON.parse(json);
    console.log(user);
    if (!user.name) {
        throw new Error("В этих данных нет имени!");
    }
} catch(someError) {
    console.log(someError.name);
    console.log(someError.meessage);
    console.log(someError.stack);

    console.log(`Мы получили ошибку: ${someError.name}`);
}

console.log('Работа продолжается');