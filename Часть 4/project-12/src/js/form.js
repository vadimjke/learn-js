export function form() {
    
    let message = {
        loading : "Идет загрузка...",
        success : "Успешно!",
        failure : "что-то пощло не так"
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        
        let json = JSON.stringify(obj);

        function postData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-Type', 'applications/json; charset=utf-8');

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    // statusMessage.innerHTML = message.loading;
                    resolve();
                } else if (request.readyState == 4 && request.status == 200) {
                    // statusMessage.innerHTML = message.success;
                    resolve();
                } 
                else {
                    // statusMessage.innerHTML = message.failure;
                    reject();
                }
            };
        



        request.send(json);
        console.log(json);

        });
    }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput());


        

    });





        // Контактная форма

        let contactMessage = {
            loading : "Идет загрузка...",
            success : "Успешно!",
            failure : "что-то пощло не так"
        };

        let contactForm = document.querySelector('#form'),
            contactInput = contactForm.getElementsByTagName('input'),
            contactStatus = document.querySelector('.contact-form-title');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'applications/json; charset=utf-8');
            let cFormData = new FormData(contactForm);
            let obj = {
                mail: contactInput[0].value,
                phone: contactInput[1].value
            };

            let json = JSON.stringify(obj);
            request.send(json);
            console.log(json);
            


            request.addEventListener('readystatechange', function(){
                if (request.readyState < 4) {
                    contactStatus.innerHTML = message.loading;
                } else if (request.readyState == 4 && request.status == 200) {
                    contactStatus.innerHTML = message.success;
                } 
                else {
                    contactStatus.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }

        });

        






}