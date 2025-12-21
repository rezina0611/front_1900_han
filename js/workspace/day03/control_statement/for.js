// for(let i = 0; i < 10; i++){
//   //console.log("안녕")
//   console.log(i)
// }

//for문을 이용해서 실습
// 1) 1 ~ 10까지 출력
// 2) 10 ~ 1까지 출력
// 3) 1 ~ 10까지 모두 더한 누적값을 출력

for(let i = 1; i <= 10; i++){
  console.log(i)
}
for(let i = 0; i <= 10; i++){
  console.log(i + 1)
}


for(let i = 10; i >= 1; i--){
  console.log(i)
}
for(let i = 0; i < 10; i++){
  console.log(10 - i)
}


let sum = 0
for(let i = 1; i <= 10; i++){
  sum += i
}
console.log(sum)

let total = 0
for(let i = 0; i < 10; i++){
  let sum1 = i + 1
  total += sum1
}
console.log(total)

