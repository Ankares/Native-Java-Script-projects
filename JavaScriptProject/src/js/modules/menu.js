
// drop-down product catalog
const menu = (triggerSelector, menuSelector) => {
    const triggerElem = document.querySelector(triggerSelector),
          menuElem = document.querySelector(menuSelector);

    menuElem.style.display = 'none';

    triggerElem.addEventListener('click', () => {
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) { 
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });
};

export default menu;