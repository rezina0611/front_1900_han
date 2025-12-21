console.log("변수")

// 변수의 선언
let age1

// 변수의 초기화
let age2 = 10
let age3 = "10"

// console.log(age1, typeof(age1))  // undefined
// console.log(age2, typeof(age2))  // 10 number
// console.log(age3, typeof(age3))  // 10 string

// console.log(age1, typeof(age1))  // undefined
// console.log(age2 + 10, typeof(age2))  // 20 number  정수 + 값 => 연산
// console.log(age3 + 10, typeof(age3))  // 1010 string  문자열 + 값 => 연결

// console.log(age2 - 10) // 0 
// console.log(age3 - 10) // 0  문자열 - 10  문자열을 숫자로 강제로 변환
// console.log("한" - 10) // NaN

// 호이스팅
const age4 = 1000;
age4 = 1000
age4 = 1000
age4 = 10000
age4 = 5000
age4 = 500
console.log(age4)

// var 쓰지 말자!
// let(ES6) : 변수 값이 변함
// const (ES6) : 상수 값이 변하지 않음