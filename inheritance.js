class Parent {
    constructor() {
        this.father = "fatherName";
    }
}


class Child extends Parent {
    constructor(name) {
        super();
        this.childName = name;
    }
    allValueName() {
        return this.childName + " " + this.father;
    }
}

const name = new Child("Jupiter");
console.log(name);
console.log(name.allValueName());