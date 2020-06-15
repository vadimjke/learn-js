import {timer} from './js/timer.js';
import {form} from './js/form.js';
import {calc} from './js/calc.js';
import {slider} from './js/slider.js';
import {tabs} from './js/tabs.js';
import {modal} from './js/modal.js';




// window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function() {
 
    'use strict';

    // let calc = require('./js/calc.js'),
    //     form = require('./js/form.js'),
    //     slider = require('./js/slider.js'),
    //     tabs = require('./js/tabs.js'),
    //     timer = require('./js/timer.js'),
    //     modal = require('./js/modal.js');



    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});