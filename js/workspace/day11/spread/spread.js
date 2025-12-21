const animals = {
  cat: "그레이",
  dog: "바둑이",
  cow: "얼룩이",
  trger: "어흥이",
}

//기존의 animals에 새로운 동물 추가 (낙타추가)
//얕은 복사
const animals2 = animals
animals.dog = "시골개"  //key가 있으면 수정
animals.camel = '낙타'  //key가 없으면 추가

// console.log(animals)
// console.log(animals2)
// console.log("========================================================================")

//spread(ES6) - 깊은 복사(1dept)
//객체를 위한 문법
const animals3 = {...animals2, rabbit: "토깽이"}
// console.log(animals2)
// console.log(animals3)

const {cat, ...others} = animals3
// console.log("cat", cat)
// console.log("others", others)


//가변 매개변수 레스파라미터
// function sum(...numbers){
//   console.log(numbers)
// }
//sum(10, 20, 30, 40)

// concat() 배열 합치기
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

//ES5
const numbers3 = arr1.concat(arr2, arr3)   

//ES6
const numbers1 = [...arr1, ...arr2, ...arr3]
const numbers2 = [arr1, arr2, arr3]
// console.log(numbers1)
// console.log(numbers2[2][1])
/**[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] */

//바벨 : ES6버전을 ES5버전으로 맞추기위해 버전 다운시키는것

console.log(numbers2)
// const [arr4, arr5, arr6] = numbers2
// const newArray = [...arr4, ...arr5, ...arr6]

// ES10 - 평탄화(차원 축소)
// .flat(), .flatMap()
console.log(numbers2.flat())
