let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let action = showUser.bind(age),
    btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        action('John', 'Snow');
    });