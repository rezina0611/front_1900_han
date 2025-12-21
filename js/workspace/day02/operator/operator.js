console.log("테스트!");

//최우선 연산자 "()"
console.log(10 * 2 + 3);
console.log(10 * (2 + 3));

const num1 = 10
console.log(num1++);  // 10
console.log(num1);  // 11

// !낫(not) 연산자
console.log(true)
console.log(!false)
console.log(!0)

// 산술연산자(+, -, *, /, %)
// 문자열 + 숫자형 => 연결
// 숫자형 + 숫자형 => 연산
console.log("홍길동" + 10) //홍길동10
console.log("10" + 10)  // 1010
console.log(10 - 7)   //3
console.log("ㄱ" - 10) //NaN  false
console.log("50" - 10) // 40
console.log(10 % 2) // 0

//여려분들 마음대로 숫자를 정해서, 그숫자가 6의 배수라면 true, 아니라면 false를 출력하시오.
// 힌트: %, 그 외 연산자들...
let num2 = 200
if(num2 % 6){
  console.log('true');
}else{
  console.log('false');
}

let num3 = 1238192389103
console.log(num3 % 6)
console.log(!(num3 % 6))

let money = 1000000
money -= 1000
money /= 1000
money *= 1000
money += 1000
console.log(money)

//관계연산자  
console.log("10" == 10)  // true  문자가 숫자이면 자바스크립트가 임의로 숫자로 변환
console.log("10" === 10)  // false

let a = 10
console.log(true && a++)
console.log(a)
console.log(false && a++)
console.log(a)
console.log(10 || false)
console.log(false || 20 < 15)
console.log(false || 20)

//삼항연산자
console.log(20 > 4 ? "20이 큽니다" : "20이 작습니다.")

// 삼항연사자 사용
// 실습1) 어떤 값이 실수하면 실수입니다. 정수라면 정수입니다를 출력하는 삼항식
console.log(100 / 3 ? '실수입니다.' : '정수입니다.')

let num = 123.123
let result = num % 1 === 0 ? '정수입니다.' : '실수입니다.'
let result2 = num % 1 ? '실수입니다' : '정수입니다'
console.log(result)
console.log(result2)

// 실습2) 어떤 값이 짝수하면 짝수입니다. 홀수라면 홀수입니다를 출력하는 삼항식
let num4 = 157483
let res = (num4 % 2 === 0) ? '짝수입니다.' : '홀수입니다.'
console.log(res);

console.log(parseInt(123.123));   //parseInt()정수로 변환
let num5 = 1234.1234
let num6 = parseInt(num4)
console.log(num5 === num6 ? "정수입니다" : "실수입니다")
