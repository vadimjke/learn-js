/*jshint loopfunc: true */

export function modal() {
    
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



}