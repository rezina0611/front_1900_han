// 인터페이스도 타입이다
//type SomeType = {}

interface Animal {
  species: string;
  canSpeak: boolean;
  numberOfLegs: number;
}

const myAnimal:Animal = {
  canSpeak: false,
  species: "강아지",
  numberOfLegs: 4
}

const mySnake:Animal = {
  canSpeak: true,
  species: "뱀",
  numberOfLegs: 0
}

const introduce = (animal:Animal) => {
  for(let key in animal){
    const k = key as keyof Animal
    console.log(animal[k])
    //console.log(key)
  }
}
introduce(mySnake)

//extends 상속
//포유류
interface Mammal extends Animal {
  age: number;
  numberOfLegs: number;
}

const myHuman: Mammal = {
  species: "호모 사피엔스",
  canSpeak: false,
  numberOfLegs: 2,
  age: 6
}

//타입 알리아스(type aliases)
type AnimalAlias = Animal;

//Fixed Value
interface Machine {
  powerlevel: number;
  material: "metal" | "plastic"
}

const myMachine:Machine = {
  powerlevel: 10,
  material: "plastic"
} 

//Union Types  합집합 
// & : 연산자는 모든 타입의 속성을 합치고 싶을 때 사용
type MyUnionType = Animal & Machine & Mammal
const myUnionVar: MyUnionType = {
  age: 10,
  canSpeak: true,
  material: "metal",
  numberOfLegs: 4,
  powerlevel: 2,
  species: "인조인간"
}

//| 연산자 세가지 타입을 유동적으로 바꿀수 있다
//반드시 한가지 타입을 만족해야 하며 섞어 사용할수 있음
type MyUnionType1 = Animal | Machine | Mammal
const myUnionVar1: MyUnionType1 = {
  species: "동물",
  canSpeak: true,
  numberOfLegs: 10
}

// 기본 자료형도 사용할수 있다
type NumberOrString = number | string
const numberOrString:NumberOrString = "10"
const numberOrString1:NumberOrString = 10

function myUnionfunc(param: number | string):string | number {
  return param
}
