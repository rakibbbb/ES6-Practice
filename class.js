class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'BCIC';
    }
}

const student1 = new Student(15, 'Rakib');
const student2 = new Student(6, 'Asha');
console.log(student1);
console.log(student2);