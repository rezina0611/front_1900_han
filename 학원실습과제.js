
/**개념 문제 */
//charAt() : 인수로 전달된 문자열의 인덱스 위치에 해당하는 문자를 반환
//parselent() : 문자열을 정수로 변환
//콜백함수 : 다른 함수에 인자로 전달되어 특정 작업이 완료된 후 호출되는 함수
//익명 함수는 이름이 없는 함수 
//함수를 변수에 할당하거나, 다른 함수의 인자로 전달할 때 주로 사용
//즉시 실행 함수 (IIFE) 함수가 정의되자마자 즉시 실행되는 함수 


//이름, 나이, 취미를 변수에 담아서 콘솔에 출력하세요
let nmae = "한정성"
let age = 47
let hobby = "범죄스릴러보기"
console.log(`저의 이름은 '${name}'이고, 나이는 ${age}살, 취미는 '${hobby}'입니다.`);

//여려분들 마음대로 숫자를 정해서, 그숫자가 6의 배수라면 true, 아니라면 false를 출력하시오.
const num0 = 200
if(num0 % 6){
  console.log('true')
}else{
  console.log('false')
}

/**
 * 주어진 숫자의 유형(정수 또는 실수)을 판별합니다.
 * @param {number} num - 판별할 숫자
 * @returns {string} - 결과 문자열
 */
//어떤 값이 실수하면 실수입니다. 정수라면 정수입니다를 출력하는 삼항식
const num1 = 10
let result1 = num1 % 1 ? '실수입니다.' : '정수입니다.'
console.log(result1)

const num2 = 3.14;
let result1_1 = num2 % 1 ? '실수입니다.' : '정수입니다.'
console.log(result1_1)

//어떤 값이 짝수하면 짝수입니다. 홀수라면 홀수입니다를 출력하는 삼항식
const num3 = 157483
if(num3 % 2 === 0){
  console.log('true')
}else{
  console.log('false')
}

//시험점수가 90점 이상 A등급, 80점 이상 B등급, 70점 이상 C등급, 60점 이상 D등급, 60점 미만 F등급
function getGrade(score){
  if(score >= 90){
    return ('A등급')
  }else if(score >= 80){
    return ('B등급')
  }else if(score >= 70){
    return ('C등급')
  }else if(score >= 60){
    return ('D등급')
  }else{
    return ('F등급')
  }
}
const studentScore = 75;
console.log(`점수: ${studentScore}점, 등급: ${getGrade(studentScore)}`);


//삼항연산자 이용
function getGradeTernary(score) {
  return score >= 90 ? 'A등급' :
  score >= 80 ? 'B등급' :
  score >= 70 ? 'C등급' :
  score >= 60 ? 'D등급' : 'F등급'
}
const score = 88;
console.log(`점수: ${score}점, 등급: ${getGradeTernary(score)}`);


/**
 * @param {string} name - 이름
 * @param {number} kor - 국어점수
 * @param {number} math - 수학점수
 * @param {number} eng - 영어점수
 * @param {number} sci - 과학점수
 * @param {number} total - 총점
 * @param {number} avg - 평균
 * 이름, 국어점수, 수학점수, 영어점수, 과학점수 변수 또는 상수로 임의로 입력 총점과 평균 구하기
 * 출력결과
 * 홍길동 학생의 성적
 * 국어 점수: 85점
 * 수학 점수: 92점
 * 영어 점수: 78점
 * 과학 점수: 90점
 * -----------------------------------
 * 총점: 345점
 * 평균: 86.25점
 */
const name = '한정성'
const kor = 85
const math = 92
const eng = 78
const sci = 90

let total = kor + math + eng + sci
let avg = total / 4

console.log(`${name} 학생의 성적`)
console.log(`국어 점수 : ${kor}점`)
console.log(`수학 점수: ${math}점`)
console.log(`영어 점수: ${eng}점`)
console.log(`과학 점수: ${sci}점`)
console.log(`-----------------------------`)
console.log(`총점: ${total}점`)
console.log(`평균: ${avg}점`)


/**
 * 평균 점수를 바탕으로 합격 여부를 반환합니다.
 * @param {number} averageScore - 평균 점수
 * @returns {string} - 결과 메시지 (합격, 불합격, 재평가)
 * 출력 결과
 * 평균 75점: 합격
평균 45점: 불합격
평균 0점: 재평가
평균 60점: 합격
 */
//평균이 60점이상이면 합격, 평균이 60점 미만이면 불합격, 0이면 재평가 출력하시요

function average(averageScore){
  if(averageScore === 0){
    return '재평가'
  }else if(averageScore > 60){
    return '합격'
  }else{
    return '불합격'
  }
}
console.log(`평균 75점 : ${average(75)}`)
console.log(`평균 45점 : ${average(45)}`)
console.log(`평균 0점 : ${average(0)}`)
console.log(`평균 60점 : ${average(60)}`)


//for문을 이용해서 1 ~ 10까지 출력
for(let i = 0; i < 10; i++){
  console.log(i + 1)
}

//for문을 이용해서 10 ~ 1까지 출력
for(let i = 10; i > 1; i--){
  console.log(10 - i)
}

//for문을 이용해서 1 ~ 10까지 모두 더한 누적값을 출력
let sum = 0
for(let i = 0; i <= 10; i++){
  sum += i
}
console.log(sum)

