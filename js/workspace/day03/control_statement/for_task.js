//브론즈 1~100까지 반복했을때 홀수만 출력
for(let i = 0; i <= 100; i++){
  let n = i + 1
  if(n % 2 === 0){
    continue
  }
  console.log(n)
}

//목표 레벨(합격)
// 1번 문제 : 1~100까지 짝수만 출력
for(let i = 0; i <= 100; i++){
  let n1 = i + 1
  if(n1 % 2 === 0){
    console.log(n1)
  }
}

// 선생님것
// for(let i = 0; i < 50; i++){
//   console.log((i + 1) * 2)
// }

// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
for(let i = 0; i <= 9; i++){
  let n2 = i + 1
  console.log(n2)
}

let res = ''
for(let i = 0; i <= 9; i++){
  res += i + 1
}
console.log(res)


// 심화)
// 골드
// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
for(let i = 0; i < 10; i++){
  let n3 = i + 1
  if(n3 % 2 === 0){
    console.log(`${n3}은 짝수`)
  }else {
    console.log(`${n3}은 홀수`)
  }
}

for(let i = 0; i <= 10; i++){
  i % 2 === 0 ? console.log('짝수') : console.log('홀수')
}

// 4번 문제: 1~20까지 중 3의 배수 출력하기
for(let i = 0; i <= 20; i++){
  let n4 = i + 1
  if(n4 % 3 === 0){
    console.log(n4)
  }
}

for(let i = 0; i < 20; i++){
  let num = i + 1;
  if((i + 1) % 3) {
    continue
  }
  console.log(num)
}

// 플레티넘
// 5번 문제: 1~100까지 누적합 구하기
let sum = 0
for(let i = 0; i <= 100; i++){
  sum += i
}
console.log(sum) // 5050

let total = 0
for(let i = 0; i < 100; i++){
  total += i + l
}
console.log(total)  // 5050


// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
let sum1 = 0
for(let i = 0; i < 100; i++){
  let n5 = i + 1
  if(n5 % 2 === 1){
    sum1 += n5
  }
}
console.log(sum1)  // 2500

let sum3 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum3 += i;
  }
}
console.log(sum3);  // 2500

// 다이아
// 7번 문제: 1~77까지 수 중 홀수의 개수 구하기
let add = 0
for(let i = 0; i <= 77; i++){
  if(i % 2 !== 0){
    add++
  }
}
console.log(add)  // 39

let oddCount = 0
for(let i = 0; i < 77; i++){
  let num = i + 1;
  if(num % 2 === 1){
    oddCount++
  }
}
console.log(oddCount)


// 마스터
// 별찍기
for (let i = 1; i <= 5; i++) {
  let tree = ""; 
  for (let s = 1; s <= 5 - i; s++) {
    tree += " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree += "*";
  }
  console.log(tree);
}

const n = 5
for(let i = 0; i <= 5; i++){
  let num = i + 1
  if(num === 1){ continue; }
  let line = ''
  for(let j = 0; j < n - i; j++){
    line += " "
  }
  for(let k = 0; k < 2 * i - 1; k++){
    line += "*"
  }
  console.log(line)
}





