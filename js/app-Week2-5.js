let colours = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];


let button = document.getElementById('button');


button.addEventListener('click', function() {
    let index = parseInt((Math.random() * colours.length) + 1);
     let canvas = document.getElementById('canvas');

     canvas.style.background = `${colours[index]}`
});