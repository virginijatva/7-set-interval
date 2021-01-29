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
        showMeNumber(number);
        number--;
        if (number < 0) {
            clearInterval(timer);
        }
    }, 1000);

}

function showMeNumber(num) {
    console.log(num);
}

export { counter }