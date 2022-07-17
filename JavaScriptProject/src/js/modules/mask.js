
// phone number mask
const mask = (selector) => {             

    let setCursorPosition = (position, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {  
            elem.setSelectionRange(position, position);  
        } else if (elem.createTextRange) {             
            let range = elem.createTextRange();        
            range.collapse(true);           
            range.moveEnd('character', position);   
            range.moveStart('character', position);
            range.select();                        
        }
    };

    function createPhoneMask(event) {
        let matrix = '+375 (__) ___ __ __',  
            i = 0,
            def = matrix.replace(/\D/g, ''),     
            val = this.value.replace(/\D/g, '') 
        
        if (def.length >= val.length) {
            val = def;                      
        }
        
        this.value = matrix.replace(/./g, function(symbol) {
            return /[_\d]/.test(symbol) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : symbol;
        });

        if (event.type === 'blur') {
            if (this.value.length == 4) {  
                this.value = '';
            } 
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', createPhoneMask);   
        input.addEventListener('focus', createPhoneMask);  
        input.addEventListener('blur', createPhoneMask);  
    });
};

export default mask;