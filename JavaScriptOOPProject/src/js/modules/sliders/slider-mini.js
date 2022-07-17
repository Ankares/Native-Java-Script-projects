

import Slider from "./slider";

// Local sliders on the pages
export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {         
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if(this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[2]); 
            this.container.appendChild(this.slides[1]); 
            this.container.appendChild(this.slides[0]); 
            this.decorizeSlides();
        } else if (this.slides[1].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[1]); 
            this.container.appendChild(this.slides[0]); 
            this.decorizeSlides();
        } else {
            this.container.appendChild(this.slides[0]); 
            this.decorizeSlides();
        }
    }

    prevSlide() {
        for (let i = this.slides.length - 1; i > 0; i--) {
            if (this.slides[i].tagName != 'BUTTON') {
                let currentSlide = this.slides[i];
                this.container.insertBefore(currentSlide, this.slides[0]);
                this.decorizeSlides();
                break;
            }
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());
        this.prev.addEventListener('click', () => this.prevSlide());
    }

    autoPlaySlides() {
        if(this.autoplay) {
            let pause;

            pause = setInterval(() => {
                this.nextSlide();
            }, 5000);

            this.next.addEventListener('mouseover', () => {
                clearInterval(pause);
            })
            this.prev.addEventListener('mouseover', () => {
                clearInterval(pause);
            })
            this.next.addEventListener('mouseout', () => {
                pause = setInterval(() => {
                this.nextSlide();
            }, 5000);
            })
            this.prev.addEventListener('mouseout', () => {
                pause = setInterval(() => {
                this.nextSlide();
            }, 5000);
            })
        }
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();
        this.autoPlaySlides();
        } catch(e){}
    } 
}