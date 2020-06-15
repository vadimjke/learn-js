/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\nfunction calc() {\r\n    \r\n    let persons = document.querySelectorAll('.counter-block-input')[0],\r\n    restDays = document.querySelectorAll('.counter-block-input')[1],\r\n    place = document.getElementById('select'),\r\n    totalValue = document.getElementById('total'),\r\n    personsSum = 0,\r\n    daysSum = 0,\r\n    total = 0;\r\n\r\n    totalValue.innerHTML = 0;\r\n\r\n    persons.addEventListener('change', function() {\r\n        personsSum = +this.value;\r\n        total = (daysSum + personsSum) * 4000;\r\n\r\n        if(restDays.value == '' || persons.value == '') {\r\n            totalValue.innerHTML = 0;\r\n        }\r\n        else {\r\n            totalValue.innerHTML = total;\r\n        }\r\n    });\r\n\r\n    restDays.addEventListener('change', function() {\r\n        daysSum = +this.value;\r\n        total = (daysSum + personsSum) * 4000;\r\n\r\n        if(persons.value == '' || restDays.value == '') {\r\n            totalValue.innerHTML = 0;\r\n        }\r\n        else {\r\n            totalValue.innerHTML = total;\r\n        }\r\n    });\r\n\r\n    place.addEventListener('change', function() {\r\n        if(restDays.value == '' || persons.value == '') {\r\n            totalValue.innerHTML = 0;\r\n        }\r\n        else {\r\n            let a = total;\r\n            totalValue.innerHTML = total * this.options[this.selectedIndex].value;\r\n        }\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/calc.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nfunction form() {\r\n    \r\n    let message = {\r\n        loading : \"Идет загрузка...\",\r\n        success : \"Успешно!\",\r\n        failure : \"что-то пощло не так\"\r\n    };\r\n\r\n    let form = document.querySelector('.main-form'),\r\n        input = form.getElementsByTagName('input'),\r\n        statusMessage = document.createElement('div');\r\n\r\n        statusMessage.classList.add('status');\r\n\r\n\r\n    form.addEventListener('submit', function(event) {\r\n        event.preventDefault();\r\n        form.appendChild(statusMessage);\r\n        let formData = new FormData(form);\r\n        let obj = {};\r\n        formData.forEach(function(value, key) {\r\n            obj[key] = value;\r\n        });\r\n        \r\n        let json = JSON.stringify(obj);\r\n\r\n        function postData() {\r\n\r\n        return new Promise(function(resolve, reject) {\r\n            let request = new XMLHttpRequest();\r\n            request.open('POST', 'server.php');\r\n            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n            request.setRequestHeader('Content-Type', 'applications/json; charset=utf-8');\r\n\r\n            request.onreadystatechange = function() {\r\n                if (request.readyState < 4) {\r\n                    // statusMessage.innerHTML = message.loading;\r\n                    resolve();\r\n                } else if (request.readyState == 4 && request.status == 200) {\r\n                    // statusMessage.innerHTML = message.success;\r\n                    resolve();\r\n                } \r\n                else {\r\n                    // statusMessage.innerHTML = message.failure;\r\n                    reject();\r\n                }\r\n            };\r\n        \r\n\r\n\r\n\r\n        request.send(json);\r\n        console.log(json);\r\n\r\n        });\r\n    }\r\n        function clearInput() {\r\n            for (let i = 0; i < input.length; i++) {\r\n                input[i].value = '';\r\n            }\r\n        }\r\n\r\n        postData(formData)\r\n            .then(()=> statusMessage.innerHTML = message.loading)\r\n            .then(()=> statusMessage.innerHTML = message.success)\r\n            .catch(()=> statusMessage.innerHTML = message.failure)\r\n            .then(clearInput());\r\n\r\n\r\n        \r\n\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n        // Контактная форма\r\n\r\n        let contactMessage = {\r\n            loading : \"Идет загрузка...\",\r\n            success : \"Успешно!\",\r\n            failure : \"что-то пощло не так\"\r\n        };\r\n\r\n        let contactForm = document.querySelector('#form'),\r\n            contactInput = contactForm.getElementsByTagName('input'),\r\n            contactStatus = document.querySelector('.contact-form-title');\r\n\r\n        contactForm.addEventListener('submit', function(event) {\r\n            event.preventDefault();\r\n            let request = new XMLHttpRequest();\r\n            request.open('POST', 'server.php');\r\n            request.setRequestHeader('Content-Type', 'applications/json; charset=utf-8');\r\n            let cFormData = new FormData(contactForm);\r\n            let obj = {\r\n                mail: contactInput[0].value,\r\n                phone: contactInput[1].value\r\n            };\r\n\r\n            let json = JSON.stringify(obj);\r\n            request.send(json);\r\n            console.log(json);\r\n            \r\n\r\n\r\n            request.addEventListener('readystatechange', function(){\r\n                if (request.readyState < 4) {\r\n                    contactStatus.innerHTML = message.loading;\r\n                } else if (request.readyState == 4 && request.status == 200) {\r\n                    contactStatus.innerHTML = message.success;\r\n                } \r\n                else {\r\n                    contactStatus.innerHTML = message.failure;\r\n                }\r\n            });\r\n\r\n            for (let i = 0; i < contactInput.length; i++) {\r\n                contactInput[i].value = '';\r\n            }\r\n\r\n        });\r\n\r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\n/*jshint loopfunc: true */\r\n\r\nfunction modal() {\r\n    \r\n    let more = document.querySelector('.more'),\r\n        overlay = document.querySelector('.overlay'),\r\n        close = document.querySelector('.popup-close');\r\n        overlay.style.display = 'none';\r\n\r\n        more.addEventListener('click', function() {\r\n            overlay.style.display = 'block';\r\n            this.classList.add('more-splash');\r\n            document.body.style.overflow = 'hidden';\r\n        });\r\n\r\n        close.addEventListener('click', function() {\r\n            overlay.style.display = 'none';\r\n            more.classList.remove('more-splash');\r\n            document.body.style.overflow = '';\r\n        });\r\n\r\n  \r\n    let tabsMore = document.querySelectorAll('.description-btn');\r\n\r\n        for(let i = 0; i < tabsMore.length; i++) {\r\n            tabsMore[i].addEventListener('click', function() {\r\n                    overlay.style.display = 'block';\r\n            }\r\n            );\r\n        }\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider() {\r\n    \r\n\r\n    let slideIndex = 1,\r\n    slides = document.querySelectorAll('.slider-item'),\r\n    prev =  document.querySelector('.prev'),\r\n    next = document.querySelector('.next'),\r\n    dotsWrap = document.querySelector('.slider-dots'),\r\n    dots = document.querySelectorAll('.dot');\r\n\r\nshowSlides(slideIndex);\r\n\r\nfunction showSlides(n) {\r\n\r\n    if (n > slides.length) {\r\n        slideIndex = 1;\r\n    }\r\n\r\n    if (n < 1) {\r\n        slideIndex = slides.length;\r\n    }\r\n\r\n    slides.forEach((item) => item.style.display = 'none');\r\n    dots.forEach((item) => item.classList.remove('dot-active'));\r\n\r\n    slides[slideIndex - 1].style.display = 'block';\r\n    dots[slideIndex - 1].classList.add('dot-active');\r\n}\r\n\r\nfunction plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n}\r\nfunction currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n}\r\n\r\nprev.addEventListener('click', function() {\r\n    plusSlides(-1);\r\n});\r\nnext.addEventListener('click', function() {\r\n    plusSlides(1);\r\n});\r\n\r\ndotsWrap.addEventListener('click', function(event) {\r\n    for (let i = 0; i < dots.length + 1; i++) {\r\n        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {\r\n            currentSlide(i);\r\n        }\r\n    }\r\n});\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\nfunction tabs() {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n    info = document.querySelector('.info-header'),\r\n    tabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\nfunction hideTabContent (a) {\r\n    for (let i = a; i < tabContent.length; i++) {\r\n        tabContent[i].classList.remove('show');\r\n        tabContent[i].classList.add('hide');\r\n    }\r\n}\r\n    \r\nhideTabContent(1);\r\n\r\nfunction showTabContent(b) {\r\n    if (tabContent[b].classList.contains('hide')) {\r\n        tabContent[b].classList.remove('hide');\r\n        tabContent[b].classList.add('show');\r\n    }\r\n}\r\n\r\ninfo.addEventListener('click', function() {\r\n    let target = event.target;\r\n    if (target && target.classList.contains('info-header-tab')) {\r\n        for(let i = 0; i < tab.length; i++) {\r\n            if (target == tab[i]) {\r\n                hideTabContent(0);\r\n                showTabContent(i);\r\n                break;\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/tabs.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction timer() {\r\n    \r\n    let deadline = '2020-06-16';\r\n\r\n    function getTimeRemaining(endTime) {\r\n        let t = Date.parse(endTime) - Date.parse(new Date()),\r\n            seconds = Math.floor((t/1000) % 60),\r\n            minutes = Math.floor((t/1000/60) % 60),\r\n            hours = Math.floor((t/1000/60/60));\r\n            // hours = Math.floor((t/1000/60/60) % 24),\r\n            // days = Math.floor((t/1000*60*60*24));\r\n\r\n            if (seconds < 10) {seconds = '0'+seconds;}\r\n            if (minutes < 10) {minutes = '0'+minutes;}\r\n            if (hours < 10) {hours = '0'+hours;}\r\n\r\n            return {\r\n                'total': t,\r\n                'hours': hours,\r\n                'minutes': minutes,\r\n                'seconds': seconds\r\n            };\r\n    }\r\n\r\n    \r\n    function setClock(id, endTime) {\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            timeinterval = setInterval(updateClock, 1000);\r\n\r\n        function updateClock() {\r\n            let t = getTimeRemaining(endTime);\r\n            hours.textContent = t.hours;\r\n            minutes.textContent = t.minutes;\r\n            seconds.textContent = t.seconds;\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeinterval);\r\n            }\r\n        }\r\n    }\r\n\r\n    setClock('timer', deadline);\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/timer.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/timer.js */ \"./src/js/timer.js\");\n/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/form.js */ \"./src/js/form.js\");\n/* harmony import */ var _js_calc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calc.js */ \"./src/js/calc.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/tabs.js */ \"./src/js/tabs.js\");\n/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modal.js */ \"./src/js/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// window.addEventListener('load');\r\nwindow.addEventListener('DOMContentLoaded', function() {\r\n \r\n    'use strict';\r\n\r\n    // let calc = require('./js/calc.js'),\r\n    //     form = require('./js/form.js'),\r\n    //     slider = require('./js/slider.js'),\r\n    //     tabs = require('./js/tabs.js'),\r\n    //     timer = require('./js/timer.js'),\r\n    //     modal = require('./js/modal.js');\r\n\r\n\r\n\r\n    Object(_js_calc_js__WEBPACK_IMPORTED_MODULE_2__[\"calc\"])();\r\n    Object(_js_form_js__WEBPACK_IMPORTED_MODULE_1__[\"form\"])();\r\n    Object(_js_slider_js__WEBPACK_IMPORTED_MODULE_3__[\"slider\"])();\r\n    Object(_js_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"tabs\"])();\r\n    Object(_js_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"timer\"])();\r\n    Object(_js_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"modal\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });