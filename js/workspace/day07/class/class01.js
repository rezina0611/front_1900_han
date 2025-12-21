// 클래스 앞글자 대문자
/**static 정적메서드 */
// 추상화
class Animal{

    //static ageS = 10;  //정적(static) 프로퍼티 ageS를 선언하고 초기값을 10으로 설정
    //ageF = 10

    //이름, 나이, 종류
    //constructor : 클래스가 객체로 생성될 때 가장 먼저 실행되는 초기 설정 생성자 함수
    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

// 객체화
const rabbit = new Animal('토깽이', 20, '토끼')
const dog = new Animal('멍멍이', 5, '강아지')
const cat = new Animal('냥이', 3, '고양이')

console.log(rabbit)
console.log(dog)
console.log(cat)

/**결과
 * Animal { name: '토깽이', age: 20, species: '토끼' }
   Animal { name: '멍멍이', age: 5, species: '강아지' }
   Animal { name: '냥이', age: 3, species: '고양이' }
 */
// console.log(dog.ageS)
// console.log(dog.ageF)

// console.log(Animal.ageS)