/*심리 테스트, 번호 입력받기 
Q. 당신이 좋아하는 색을 선택하세요.
1. 빨간색   2. 노란색   3. 검은색   4. 흰색
숫자를 입력받으면 아래 문장을 실행
빨간색 : 에너지가 넘치고, 활동적이며, 열정적입니다.
노란색 : 밝고 긍정적이며, 외향적이고 창의적입니다.
검은색 : 권위적이고 신비로운 분위기를 풍기며, 독립적인 경향이 있습니다.
흰색: 천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.
*/
let chiose = prompt('Q. 당신이 좋아하는 색을 선택하세요?')
let resultColor = ''

switch(chiose){
  case '1' :
    resultColor = '에너지가 넘치고, 활동적이며, 열정적입니다.'
    break;
  case '2' :
    resultColor = '밝고 긍정적이며, 외향적이고 창의적입니다.'
    break;
  case '3' :
    resultColor ='권위적이고 신비로운 분위기를 풍기며, 독립적인 경향이 있습니다.'
    break;
  case '4' :
    resultColor = '천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.'
    break;
  default :
    resultColor = '1~4번 사이의 숫자를 넣어주세요'
}


//1~100까지 반복했을때 홀수만 출력
for(let i = 0; i <= 100; i++){
  if(i % 2 === 1){
    console.log(i)  
  }
}

for(let i = 0; i < 100; i++){
  let n = i + 1
  if(n % 2 === 0){
    continue
  }
  console.log(n)  
}

//1~100까지 반복했을때 짝수만 출력
for(let i = 0; i <= 100; i++){
  let n1 = i + 1
  if(n1 % 2 === 0){
    console.log(n1) 
  }
}

for(let i = 0; i < 50; i++){
  console.log((i + 1) * 2)
}

//0~9까지 반복 후 "12345678910" 출력하기
let num = ""
for(let i = 0; i <= 9; i++){
  num += i + 1
}
console.log(num)

//1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
for(let i = 0; i < 10; i++){
  let n2 = i + 1
  if(n2 % 2 === 0){
    console.log(`${n2}은 짝수`)
  }else{
    console.log(`${n2}은 홀수`)
  }
}

for(let i = 0; i < 10; i++){
  i % 2 === 0 ? console.log(`${n2}은 짝수`) : console.log(`${n2}은 홀수`)
}

//1~20까지 중 3의 배수 출력하시오
let numStr = " "
for(let i = 0; i <= 20; i++){
  let n3 = i + 1
  if(n3 % 3 === 0){
    numStr += n3 
  }
}
console.log(numStr)  // 36912151821

//1~100까지 누적합 구하기
let sumNumber = 0
for(let i = 0; i <= 100; i++){
  sumNumber += i
}
console.log(sumNumber) // 5050

//1~100까지 홀수만 모두 더해서 출력하시오
let oddSum = 0
for(let i = 0; i <= 100; i++){
  if(i % 2 === 1){
    oddSum += i
  }
}
console.log(oddSum)  // 2500

//1~77까지 수 중 홀수의 개수 구하기
let oddCount = 0
for(let i = 0; i <= 77; i++){
  let n4 = i + 1
  if(n4 % 2 === 1){
    oddCount++
  }
}
console.log(oddCount)  // 39



//============ 함수 ============

/**
 * 이름을 입력받아 콘솔에 출력하는 함수
 * @param {string} name - 출력할 이름
 */
function printName(name){
  console.log(`입력된 이름: ${name}`)
}
printName('한정성')


/**
 * 두 수를 입력받아 첫 번째 수에서 두 번째 수를 뺀 결과를 출력하는 함수
 * @param {number} num1 - 첫 번째 숫자
 * @param {number} num2 - 두 번째 숫자
 * @returns {number} - 뺀 결과
 */
function getsubtractNum(num1, num2){
  //return num1 - num2
  let result = num1 - num2
  console.log(result)
}
getsubtractNum(20, 10)
getsubtractNum(30, 100)

/**
 * 성과 이름을 받아서 연결해주는 함수
 * @param {string} firstName - 성
 * @param {string} lastName - 이름
 */
function getName(firstName, lastName){
  return firstName + lastName
}
getName('한','정성')

/**
 * 두 수를 더해서 결과를 콘솔에 출력합니다.
 * @param {number} num1 - 첫 번째 숫자
 * @param {number} num2 - 두 번째 숫자
 * @returns {number} - 두 수의 합계
 */
function getadd(num1, num2){
  let sum =  num1 + num2
  console.log(`두 수의 합계 : ${sum}`)
}


function getadd(num1, num2){
  return num1 + num2
}
const result = getadd(10, 20); 
console.log(`계산된 합계: ${result}`);


/**
 * 이름을 전달하면 5번 출력해주는 함수
 * @param {string} name - 출력할 이름
 */
function printName(Name){
  console.log(Name)
  console.log(Name)
  console.log(Name)
  console.log(Name)
  console.log(Name)
}
printName("한정성")

function printName(Name){
  for(let i = 0; i < 5; i++){
    console.log(Name)
  }
}
printName("한정성")


/**
 * 이름 뒤에 "님"을 붙여서 반환하는 함수
 * 성과 이름을 받으면 연결 후 "님"을 붙여주는 함수
 * @param {string} name - 사용자 이름 (예: "철수")
 * @returns {string} - "님"이 붙은 이름 (예: "철수님")
 */
