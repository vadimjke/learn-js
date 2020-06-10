
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

    inputRub.addEventListener('input', () => {

    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    function yo() {
        let data = JSON.parse(request.response);
        console.log(data);
    }

    function calc() {
        let data = JSON.parse(request.response),
            calced = inputRub.value / data.usd;
        inputUsd.value = calced.toFixed(2);
    }

    // setTimeout(yo, 1000);

    request.addEventListener('readystatechange', function promise() {
        let promise = new Promise(function(resolve, reject) {
            if (request.readyState === 4 && request.status == 200) {
                resolve();
            }
            else {
                reject();
            }
        });
        promise
            .then(()=> calc())
            // .then(()=> console.log(3))
            // .then(()=> yo())
            .catch(()=> inputUsd.value = "Что-то пошло не так!");
    });
});