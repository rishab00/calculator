const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click',calculate);
});

function calculate(event) {
    const ClickedButtonValue = event.target.value;

    if (ClickedButtonValue == '='){
        if (display.value !== ''){
            display.value = eval(display.value);
        }
    }
    else if(ClickedButtonValue == 'AC'){
        display.value = '';
    }
    else{
        display.value += ClickedButtonValue;
    }
}