function getName(str){
  const honoredName = `${str}님`
  console.log(honoredName)
}
getName('한정성')  // 한정성님


//화살표함수
const getaddName = (name) => `${name}님`
console.log(getaddName('한정성'))


function getName(firstName, lastName){
  let name =  firstName + lastName + '님'
  return name
}
getName('한','정성')



/**
 * 두 수를 받아서 중 더 큰 값을 반환하는 함수
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} - 더 큰 값 (최댓값)
 * 방법 1: if 문을 사용한 구현
 * 방법 2: 삼항 연산자 사용
 * 방법 3: Math.max() 내장 함수 사용
 */
//방법1
function getMin(a, b){
  let result = ''
  if(a > b){
    result = a
  }else{
    result = b
  }
  return result
}
getMin(10, 25)


//방법 2
function getMin(a, b){
  let result = ''
  a > b ? result = a : result = b
  return result
}
getMin(10, 25)


//방법 3
function getMin(a, b){
  return Math.max(a, b)
}
getMin(10, 25)


/**
 * 숫자를 입력받아 홀수인지 짝수인지 판별하여 출력하는 함수
 * @param {number} num - 판별할 숫자
 */
function getOddEven(n){
  if(n % 2 === 0){
    console.log('짝수')
  }else{
    console.log('홀수')
  }
}
getOddEven(10)

const getOddandEven = (n) => {
  console.log(n % 2 === 0 ? '짝수' : '홀수')
}
getOddandEven(10)


/**
 * 2단부터 9단까지의 구구단 전체를 출력하는 함수
 * 번외로 구구단 출력하는 함수
 */
function gugudan(){
  for(let dan = 2; dan <= 9; dan++){
    console.log(`==== ${dan}단 ====`)
    for(let i = 1; i <= 9; i++){
      console.log(`${dan} * ${i} = ${dan * i}`)
    }
  }
}
gugudan()
/**
 * ==== 2단 ====
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
 */


/**
 * 1부터 n까지의 모두 더한 값을 반환(리턴)해주는 함수
 * @param {number} n 더할 마지막 정수
 * @returns {number|string} 합계 또는 오류 메시지
 */
//방법1 for문
function sumToN(n){
  let total = 0
  for(let i = 0; i <= n; i++){
    total += i
  }
  return total
}
sumToN(10)  // 55


/**
 * 0과 1을 마구잡이로 5개 전달했을 때 0과 1의 개수를 각각 구해주는 함수
 * @param {number[]} arr 0 또는 1을 포함하는 배열 (길이는 5로 가정)
 * @returns {{zeros: number, ones: number}} 0과 1의 개수를 담은 객체
 * 방법1 forEach 또는 for...of 반복문 사용
 * 방법2 reduce 함수 사용 
 * 출력결과 0의 갯수는 2, 1의 갯수는 3
 */
/*방법1 매개변수 이용
n1~n5가 더해서 noes 변수에 대입하여 1의 갯수를 더한후 길이5에서 1의갯수를 빼서 zeros갯수를 구함
*/
const getCount1 = (n1, n2, n3, n4, n5) => {
  let ones = n1 + n2 + n3 + n4 + n5
  let zeros = 5 - ones

  return `0의 갯수는 ${zeros}, 1의 갯수는 ${ones}`
}
getCount1(0, 1, 0, 1, 1)
// 0의 갯수는 2, 1의 갯수는 3


//방법2 배열과 반복문
// 매개변수가 몇개인지 모를때 인수를 하나의 배열로 묶기 이해서 ...
function getCount2(...number){
  let zeros = 0
  let ones = 0
  number.forEach(number => {
    if(number === 1){
      ones++
    }else if(number === 0){
      zeros++
    }
  })
  return {
    ones : ones,
    zeros : zeros
  }
}
const res = getCount2(0, 1, 0, 1, 1)
console.log(`0의 갯수는 ${res.zeros}, 1의 갯수는 ${res.ones}`)

function getCount3(...number){
  let zeros = 0
  let ones = 0
  number.reduce((_acc, curr) => {
    if(curr === 1){
      ones++
    }else if(curr === 0){
      zeros++
    }
  }, 0)
}
const res1 = getCount2(0, 1, 0, 1, 1)
console.log(`0의 갯수는 ${res1.zeros}, 1의 갯수는 ${res1.ones}`)


/**
 * 문자열을 전달하면 문자열을 뒤집어 주는 함수
 * @param {string} str 원본 문자열
 * @returns {string} 뒤집힌 문자열
 * 방법1 split, reverse, join 메소드 사용
 * 방법2 화살표함수, 반복문(for 루프) 사용 
 * ex) "abcde" -> "edcba"
 */
function revstr(str){
  let spstr = str.split('').reverse().join("");
  return spstr;
}
revstr("abcde")

const reverse = () => {
  let str = 'abcde'
  let result = ''
  for(let i = 0; i < str.length; i++){
    result += str[str.length - 1 - i]  // i가 0부터 4까지 문자열길이에서 1을 뺀다)
  }
  return result;
}
console.log(reverse())

/**
 * 어떤 값을 받으면 어떤 값을 출력해주는 함수
 * @param {*} value 입력받은 값 (모든 타입 가능: 숫자, 문자열, 객체, 배열 등)
 * 방법1 함수선언문 사용
 * 
 * @param {*} data 입력받은 값
 * 방법2 화살표함수 사용
 */

