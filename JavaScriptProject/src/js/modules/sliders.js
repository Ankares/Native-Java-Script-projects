
// slider
const sliders = (slides, movement, prev, next) => {
    let slideIndex = 1,
        paused = false;     
    
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;      
        }

        if (n < 1) {
            slideIndex = items.length;  
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1)
            items[slideIndex - 1].classList.remove('slideInRight');   
            items[slideIndex - 1].classList.add('slideInLeft');     
        }); 
        
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        }); 

    } catch(e) {}

    // activate slider when mouse out
    function activateAnimation() {
        if (movement === 'vertical') {
            paused = setInterval (function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown'); 
            }, 4000);
        } else {
            paused = setInterval (function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, 4000);
        }
    }

    items[slideIndex - 1].parentNode.addEventListener('mouseover', () => {
        clearInterval(paused);
    });
    items[slideIndex - 1].parentNode.addEventListener('mouseout', () => {
        activateAnimation();
    });

    activateAnimation();
};
 
export default sliders;