/* example using a for loop
const arr = [1,2,3,4,5,6,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
*/
/* session 1
// this is not working correctly to calculate a factorial
function factorial() {
let num1 = parseInt(document.getElementById('number1').value);
let sum1 = 0;

    for (; num1 > 0; num1--) {
        //console.log(i);
        sum1 *= num1
    }
document.getElementById('result1').value = sum1;
}

//n! = n * n-1 * n-2 * ......
*/

let carList = [];
//let carList = [{ Brand: 'ford', Model: 'a', Colour: 'red', Prince: '10' }];

function addCar () {
    let car = {
        Brand: document.getElementById('Brand').value,
        Model: document.getElementById('Model').value,
        Colour: document.getElementById('Colour').value,
        Price: document.getElementById('Price').value
    };
carList.push(car);
document.getElementById('Brand').value = '';
document.getElementById('Model').value = '';
document.getElementById('Colour').value = '';
document.getElementById('Price').value = '';
console.log(carList);
}

function showList() {
    //document.getElementById('ShowCars').innerHTML = '';
    for (let i = 0; i < carList.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML += `<p>${carList[i].Brand}</p><p>${carList[i].Model}</p><p>${carList[i].Colour}</p><p>${carList[i].Price}</p>`;
        document.getElementById('showCars').appendChild(card);
    }
}