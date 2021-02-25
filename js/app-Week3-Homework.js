// Question 1
// const mul = (num1, num2, num3) => { return num1 + num2 + num3}
// console.log(mul(2,5,5));

// Question 2
// const Hello1 = (name1) => {
//     return 'Hello, my name is ' + name1 + '.'
//   }
//   console.log(Hello1('justin'));

// Question 3
// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// console.log(reverseString("hello"));

// Question 4

function firstNoneRepeating(list, map = new Map()) {
    for (let item of list) {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    }
    for (let [key, value] of map.entries()) {
      if (value === 1) {
        return key;
      }
    }
  }
  console.log(firstNoneRepeating("aabcbd"));
  console.log(firstNoneRepeating([5, 2, 3, 4, 2, 6, 7, 1, 2, 3]));
