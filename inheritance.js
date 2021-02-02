class Parent{
    constructor(){
        this.fatherName = "Solimullah";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return (this.fatherName + ' ' + this.name);
    }
}

const baby = new Child('Kawsar');
const baby1 = new Child('Kamal');
console.log(baby);
console.log(baby1.getFullName());