function greet(value){
  const messge = `${value} 한정성입니다.`
  return messge
}
greet('안녕하세요')

const greet = (data) => {
  console.log(`${data} 한정성입니다.`)
}
greet('안녕하세요')


/**
 * 3개의 정수를 받아 3개 모두 더해서 결과를 알려주는 함수
 * @param {number} num1 첫 번째 숫자
 * @param {number} num2 두 번째 숫자
 * @param {number} num3 세 번째 숫자
 * @returns {number} 세 숫자의 합계
 */
function sumTo(num1, num2, num3){
  let sum = num1 + num2 + num3
  return sum
}
sumTo(100, 10, 20)

const getsumTo = (num1, num2, num3) => {
  let calcu = num1 + num2 + num3
  return calcu
}
getsumTo(100, 10, 20)

/**
 * 3개의 정수를 받아 3개 모두 빼주는 함수 또는 화살표함수
 * @param {number} num1 첫 번째 숫자
 * @param {number} num2 두 번째 숫자
 * @param {number} num3 세 번째 숫자
 * @returns {number} 계산 결과
 * 100 - 10 - 20 = 70
 * 50 - 5 - 5 = 40
 * 음수 포함 10 - (-5) - 20 = -5
 */
function lnteger (num1, num2, num3){
  let calculate = num1 - num2 - num3
  return calculate
}
lnteger(100, 10, 20)
lnteger(50, 5, 5)
lnteger(10, -5, 20)

const getlnteger = (num1, num2, num3) => {
  let calcu = num1 - num2 - num3
  return calcu
}
getlnteger(100, 10, 20)
getlnteger(50, 5, 5)
getlnteger(10, -5, 20)


/**
 * "홍길동"을 n번 콘솔에 출력하는 화살표함수
 * @param {number} n 출력 횟수
 * 방법1 for문
 */

const printCount = (n) => {
  for(let i = 0; i < n; i++){
    console.log("방탄소년단")
  }
}
printCount(10)

/**홀수인지 짝수인지 알려주는 화살표함수 
 * @param {number} number 
*/
const checkEvenOdd = (number) => {
  if(number % 2 === 0){
    return '짝수'
  }else{
    return '홀수'
  }
}
console.log(checkEvenOdd(4)); // 출력: 짝수
console.log(checkEvenOdd(7)); // 출력: 홀수
console.log(checkEvenOdd(0)); // 출력: 짝수

const checkEvenOdd2 = (data) => { return data % 2 === 0 ? '짝수' : '홀수' }
let EvenOdd = checkEvenOdd2(4)
console.log(EvenOdd)


/**
 * 1부터 n까지의 홀수만 출력하는 화살표함수
 * @param {number} n 숫자
 */
// 출력 결과:
// --- 1부터 10까지의 홀수 ---
// 1
// 3
// 5
// 7
// 9
const oddNumber = (n) => {
  console.log(`--- 1부터 ${n}까지의 홀수---`)
  for(let i = 0; i < n; i++){
    let num = i + 1
    if(num % 2 === 1){
      console.log(num)
    }
  }
} 
oddNumber(10)

/**
 * 1부터 n까지의 짝수만 출력하는 화살표함수
 * @param {number} n 숫자
 * 방법1 for, if문 사용
 * 방법2 반복증감 2로 설정 사용
 */
// 출력 결과:
// --- 1부터 10까지의 홀수 ---
// 2
// 4
// 6
// 8
// 10
const evenNumber = (n) => {
  console.log(`--- 1부터 ${n}까지의 짝수 ---`)
  for(let i = 2; i < n; i += 2){
    console.log(i)
  }
}
evenNumber(10)


/**
 * 문자열과 찾을 문자를 입력받고 찾을 문자의 갯수를 구해주는 화살표함수
 * @param {string} str 검색 대상 문자열
 * @param {string} char 찾을 문자 (단일 문자)
 * @returns {number} count 찾은 문자의 개수
 * 방법1 split() 메소드와 length 사용
 * 방법2 for문 사용
 */
const getCount = (str, char) => {
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      count++
    }
  }
  return count
}
console.log(getCount("abcdefgas", "a"))


const getCount2 = (str, char) => {
  return str.split(char).length - 1
}
console.log(getCount2("abcdefgas", "a"))



/**
 * 한글을 정수로 변환하는 화살표 함수
 * @param {string} hangle 한글 숫자 문자열
 * @returns {number} 변환된 정수
 * ex) "공삼육칠" -> 1024
 */
const changeToInt1 = (hangle) => {
  let hangles = "공일이삼사오육칠팔구"
  let res = ""
  for(let i = 0; i < hangle.length; i++){
    res += hangles.indexOf(hangle.charAt(i))
  }
  return res
}
let res_num = changeToInt1("공삼육칠")
console.log(res_num) 


/**
 * 정수를 한글로 변환하는 화살표 함수
 * @param {number} number 숫자 
 * @returns {number} 변환된 정수
 * ex) "1024" -> "일공이사"
 */
const changeToInt2 = (number) => {
  const hangles = "공일이삼사오육칠팔구"
  // 숫자를 문자열로 변환
  let str = number.toString(); 
  //let str = number + ""
  let res = ""
  for(let i = 0; i < str.length; i++){
    res += hangles.charAt(str.charAt(i))
  }
  return res
}
let res_int = changeToInt2(1024)
console.log(res_int) 

