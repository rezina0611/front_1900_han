// 클래스 앞글자 대문자
// 추상화
class Animal{

    static ageS = 10;
    ageF = 10

    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// 객체화
// rabbit(객체)
const rabbit = new Animal('토깽이', 20, '토끼')
const dog = new Animal('멍멍이', 5, '강아지')
const cat = new Animal('냥이', 3, '고양이')

console.log(rabbit)
console.log(dog)
console.log(cat)

console.log(dog.ageS)
console.log(dog.ageF)

console.log(Animal.ageS)
