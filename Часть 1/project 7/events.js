'use strict';




let button = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('#link');


// button[0].onclick = function() {
//     alert("Test alerta");
// };

button[0].addEventListener('click', function(event){
    let target = event.target;
    console.log(event);
    // console.log('event has happened: ' + event.type + 'on element' + event.target);
    // target.style.display = 'none';
});

wrap.addEventListener('click', function(){
    let target = event.target;
    console.log(event);
});

link.addEventListener('click', function(){
    event.preventDefault();
    console.log('event has happened: ' + event.type + 'on element' + event.target);
});

button.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('mouse out');
    });
});

// button[0].addEventListener('mouseenter', function(){
//     alert("Mouse hovered");
// });

