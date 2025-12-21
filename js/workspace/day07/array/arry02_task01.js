//1) 1~10까지 Array에 담은 후 짝수만 출력하기
//첫번째 방법 - for문으로 값만 추출
const arr0_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < arr0_1.length; i++){
  if(arr0_1[i] % 2 === 0){
    console.log(arr0_1[i])
  }
}

//두번째 방법 - map, filter문으로 배열 추출
const arr0_2 = new Array(10)
  .fill(0) 
  .map((data, i) => i + 1)
const even = arr0_2.filter((data) => data % 2 === 0)
console.log(even)

//세번째 방법
const arr0_3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const n_arr03 = []
for(let i = 0; i < 10; i++){
  n_arr03.push(i + 1)
}
n_arr03.forEach((data) => {
  if(data % 2 === 0){
    console.log(data)
  }
})

//2) 1~10까지 Array에 담은 후 10부터 1까지 반대로 출력하기
//첫번째 방법 - for문으로 값만 추출
const arr1_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = arr1_1.length - 1; i >= 0; i--){
  console.log(arr1_1[i])
}

//두번째 방법 - 배열로 
const arr1_2 = new Array(10)
  .fill(0)
  .map((_, i) => i + 1)
arr1_2.reverse()
console.log(arr1_2)


// .map()
// 3) 1~10까지 배열에 담고, 2의 배수가 맞으면 true, 아니면 false로 값을 변경하기
// const arr3 = new Array(10).fill(0).map((_, i) => i + 1)
// arr3.map((data) => data % 2 === 0).forEach((data) => console.log(data))
//첫번째 방법 -
const arr2_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < arr2_1.length; i++){
  if(arr2_1[i] % 2 === 0){
    console.log("true"); // 2의 배수임
  }else{
    console.log("false") // 2의 배수가 아님
  }
}

//두번째 방법
const numbers = new Array(10).fill(0).map((_, i) => i + 1 )
const booleanArray = numbers.map((data) => {return data % 2 === 0})
console.log(booleanArray)
//[false, true, false, true, false, true, false, true, false, true]


// .filter()
// 4) .filter()를 이용하여 01012345678 결과로 출력하기
const phone = "010-1234-5678".split("").filter((data) => data !== "-").join("")
console.log(phone)


