//화살표 함수 실습

//1) 성과 이름을 받으면 연결 후 "님"을 붙여주는 함수
/**1. const 상수선언
 * 이름을 짓기
 * () =>{}
 * 함수로직 작성
 */
const func = (last, first) => {
  let name = last + first + '님'
  return name
}
func("정성","한")

//2) 두수를 받아서 두수를 제일 큰값을 알려주는 함수 (최대값)
const getMinAndMax = (a, b) =>{
  let res = ''
  if(a === b){
    res = "두수가 같습니다"
  }else if(a > b) {  //a가 큰 경우
    res = a
  }else{  //b가 큰 경우
    res = b
  }
  return res
}
getMinAndMax(10, 20)



//3) 홀수인지 짝수인지 출력해주는 함수
const addoven = (n) =>{
  if(n % 2 === 0){
    return '짝수'
  }else{
    return '홀수'
  }
}
addoven(10)

//4) 2단부터 9단까지 전체 출력하는 함수
function gugudanAll(){
  for(let dan = 2; dan <= 9; dan++){
    console.log(`=== ${dan}단 ===`); 
    for(let i = 1; i <= 9; i++ ){
      console.log(`${dan} * ${i} = ${dan * i}`);
    }
  }
}
gugudanAll()

function 구구단(dan){
  console.log(`=== ${dan}단 ===`);
  for(let i = 1; i < 10; i++){
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
구구단(2)


// 화살표 함수 실습
// 1) 성과 이름을 받으면 연결 후 "님"을 붙여주는 함수
// 1. const 상수
// 2. 이름을 짓는다
// 3. () => {} 함수를 정의한다.
// 4. 함수 로직을 작성한다.
const addNim = (lastName, firstName) => { return lastName + firstName + "님" }
const addNim2 = (lastName, firstName) => lastName + firstName + "님"

let name = addNim("홍", "길동")
console.log(name)

// 2) 두 수를 받아서 두 수 중 제일 큰 값을 알려주는 함수
const getMinAndMax3 = (num1, num2) => { 
  let result = ""
  if(num1 === num2) { // 같은 경우
    result = "두 수가 같습니다." 
  }else if(num1 > num2){ // num1이 큰 경우
    result = num1
  }else{ // num2가 큰 경우
    result = num2
  }
  return result
}
getMinAndMax3(10, 20)

// 3) 홀수인지 짝수인지 출력해주는 함수
const getOddOrEven = (num) => {console.log(num % 2 === 0 ? "짝수" : "홀수")}
getOddOrEven(10)