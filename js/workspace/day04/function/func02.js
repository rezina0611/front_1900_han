//디폴트 파라미터는 값이 전달되지 않는 함수
//만약 3개의 정수를 더해서 결과를 알려주는 함수
function sum(num1, num2, num3 = 0){
  return num1 + num2 + num3
}
console.log(sum(10, 20)) 


//가변인자 : 매개변수의 최대 갯수가 지정되지 않은 함수
function sum2(...numbers){
  console.log(numbers[0])
  console.log(numbers[1])
  console.log(numbers[2])
  console.log(numbers[3])
}
sum2(10, 20, 30, 40, 50, 60, 60, 70, 80)


//화살표 함수(ES6)
//이름을 받아서 이름을 출력해주는 함수
function printName(name){console.log(name)}
const printNameArrow = (name) =>{
  console.log(name)
}

// 두수를 더해서 두수의 결과값을 알려주는 함수
function add(num1, num2){return num1 + num2}
const addArrow = (num1, num2) => {
  return num1 + num2
}

// 중괄호{}와 return 키워드를 생략하면 통째로가 리턴값
const addArrow2 = (num1, num2) => num1 + num2

