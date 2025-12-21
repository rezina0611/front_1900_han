// forEach, map, filter, fill
// 1) 1~10까지 배열의 누적합 구하기
// 1. for 반복문 사용
const arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for(let i = 0; i < arr0.length; i++){
  sum += arr0[i]
}
console.log(sum)  // 55


//2. reduce() 메서드 사용
new Array(10).fill(0).map((_, i) => i + 1)
const sum1 = reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(sum1)  // 55


//3. forEach() 메서드 사용
let total = 0
new Array(10).fill(0).map((data, i) => i + 1).forEach((data) => {
    total += data
})
console.log(total)




// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
let evenNumbers = []
for(let i = 1; i <= 50; i++){
  if(i % 2 === 0){
    evenNumbers.push(i);
  }
}
let muplie = evenNumbers.map((data) => data * 3)
console.log(muplie)
/*[
    6,  12,  18,  24,  30,  36,  42,
   48,  54,  60,  66,  72,  78,  84,
   90,  96, 102, 108, 114, 120, 126,
  132, 138, 144, 150
]*/

new Array(50)
  .fill(0)
  .map((_, i) => i + 1)  // [1, 2, 3, ~ 50]
  .filter((data) => data % 2 === 0)
  .map((data) => data * 3)  // 배열로 출력
  .forEach((data) => console.log(data))  // 값으로 출력  
// 6 12 18 24 30 36 42 48 54 60 ... 150

new Array(25)
    .fill(0)
    .map((data, i) => (i + 1) * 2) 
    .map((data) => data * 3)
    .forEach((data) => console.log(data))
// 6 12 18 24 30 36 42 48 54 60 ... 150


// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
Array.of(10, 20, 30, 40, 50).reverse().forEach((data) => console.log(data))
// 50 40 30 20 10

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
const arr3 = new Array(10).fill(0).map((data, i) => i + 1)
arr3.map((data) => data > 5 ? data * 2 : data)  //[1, 2, 3, 4, 5, 12, 14, 16, 18, 20]
.forEach((data) => console.log(data))  //1 2 3 4 5 12 14 16 18 20


// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...
const numbers = [];
for(let i = 1; i <= 30; i++){
  //numbers.push(i)
  if(i % 2 === 1){
    numbers.push(i + "*")
  }
}
for (const num of numbers) {
  console.log(num)
}
/**1*
3*
5*
7*
...
29* */

let arrTask = new Array(30)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((data) => data % 2 === 1)   
arrTask.forEach(data => console.log(data + "*"))
/**1*
3*
5*
7*
...
29* */


// 6) arrTask에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask의 기존의 값을 2배로 변경 후 모든 값을 출력하기
// const arr4 = arrTask.split("*").map((data) => data * 2)
// arr4.forEach((data) => console.log(data))


// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
let total2 = 0
const arr8 = new Array(20)
    .fill(0)
    .map((_, i) => i + 1)
    .slice(-5)
    .forEach((data) => {
        total2 += data
    })
console.log(total2)   //90


/*다이아 과제
  배열의 메서드
  연속되는 글자의 개수 중 가장 많이 반복되는 글자 찾기
  단, 같은 횟수라면 제일 먼저 들어오는 값을 리턴한다.
  예상 출력결과
  제일 많이 반복되는 글자 : d
  횟수 : 4
*/
const str = "abcccddeaddddadwefda"

let currentChar = '';      // 현재 연속되는 글자
let currentCount = 0;      // 현재 연속 횟수

for (let i = 0; i < str.length; i++) {
  // 이전 문자와 현재 문자가 같은지 비교
  if(str[i] === currentChar){
    currentCount++;
  }else{
    // 이전 문자와 현재 문자가 다른 경우, 새로운 연속 시작
    currentChar = str[i];
    currentCount = 1; // 횟수를 1부터 다시 시작
  }
}
console.log(`입력 문자열 : ${str}`)
console.log(`제일 많이 반복되는 글자 : ${currentChar}`)
console.log(`횟수 : ${currentCount}`);



/**한글을 숫자로 (배열 메서드로 이용)
 * ex) "일이삼사" => "1234"
 * 한글 숫자 문자열을 아라비아 숫자 문자열로 변환합니다.
 * @param {string} hangle - "일이삼사"와 같은 한글 숫자 문자열
 * @returns {string} - "1234"와 같은 숫자 문자열
 * 입력된 한글문자열을 배열로 분리하여 반환
 * 배열의 각요소를 순회하면서 hangleNums 배열의 인덱스를 찾아서 인덱스값을 모아 새로운 배열로 생성하여 합친다
 */
function cahngeToint(hangle){
  const hangleNums = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
  return hangle.split("")
    .map((str) => hangleNums.indexOf(str))
    .join("")
}
console.log(cahngeToint("일이삼사")); // 출력: "1234"
console.log(cahngeToint("오육칠팔구")); // 출력: "56789"
console.log(cahngeToint("영일이삼")); // 출력: "0123"



/**숫자를 한글로 (배열 메서드로 이용)
 * ex) "1234" => "일이삼사"
 * 숫자 문자열을 한글 숫자 문자열로 변환합니다.  split(), map(), join()
 * @param {string} numberStr - "1234"와 같은 숫자 문자열
 * @returns {string} - "일이삼사"와 같은 한글 문자열
 * 입력된 숫자 문자열 문자열을 배열로 분리해서 korArray 변수에 대입
 * 배열의 각요소를 순회하면서 문자를 숫자로 변환(parseInt)하고,  koreanNums 배열에서 해당인덱스의 한글문자를 가져와서 새로운 한글 배열을 생성한다
 * 새로 생성된 배열의요소들을 합친다
 */
function cahngeToint(numberStr) {
  const koreanNums = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const korArray = numberStr.split("")
    .map((char) => {
      const index = parseInt(char)
      return koreanNums[index]; 
    }); 
  return korArray.join("");
}

console.log(cahngeToint("1234"));    // 출력: "일이삼사"
console.log(cahngeToint("5067"));   // 출력: "오영육칠"
console.log(cahngeToint("9876543210")); // 출력: "구팔칠육오사삼이일영"