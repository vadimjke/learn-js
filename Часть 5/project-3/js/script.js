/*jshint loopfunc: true */
'use strict';

    // 'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
        
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function() {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });








    
// Таймер

    let deadline = '2020-06-19';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/1000*60*60*24));

            if (seconds < 10) {seconds = '0'+seconds;}
            if (minutes < 10) {minutes = '0'+minutes;}
            if (hours < 10) {hours = '0'+hours;}

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeinterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        return '';
    }

    setClock('timer', deadline);







    // Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        overlay.style.display = 'none';

        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

  
    let tabsMore = document.querySelectorAll('.description-btn');

        for(let i = 0; i < tabsMore.length; i++) {
            tabsMore[i].addEventListener('click', function() {
                    overlay.style.display = 'block';
            }
            );
        }








        // Форма

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

        








        // Slider

        

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev =  document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });
        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                    currentSlide(i);
                }
            }
        });




        // Calculator

        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.innerHTML = 0;

            persons.addEventListener('change', function() {
                personsSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                }
                else {
                    totalValue.innerHTML = total;
                }
            });

            restDays.addEventListener('change', function() {
                daysSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(persons.value == '' || restDays.value == '') {
                    totalValue.innerHTML = 0;
                }
                else {
                    totalValue.innerHTML = total;
                }
            });

            place.addEventListener('change', function() {
                if(restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                }
                else {
                    let a = total;
                    totalValue.innerHTML = total * this.options[this.selectedIndex].value;
                }
            });

