let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');


function myAnimatio(){
    let pos = 0,
        id = setInterval(frame, 10);


function frame(){
    if (pos == 300){
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

}

btn.addEventListener('click', myAnimatio);

let btnLock = document.querySelector('.btn-block'),
    buttons = document.getElementsByTagName('button');

btnLock.addEventListener('click', function(event){
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        console.log('works');
    }
});