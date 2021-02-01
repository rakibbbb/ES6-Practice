// function doubleIt(num){
//     return num * 2;    
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const addNum = (x, y) => x + y;
const give = () => 5;
const math = (x, y) =>{
    const add = x + y;
    const diff = x - y;
    const multiply = add * diff;
    return multiply;
}

const result = doubleIt(8);
console.log(result);
const add = addNum(50, 70);
console.log(add);

const answer = give();
console.log(answer);

const output = math(5, 2);
console.log(output);