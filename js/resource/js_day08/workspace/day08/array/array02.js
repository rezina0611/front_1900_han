// .forEach(callback)
// .forEach((data, i, arr) => {})
// .forEach(function(){})
// data: 배열의 값을 순차적으로 접근해서 가져온 data
// i: 배열의 index
// arr: 원본 배열

// 배열의 반복문으로, 비즈니스 로직을 처리하는 메서드
// const arr1 = [10, 20, 30, 40, 50]
// arr1.forEach((data, i, arr) => {
//     arr[i] = data * 10
// })

// // arr1[0] = 100
// console.log(arr1)

// 모든 글자에 뒤에 *을 붙이기
// ['a*', 'b*', 'c*', 'd*', 'e*']
// const arr2 = ['a', 'b', 'c', 'd', 'e']
// arr2.forEach((data, i, arr2) => {
//     arr2[i] = arr2[i] + "*"
// })

// console.log(arr2)


// .map(callback)
// .map((data, i, arr) => { return 반드시 리턴이 필요하다 })
// .map((data, i, arr) => 반드시 리턴이 필요하다)
// 순차적으로 값을 접근(반복)해서, 배열의 값을 변경하기 위해 사용하는 배열의 메서드
// callback함수의 리턴값으로 배열의 값을 변경한다.
// 변경된 값으로 모아진 **새로운 배열**을 리턴한다.

// 1~10
// new Array(10)
//     .fill(0)
//     .map((_, i) => i + 1)
//     .map((data, i) => data * 2)
//     .map((data) => data * 10)
//     .forEach((data, i, arr) => {console.log(data)})


// .filter(callback)
// .filter((data, i, arr) => { return 반드시 조건식(bool)으로 리턴되어야 한다.})
// 주어진 배열에서 제공된 조건식을 만족한 결과로만 모아 **새로운 배열**을 리턴해주는 메서드
// const arr4 = new Array(10) // [empty * 10]
//     .fill(0) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     .map((_, i) => i + 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     .filter((data) => data % 2 === 0) // [2, 4, 6, 8, 10]

// arr4.forEach((data) => console.log(data)) // void


// .reduce(callback, initialValue)
// .reduce((accumulate, current, index, array) => { return 리턴 값이 필요하다 }, 0)
// 배열의 값들을 이용해서 누적합을 구하는 메서드
// 모든 반복이 끝나면 accumulate 값이 리턴된다.

const data = [10, 20, 30, 40, 50]
const number = data.reduce((acc, cur, i, arr) => {
    return acc + cur
}, 0)

console.log(number)