/**
 * 사용자가 입력에 따라 a가 몇번 출력하는 함수
 * @param {string} 입력 값 
 */
function printA(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      console.log(str[i])
    }
  }
}
printA("adsfsdfsfsdfsdfsvaadfdfsdsf")



// 익명 함수 기본문법을 쓰시오
const print = function(){
  console.log('익명 함수입니다.')
}
print()

// 화살표 함수로 익명 함수 만들기
const printArrow = () => { 
  console.log('화살표함수로 만든 익명 함수입니다.')
}
printArrow()



/**콜백함수*/

//1. 두 정수의 곱셈 결과를 콜백함수로 출력하기
const multiple = (num1, num2, callback) => {
  callback(num1 * num2)
}
multiple(10, 20, console.log)



//2. 두 정수의 곱셉을 구한뒤 결과에 2를 곱해서 반환해서 출력하기
const multiple2 = (num1, num2, callback) => {
  callback(num1 * num2)
}
multiple2(10, 20, (result) => {
  console.log(result * 2)
})


//3. 두 정수의 합을 구하여 결과를 콜백함수로 출력하기
const multiple3 = (num1, num2, callback3) => {
  callback3(num1 + num2)
}
multiple3(10, 20, (result) => {
  console.log(result)
})

//4. 정수를 5개 전달하여 가장 큰 값과 작은 값을 구하고 큰 값과 작은 값을 문자열로 반환하는 콜백함수
const findMinMax = (...numbers) => {
  let min = numbers[0];
  let max = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < min){
      min = numbers[i]
    }
    if(numbers[i] > max){
      max = numbers[i]
    }
  }
  return `작은 값: ${min}, 큰 값: ${max}`
}
findMinMax(10, 20, 30, 40, 50)  // '작은 값: 10, 큰 값: 50'


//5. 두 수를 더하고 홀수인지 짝수인지 비교한 후 콜백함수로 출력
const getOddOrEven = (num1, num2, callback) => {
  let sum = num1 + num2
  callback(sum % 2 === 0 ? "짝수" : "홀수" )
}
getOddOrEven(10, 15, (result) => {
  console.log(result)
})


/**함수를 new 키워드와 함께 호출하여 객체 인스턴스를 만듭니다. 
 * 속성(이름(name), 나이(age), 주소(address), 핸드폰(phone))은 this 키워드로 정의합니다. */
//1. 생성자 함수를 사용한 프로토타입 구현
function User1 (name, age, address, phone){
  this.name = name
  this.age = age
  this.address = address
  this.phone = phone
}
const user1 = new User1 ('김철수','47','강남구 역삼동','010-0000-0000')
const user2 = new User2 ('김남준','25','노원구 상계동','010-0000-0000')
console.log(user1)
console.log(user2)

//2. 클래스(Class) 문법을 사용한 프로토타입 구현
class User2{
  constructor(name, age, address, phone){
    this.name = name
    this.age = age
    this.address = address
    this.phone = phone
  }
}
let kim1 = new User2('kim','28','seoul','010-1234-5678');
let kim2 = new User2('제이홉', 20, '광주', '010-1234-1234')
console.log(kim1)
console.log(kim2)

/**.of(초기값1, 초기값2, ....) : 배열의 초기값을 할당하는 메서드 
 * .fill(초기값) : 배열의 초기값으로 배열의 모든칸수를 할당시키는 메서드
 * .split() : 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다
 * .join() : 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴한다  배열.join(구분자);
 * .replace("찾을 값","바꿀 값") : 전달된 매개변수 중 가장 먼저 만나는 값을 치환한다.
 * .replaceAll("찾을 값","바꿀 값") : 전달된 매개변수를 모두 치환한다.
 * .push() : 배열의 맨 마지막에 값을 추가하는 메서드
 * .concat() : 두 개의 배열을 새로운 배열로 합쳐서 리턴하는 메서드
 * .pop() :  배열의 맨 마지막에 값을 제거하는 메서드
 * .shift() : 맨 앞에 요소를 삭제하고 삭제된 값을 리턴해주는 메서드
 * .slice(시작인덱스, 종료인덱스) : 배열을 잘라서 **새로운 배열**을 반환하는 메서드
 * .splice(index, 갯수, 추가를 데이터) : 인덱스부터 N개를 삭제하고, 값을 추가하고 원본 배열을 수정하고, 삭제된 값을 반환하는 메서드
 * .sort() : 무작위로 들어간 데이터의 값을 정렬하는 메서드  유니코드 방식대로 
 * .reverse() : 배열의 순서를 뒤집어주는 메서드
 * .includes() : 문자열 또는 배열의 항목 중 특정값을 포함하고 있으면 true, 아니면 false
 * .map() : 배열의 각 요소에 주어진 함수를 적용해 새로운 배열을 반환하는 메서드
 * * 요소를 순회하는 목적: 각 요소를 변환하거나 가공한 결과를 적용
 *   처리하는 방법: 가공한 결과를 return으로 반환
 * filter() : 원하는 조건에 맞는 요소들만 return으로 결과가 true 반환하는 메서드
 * * 요소를 순회하는 목적: 원하는 조건에 맞는 요소들만으로 필터링
 *   처리하는 방법: 원하는 조건에 맞으면 return으로 결과가 true 반환
*/
//split(), 반복문을 사용해서 "hello, world!"의 l의 글자가 몇개인지 출력하시오(배열)
const hello = "hello, world!"
const arr01 = hello.split("")  
let count = 0
for(let i = 0; i < arr01.length; i++) {
  if(arr01[i] === 'l') {
    count++
  }
}
console.log(count) // 3


