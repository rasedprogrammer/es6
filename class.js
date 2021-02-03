class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.schoolName = "School Name";
    }
}

const student1 = new Student(22, "Rased");
const student2 = new Student(20, "Female");

console.log(student1, student2);