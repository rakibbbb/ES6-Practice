const person = {name: 'Rakib', age: 24, varsity: 'IUBAT', address: 'Mirpur-1'};

const {name, age, address} = person;
// console.log(person.name ,person.address);
console.log(name, age, address);

const complexObject = {
    name: 'abc',
    info:{
        place : 'kolabagan',
        mobile : '01711223345'
    }
}

const {place, mobile} = complexObject.info;
console.log(complexObject.name, place, mobile);