/*
// this is an example of how you can insert elements into HTML with JS
let main = document.querySelector('main');

let h1 = document.createElement('h1');
h1.innerHTML = "Hello World!";
// add the element
main.appendChild(h1);
// remove the element
//main.removeChild(h1);
*/

// session 1
// function convert() {
//     let celcius = document.querySelector('#c').Value;
//     //console.log(celcius);
//     document.querySelector('#f').value = celcius * (9/5) + 32;
// }

// Session 2
// let num1, num2;

// function input() {
//     num1 = parseInt(document.getElementById('number1').value);
//     num2 = parseInt(document.getElementById('number2').value);
// }

// function add() {
//     input()
//     console.log(num1);
//     console.log(num2);
//     document.getElementById('result1').value = num1 + num2;
// }

// function subtract() {
//     input()
//     console.log(num1);
//     console.log(num2);
//     document.getElementById('result1').value = num1 - num2;
// }

// function multiply() {
//     input()
//     console.log(num1);
//     console.log(num2);
//     document.getElementById('result1').value = num1 * num2;
// }

// session 3
function check() {
    let num = parseInt(document.getElementById('number1').value);
    let mynum = 7;
    let text = '';

    if (num > mynum) {
        text += 'You win';
    } else {
        text += 'You lose';
    }
//document.getElementById('res').innerHTML += text;
document.getElementById('res').innerHTML = text;
}