//[10,20,30,40,50] 으로 문자열 12345 만들기
const str = [10,20,30,40,50]
const arr02 = str.join("").split("0").join("")
console.log(arr02)


//1 ~ 10까지의 배열에 추가한 후 10 ~ 1까지 역순으로 출력하기(배열)
const arr03 = []
for(let i = 0; i < 10; i++){
  arr03.push(i + 1)
}
arr03.reverse()
console.log(arr03)  //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// 핸드폰 번호가 "010-8986-0554"일 때 가운데 4자리를 ****로 바꿔서 출력하기
// 출력결과 : 010****0554
const phone = "010-8986-0554"
const arr04 = phone.split("-").join("").replace("8986","****")
console.log(arr04)



//[8, 100, 15, 25, 700, 40, 70, 400, 20] 배열 정렬하라


/*1~10까지 Array에 담은 후 짝수만 출력하기(배열)
* 첫번째 방법 - for문으로 배열 추출
* 두번째 방법 - map, filter문으로 배열 추출
* 세번째 방법 - forEach문으로 
출력결과 [2, 4, 6, 8, 10]
*/
const arr0_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const new_arr0_1 = []
for(let i = 0; i < arr0_1.length; i++){
  if(arr0_1[i] % 2 === 0){
    new_arr0_1.push(arr0_1[i])
  }
}
console.log(new_arr0_1)  // [2, 4, 6, 8, 10]


const arr0_2 = new Array(10)  //배열의 칸수
  .fill("0") //["0","0","0","0","0","0","0","0","0","0"]
  .map((data, idx) => idx + 1)
  .filter((data) => data % 2 === 0)
console.log(arr0_2)  // [2, 4, 6, 8, 10]


const arr0_3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const new_arr0_3 = []
for(let i = 0; i < 10; i++){
  new_arr0_3.push(i + 1)
}
new_arr0_3.forEach((data) => {
  if(data % 2 === 0) console.log(data)
})
console.log(new_arr0_3)


// 1~10까지 Array에 담은 후 10부터 1까지 반대로 출력하기(배열)
// 출력결과 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const arr1_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const new_arr0_4 = []
for(let i = arr1_1.length - 1; i >= 0; i--){
  new_arr0_4.push(arr1_1[i])
}
console.log(new_arr0_4)


const arr0_4 = new Array(10) //배열의 칸수
  .fill(0)
  .map((_, idx) => idx + 1)
  .reverse()
console.log(arr0_4) 



// 1~10까지 배열에 담고, 2의 배수가 맞으면 true, 아니면 false로 값을 변경하기
// 출력결과 : [false, true, false, true, false, true, false, true, false, true]
const arr1_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < arr1_2.length; i++){
  if(arr1_2[i] % 2 === 0){
    console.log("true")
  }else{
    console.log("false")
  }
}


const arr0_5 = new Array(10)
  .fill(0)
  .map((_, idex) => idex + 1)
  .map((data) => data % 2 === 0)
console.log(arr0_5)



// "010-1234-5678" .filter()를 이용하여 01012345678 결과로 출력하기
const phone1 = "010-1234-5678"
const ph = phone1.split("-").filter((data) => data != "-").join("")
console.log(ph)


// 1~10까지 배열의 누적합 구하기  결과 : 55
const arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total1 = 0
for(let i = 0; i < arr0.length; i++){
  total1 += arr0[i]
}
console.log(total1)


let total2 = 0
new Array(10).fill(0).map((data, idx) => idx + 1)
  .forEach((data) =>{
    total2 += data
  })
console.log(total2)


new Array(10)
  .fill(0)
  .map((data, i) => i + 1)
  .reduce((acc, curr) => acc + curr)
  .toString()
  .split()
  .forEach((data) => console.log(data))


// 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
let even = []
for(let i = 0; i <= 50; i++){
  if(i % 2 === 0){
    even.push(i * 3)
  }
}
even.forEach((data) => console.log(data))
//console.log(even)

new Array(50)
  .fill(0)
  .map((data, i) => i + 1)
  .filter((data) => data % 2 === 0)
  .map((data) => data * 3)
  .forEach((data) => console.log(data))

// 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
Array.of(10, 20, 30, 40, 50).reverse().forEach((data) => console.log(data));

// 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
new Array(10)
  .fill(0)
  .map((data, idx) => idx + 1)
  .map((data) => data > 5 ? data * 2 : data)
  .forEach((data) => console.log(data))

// 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
new Array(30)
  .fill(0)
  .map((data, idx) => idx + 1)
  .filter((data) => data % 2 === 1)
  .forEach()

// arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후 모든 값을 출력하기

// 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력


/*다이아 과제
  배열의 메서드
  연속되는 글자의 개수 중 가장 많이 반복되는 글자 찾기
  단, 같은 횟수라면 제일 먼저 들어오는 값을 리턴한다.
  예상 출력결과
  제일 많이 반복되는 글자 : d
  횟수 : 4
*/
"abcccddeaddddadwefda"

//한글을 숫자로 (배열 메서드로 이용)
// ex) "일이삼사" => "1234"


// 2.숫자를 한글로 (배열 메서드로 이용)
// ex) "1234" => "일이삼사"



