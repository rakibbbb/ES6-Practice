const num1 = [15, 20, 18, 14, 35, 36, 31, 43];
const num2 = [22, 19, 26, 28];

//const addArray = num1.concat(num2);
const addArray = [...num1, 5, ...num2];
console.log(addArray);

//Max num
const a = 500;
const b = 300;
const c = 350;

const max = Math.max(a, b, c);
//console.log(max);

const num = [ 350, 600, 550];
const max1 = Math.max(...num);
console.log(max1);