const animals = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이"
}

const animals2 = animals

// 깊은 복사
// 1. spread
// 2. Object.assign({}, 복사할 객체)
const animals3 = Object.assign({}, animals2)
animals3.rabbit = "토깽이"

console.log(animals2)
console.log(animals3)

// 배열의 메서드 중 새로운 배열을 리턴하는 문법들
const arr1 = ['홍길동', '장보고', '이순신']
const arr2 = arr1 
// arr2.push("김철수")

// console.log(arr1)
// console.log(arr2)
// 3. .map() 
const arr3 = arr1.map((name) => name)
arr3.push("김철수")
console.log(arr1)
console.log(arr3)

// 4. .filter()
// 5...