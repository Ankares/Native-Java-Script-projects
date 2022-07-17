/* jshint esversion:6 */

import MainSlider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {

    // main slider - switching main pages
    const slider = new MainSlider({btns: '.next', container: '.page'}); 
    slider.render();

    // main slider in modules.html
    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    // sliders on the pages
    const miniSlider = new MiniSlider({
        container: '.showup__content-slider', 
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    miniSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    // video player main
    new VideoPlayer('.showup .play', '.overlay').init();
    // video player in modules.html
    new VideoPlayer('.module__video-item .play', '.overlay').init();
    new Difference('.officerold', '.officernew', '.officer__card-item').init(); 
    new Form('.form').init();
    new ShowInfo('.plus').init();
    new Download('.download').init();
});