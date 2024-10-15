const display = document.getElementById('display');

function appendDisplay(a) {
    try {
        display.value += a;
        console.log(a);
    } catch (error) {
        display.value = "error on value";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
        console.log(display.value);
    } catch (error) {
        display.value = "error in calculation";
    }
}

function clearDisplay() {
    display.value = '';
}


// var a = '1-5+88/223+4'
// function cal(){
//     let s = eval(a);
//     console.log(s);
// }

// cal();