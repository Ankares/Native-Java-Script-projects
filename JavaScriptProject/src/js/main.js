/* jshint esversion:7 */ 

import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import showPicture from './modules/showPicture';
import accordion from './modules/accordion';
import menu from './modules/menu';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.main-slider-item', 'vertical', '', '');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    showPicture('.sizes-block');
    accordion('.accordion-heading');  
    menu('.burger', '.burger-menu'); 
    scrolling('.pageup');
    drop();
});