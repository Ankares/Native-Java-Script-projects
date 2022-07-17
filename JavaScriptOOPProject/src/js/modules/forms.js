

// Forms
export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this. message = {
            loading: 'loading...',
            success: 'Thanks!',
            fail: 'Something go wrong'
        };
        this.path = 'assets/question.php';
    }

    cleatInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    mailValidation(){
        const mailInputs = document.querySelectorAll('[type="email"]');

        mailInputs.forEach(mail => {
            mail.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }   
            });
        });
    }

    // creating USA phone mask
    initMask() {
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
            let matrix = '+1 (___) ___-____',  
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
                if (this.value.length == 2) {  
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this); 
            }
        }

        let phoneInputs = document.querySelectorAll('[name="phone"]');

        phoneInputs.forEach(input => {
            input.addEventListener('input', createPhoneMask);  
            input.addEventListener('focus', createPhoneMask); 
            input.addEventListener('blur', createPhoneMask); 
        });
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    init() {
        this.mailValidation();
        this.initMask();

        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: gray;
                `;
                item.parentNode.appendChild(statusMessage);
                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.fail;
                    })
                    .finally(() => {
                        this.cleatInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        },6000);
                    });
            })
        });
    }
}