// examples from class
// let matrix = [[1, 2],[5, 6],[7, 8]];
// matrix.forEach((row) => row.forEach((element) => console.log(element)));

// let arr = [1,23,5,6,4,5]
// let sum = 0;
// arr.forEach(element => console.log(element));

// arr.forEach(element => (sum += element));
// console.log(sum);

// let add_reducer = (bowl, egg) => bowl + egg;
// console.log(arr.reduce(add_reducer));


/*
let input = () => {
    let arr = [];
    let num1 = document.getElementById('number1').value;
    while (num1 > 0) {
        arr.push(num1--);
    }
    return arr;
};

let factorial = () => {
    let arr = input();
    let mul_reducer = (a, b) => a * b;
    document.getElementById('result1').value = arr.reduce(mul_reducer);
};

//n! = n * n-1 * n-2 * ......
*/

let arr = ['UK','US','UAE','UN'];

let createOption = (country) => {
    let o = document.createElement('option');
    o.value = country;
    o.text = country;
    return o;
};

let options = arr.map(createOption);

options.forEach((option) => 
  document.getElementById('countries').appendChild(option));