/**
 * const students = [
  { name: "철수", age: 10, grade: "A" },
  { name: "영희", age: 12, grade: "B" },
  { name: "민지", age: 11, grade: "A" },
  { name: "지훈", age: 10, grade: "C" },
  { name: "영희", age: 13, grade: "A" }
]
 */
//students 배열에서 이름이 정확히 **"민지"**인 첫 번째 학생 객체의 인덱스를 찾으세요.

//students 배열에서 나이가 12세 이상인 모든 학생의 이름을 배열로 반환하세요.

//students 배열에서 나이가 10세인 첫 번째 학생의 이름을 찾으세요. 

//students 배열에서 성적이 "C" 등급인 학생이 한 명이라도 존재하는지 확인하세요.




//****class 및 생성자함수, static****

/** 동물병원 프로그램
 * 동물(Animal) 정보를 관리하기 위한 생성자 함수
 * @param {string} name - 동물의 이름
 * @param {string} species - 동물의 종류 (예: '강아지', '고양이')
 * @param {number} age - 동물의 나이
 * @param {string} ownerName - 소유자 이름
1. 다음 조건을 충족하는 Animal 생성자 함수를 작성하세요.
2. 문제 1에서 만든 생성자 함수를 사용하여 다음 동물 객체 3개를 만들어 콘솔로 출력하세요
이름: "토리", 종류: "강아지", 나이: 4, 소유자: "이민수"
이름: "나비", 종류: "고양이", 나이: 2, 소유자: "박영희"
이름: "초코", 종류: "햄스터", 나이: 1, 소유자: "정철호"
3. 나이 증가 메서드 추가하기
- 생성자 함수의 prototype에 getOlder 메서드를 추가하세요.
ex> 멍멍이의 나이가 5살에서 7살로 증가했습니다.
4. 병원 정보 관리 기능 만들기
5. 동물 등록 기능 구현하기(정적 속성과 정적 메서드를 추가하세요)
6. 전체 동물 출력 기능 만들기
7. 특정 종류만 필터링해서 출력하기 (응용)
8. 나이순 정렬 기능 만들기 (심화)
9. setter & getter 사용하기 (심화)
10. private 필드(#) 활용하기 (최상급)
*/



/**
 * 회비 징수 시스템 구현
 * Member 클래스와 Bank 클래스를 설계하고, 회원이 가진 돈(잔액)에서 50,000원을 인출하여 은행의 잔액으로 추가하는 기능을 구현하세요.
 * 은행(Bank)
 * @param {String} bankName 은행이름
 * @param {Number} bankMoney 은행돈
 * 회원(Member)
 * @param {} memberName 회원이름
 * @param {} memberMoney 회원돈
 * 결과
 * 초기 은행 잔액: 0원
 * 김철수님 잔액: 100000원
 * 박영희님 잔액: 30000원
 * 이민지님 잔액: 200000원

 * --- 회비 징수 시작 (금액: 50000원) ---
 * 김철수 님이 50000원을 출금했습니다.
 * 은행에 50000원이 입금되었습니다.
 * 박영희 님: 잔액이 부족하여 출금할 수 없습니다. (현재 잔액: 30000)
 * 이민지 님이 50000원을 출금했습니다.
 * 은행에 50000원이 입금되었습니다.
 * --- 회비 징수 완료 ---
 * 최종 은행 잔액: 100000원
 * 김철수님 잔액: 50000원
 * 박영희님 잔액: 30000원
 * 이민지님 잔액: 150000원
 */



/** 학생 성적 관리 시스템 구현 (Student)
 * @param {String} name
 * @param {Number} math
 * @param {Number} kor
 * @param {Number} eng 
 * 학생의 클래스를 만들고 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.
 * 결과
 * 홍길동님의 총점은 130점이고, 평균은 43.33점입니다.
 */



/**
 * 마켓(Market) 
 * @param {String} marketName  마켓이름
 * @param {String} productName 제품명
 * @param {Number} productPrice 제품가격
 * @param {Number} productStock 제품제고
 * 
 * 회원(Customer)
 * @param {String} customerName  회원이름
 * @param {Number} customerMoney 회원돈
 * @param {Number} customerDiscount  회원 할인율
 * 
 * 마켓(Market)은 한 가지 상품을 판매한다.
 * 구매자(Customer)는 회원마다 각각 할인율이 다르다. 
 * 마켓은 구매자의 할인율에 맞게 판매하여 수익을 올린다.
 * 판매가 완료되면 마켓의 상품의 가격, 재고, 수익을 출력하고 구매자의 남은 돈을 출력하세요.
 * 결과
 * 개업 축하드립니다~!😎
 * 홍길동님이 사과을 2만큼 구매했습니다.
 * 고객의 돈이 부족합니다.
 * 총 수익: 42000원
 * 남은 사과의 재고: 28개
 * 홍길동님의 잔고는: 58000원입니다.
 * 장보고님의 잔고는: 2000원입니다.
 */



/**학교 학생 수 관리 시스템 구현 (School)
* 학교 학생 정보를 저장하고 학생 수를 관리하는 클래스
* 생성자: 새로운 학생 인스턴스가 생성될 때마다 학생 수 증가
* @param {string} studentId 학번
* @param {string} name 이름
* @param {number} age 나이
 * 학교를 다니고 있는 학생의 총 수 구하기
 * 3명의 학생 객체화 후 static 필드의 학생 수 출력
 * 
 * 결과
 * 학교가 개강되었습니다.  
 * 현재 학생 수 (초기) : 0
 * 새로운 학생 등록 : 민윤기
 * 새로운 학생 등록 : 제이홉
 * 새로운 학생 등록 : 박지민
 * 
 * 전체 학생 수 : 3
 * 전체 학생 수 (직접 접근) : 3
 * 첫번째 학생 이름 : 민윤기
 */



