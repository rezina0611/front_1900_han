// 1) 1~10까지 Array에 담은 후 짝수만 출력하기
// const arr1 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// const arr11 = []

// for(let i = 0; i < 10; i++){
//     arr11.push(i + 1)
// }

// arr11.forEach((data, i, arr) => {
//     if(data % 2 === 0){
//         console.log(data)
//     }
// })

// 2) 1~10까지 Array에 담은 후 10부터 1까지 반대로 출력하기
// arr11.reverse().forEach((data) => {
//     console.log(data)
// })

// .map()
// 3) 1~10까지 배열에 담고, 2의 배수가 맞으면 true, 아니면 false로 값을 변경하기
// const arr3 = new Array(10).fill(0).map((_, i) => i + 1)
// arr3.map((data) => data % 2 === 0).forEach((data) => console.log(data))

// .filter()
// .filter()를 이용하여 01012345678 결과로 출력하기
const phone = "010-1234-5678".split("").filter((data) => data !== "-").join("")
console.log(phone)