/*1) 어떤 정수(n)을 넘기면 n까지 모두 더한 값을 반환(리턴)해주는 함수
어떤수를 받는다 (매개변수)
for문을 사용해서 10들어왔다면 1~10까지 반복해서 숫자 만든다
for문 밖에 모든값을 더할 수있는 변수 만듬
변수에 모든값을 반복하면서 누적
사용자가 누적한 값을 궁금해하니깐 return
*/
function num(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i
  }
  return sum
}
num(10)  // 55


/* 2) 0과 1을 마구잡이로 5개 전달했을 때 0과 1의 개수를 각각 구해주는 함수
"01100"
*/
const getCountOneAndZero = (n1, n2, n3, n4, n5) =>{
  let oneCount = n1 + n2 + n3 + n4 + n5
  // 0 + 1 + 0 + 1 + 1
  let zeroCount = 5 - oneCount
  return `0의 개수는 ${zeroCount}, 1의 개수는 ${oneCount}`
}
getCountOneAndZero(0, 1, 0, 1, 1)


// const getCountOneAndZero = (num1, num2, num3, num4, num5) => {
//     let oneCount = 0
//     let zeroCount = 5 - oneCount
//     num1 && oneCount++
//     num2 && oneCount++
//     num3 && oneCount++
//     num4 && oneCount++
//     num5 && oneCount++
//     return `0의 개수: ${zeroCount}개, 1의 개수는 ${oneCount}개`
// }
// console.log(getCountOneAndZero(1, 1, 0, 1, 1))


/*3) 문자열을 전달하면 문자열을 뒤집어 주는 함수
length를 이용해서 글자만큼 반복문 돌린다 for
*/
// ex) "abcde" -> "edcba"

const reverse = () =>{
  let data = 'abcde'
  let result = ''
  for(let i = 0; i < data.length; i++){
    result += data[data.length - 1 - i]   // data.length - 1  마지막인덱스
  }
  return result;
}
console.log(reverse())

// 문자열에만 사용  .indexOf()  .charAt()
// .indexOf() : 해당문자의 index번호를 리턴하는 메서드
"abcde".indexOf("d")

//.charAt() : 해당 index에 있는 문자를 리턴하는 메서드
"abcde".charAt(3)
"abcde"[3]


//브론즈
/**1. 어떤 값을 받으면 어떤 값을 출력해주는 함수*/
function greet(str){
  const messge = `${str} 한정성입니다.`
  return messge
}
greet('안녕하세요')

const print = (data) => {
  console.log(data)
}
print("홍길동")

/**2. 3개의 정수를 받아서 3개 모두 빼주는 함수*/
const getNum = (num1, num2, num3) =>{
  let res = num1 - num2 - num3
  return res
}
getNum(10, 20, 30)

const getTotalSubtract = (num1, num2, num3) => {
  let res = num1 - num2 - num3
  return res
}
getTotalSubtract(10, 20, 30)


// 실버
/**3. 홍길동을 n번 출력해주는 함수 */
function arr(char){
  for(let i = 0; i < char.length; i++){
    char.indexOf(i)
    console.log(`${char} 문자의 인덱스는 ${i}입니다.`);
  }
}
arr("홍길동")

const printByCount = (count) => {
  for(let i = 0; i < count; i++){
    console.log("홍길동")
  }
}
printByCount(10)


/**4. 홀수인지 짝수인지 알려주는 함수 */
function getOddEven(n){
  if(n % 2 === 0) return '짝수'
  else return '홀수'
}
console.log(getOddEven(8))
console.log(getOddEven(7))

const getOddEven = (data) => data % 2 === 0 ? '짝수' : '홀수'
let result4 = getOddEven(15)
console.log(result4)


// 골드(목표)
/**5. 1~n까지 홀수만 출력해주는 함수*/
const printOdd = (count) =>{
  for(let i = 0; i < count; i++){
    let num = i + 1
    if(num % 2 === 0){ continue }
    console.log(num)
  }
}
printOdd(10)

/**6. 문자열과 찾을 문자를 입력받고 찾을 문자의 갯수를 구해주는 함수 */
const getCount = (content, char) => {
  let count = 0;
  for(let i = 0; i < content.length; i++){
    if(content[i] === char){
        count++
    }
  }
  return count
}


// 플레티넘
/** 7. 한글을 정수로 바꿔주는 함수 
// ex) "공삼육칠" -> 1024 */
const cahngeToint = (hangle) => {
  let hangles = "공일이삼사오육칠팔구"
  let res = ""
  for(let i = 0; i < hangle.length; i++){
    res += hangles.indexOf(hangle.charAt(i))
  }
  return res
}
let reslt7 = cahngeToint("공삼육칠")
console.log(reslt7)


// 다이아
/**8. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사" */
const changeToHangle = (number) => {
  let hangles = "공일이삼아오육칠팔구"
  let str = number + "";  // 1027 -> "1027"
  let res = ""
  for(let i = 0; i < str.length; i++){
    res += hangles.charAt(str.charAt(i))
  }
  return res
}
let result6 = changeToHangle(1027) 
console.log(result6)