/**은행(Bank) 캐릭터 클래스 구현 
* @param {string} name 은행이름
* @param {number} balance 잔액
* 회원(Member)들에게 관리비를 5만원 가져가야하는 경우
* 1. 회원이 가진 돈에서 5만원을 빼야한다.
* 2. 은행에 5만원을 추가해야한다.
* 3. 회원이 가진 돈이 5만원보다 적으면 출금 불가
* 4. 은행의 잔액과 회원의 잔액을 출력
* 결과
* 초기 은행 잔액: 0원
* 김철수님 잔액: 100000원
* 박영희님 잔액: 30000원
* 이민지님 잔액: 200000원
* --- 회비 징수 시작 (금액: 50000원) ---
* 김철수 님이 50000원을 출금했습니다.
* 은행에 50000원이 입금되었습니다.
* 박영희 님: 잔액이 부족하여 출금할 수 없습니다. (현재 잔액: 30000)
* 이민지 님이 50000원을 출금했습니다.
* 은행에 50000원이 입금되었습니다.
* --- 회비 징수 완료 ---
* 최종 은행 잔액: 100000원
* 김철수님 잔액: 50000원
* 박영희님 잔액: 30000원
* 이민지님 잔액: 150000원
*/


//===== DOM, EVENT =====
/*
 * <h1 id="myHeader">Hello World!</h1>
 * 핑크, 그린 으로 글자색 변경
 * 
 * <h2 class="myClass">Hello World!</h2>
 * <p class="myClass">This is a paragraph.</p>
 * css를 이용한 들어간 글자들만 red색깔로 변경
 * 
 * <p>This is a paragraph</p>
 * <ul>
 *  <li>Coffee</li>
 *  <li>Tea</li>
 *  <li>Milk</li>
 * </ul>
 * 태그이름으로 들어간 글자들만 red색깔로 변경
 * 
 * 1. 전체 동의 버튼을 체크되면 나머지 checkbox가 모두 checked 상태가 된다.
   2. 전체 동의 버튼을 해제하면 나머지  checkbox가 모두 checked 상태가 해제 된다.
   3. 나머지 3개의 체크박스가 모두 클릭되면, 전체 동의 체크박스도 체크 된다.
   4. 3개중에 하나라도 체크가 해제되면 전체 동의 체크박스가 해제된다.
 * 
 * 아이디, 비밀번호, 회원가입 유효성검사
 * 
 */


/** Promise(then, catch, finally)  async와 await 문
 * 비동기 작업 후 성공 또는 실패 처리 문법
 * 100번 반복해서 치
 * */


/**
 * 커피 주문을 처리하는 비동기 함수 (Promise 반환)  
 * @param {string} coffeeName 주문할 커피 이름
 * @returns {Promise<string>}
 * 커피 주문을 처리하는 orderCoffee 함수
 * 1. orderCoffee 함수 (Promise 생성
 * 2. Promise 사용 (.then(), .catch() 활용)
 * 3. Async/Await를 사용한 간결한 처리 (ES8+)
 */


//데이터를 요청할 주소 fetch("URL")


/**fetch를 사용해 수강생 명단이 있는 JSON 파일 가져오기 
 * 1단계: JSON 파일 준비
*/
[
  {
    "id": 1,
    "name": "도레미",
    "전공": "컴퓨터 공학",
    "학년": 2
  },
  {
    "id": 2,
    "name": "이영희",
    "전공": "경영학",
    "학년": 3
  },
  {
    "id": 3,
    "name": "박지성",
    "전공": "체육 교육학",
    "학년": 4
  }
]

// http://localhost:10000/posts 요청
// 실습 posts중에서 제목만 콘솔에 출력



// todos 데이터 중 전체 데이터를 콘솔에 출력
// fetch URL https://jsonplaceholder.typicode.com/todos



// todos 데이터 중 completed가 true인 데이터들만 콘솔에 출력
//fetch URL https://jsonplaceholder.typicode.com/todos


// getTitles 함수이름
// todos에서 title만 5개만 가져오기 (0~4)
// 값으로 가져오기
// 값으로 가져온 데이터를 "제목 : title" 내용으로 변경 출력하기
// fetch('https://jsonplaceholder.typicode.com/todos')



// getComments 함수이름
// https://jsonplaceholder.typicode.com/comments
// email만 10개만 가져온 후 email에서 아이디만 가져오기
// [Eliseo@gardner.biz] -> ["Eliseo", ...]
// 아이디만 출력하기



// getUsers 함수이름
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// Leanne Graham -> maharG ennaeL



/** getTodos 함수이름
 * 화면에 데이터 출력하기
 * ul태그 안에 li태그 생성하면서 데이터 제목글 출력하기
 * //https://jsonplaceholder.typicode.com/todos
 * */


// getinit 함수이름
// https://jsonplaceholder.typicode.com/users
// 회원정보 name과 id, 이메일을 가져와서 표형식으로 출력하기
// Leanne Graham -> maharG ennaeL



