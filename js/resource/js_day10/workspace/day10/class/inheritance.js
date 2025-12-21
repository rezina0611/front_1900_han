class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 학생 (이름, 나이, 학번)
class Student extends Person {
    constructor(id, name, age){
        super(name, age)
        this.id = id
    }
}

const jang = new Student(10, '수연', 20);
const hong = new Student(2, '길동', 30);
const lee = new Student(3, '보고', 40);
const kim = new Person('철수', 40);

console.log(jang)
console.log(hong)
console.log(lee)
console.log(kim)



