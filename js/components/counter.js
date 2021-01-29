/*
Reikalavimai:
-rasti vieta
-istraukti skaiciu 
-kas sekunde ta skaiciu mazinti iki nulio
-pasiekus 0, parasyti finito
*/


function counter (selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        DOM.innerText = number;
        number--;
        if (number < 0) {
            clearInterval(timer);
            DOM.innerText = 'The END';
        }
    }, 1000);

}


export { counter }