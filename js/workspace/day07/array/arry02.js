
//.forEach(callback)  
//.forEach((data, i, arr)=>{})
// data(value) : 배열의 값을 순차적으로 접근해서 가져온 data
// i : 배열 index
// arr : 원본배열
// return 값이 없어서  변수에 담을수 없음
// 배열의 반복문으로 비즈니스 로직을 처리하는 메서드
// 빠른 for문
const arr1 = [10, 20, 30, 40, 50]
arr1.forEach((data, i, arr) => {
  arr[i] = data * 10
  //console.log(data, i, arr)
})
// arr1[0] = 100
console.log(arr1)

//모든 글자에 뒤에 *을 붙이기
const arr2 = ['a', 'b', 'c', 'd', 'e']
arr2.forEach((data, index, arr2) => {
  arr2[index] = arr2[index] + "*"
  // arr2[0] = arr2[0] + "*"
  // arr2[1] = arr2[1] + "*"
  // arr2[2] = arr2[2] + "*"
  // arr2[3] = arr2[3] + "*"
  // arr2[4] = arr2[4] + "*"
})
console.log(arr2)

// 아주 중요중요중요
// .map(callback)
// .map((data, i, arr) => { return 반드시 리턴이 필요하다 })   => 엔터기준으로 엔터가필요하면 {} 사용
// .map((data, i, arr) => 반드시 리턴이 필요하다)    
// 순차적으로 값을 접근(반복)해서 배열의 값을 변경하기 위해 사용하는 배열의 메서드
// callback함수의 리턴값으로 배열의 값을 변경한다.
// 변경된 값으로 모아진 **새로운 배열**을 리턴한다.

//1 ~ 10 까지 출력하기
//new Array(10)  => 값은 몰라도 칸수10 지정
//체인징 문법
new Array(10)
    .fill(0)  // 배열의 모든 칸수를 0으로 할당  [0,0,0,0,0,0,0]
    .map((data, i, arr) => i + 1)  // 인덱스 1부터 9까지 1씩 더하기   map에서 콘솔하면 안됌 (콘솔은 값이 아니므로)
    .map((_, i, arr) => i + 1)
    .map((data, i) => data * 2)
    .map((data) => data * 10)
    .forEach((data, i, arr) => {console.log(data)})

new Array(10)
    .fill(0) 
    .map((data, i, arr) => {return i + 1}) 
    .forEach((data, i, arr) => {console.log(data)})

// 숫자 배열을 각 숫자를 두 배로 만들어 새로운 배열을 생성
// const arr3 = [1, 2, 3, 4, 5]
// const n_arr3 = arr3.map((data, i, arr3) => (i + 1) * 2)
// console.log(n_arr3);



// .filter(callback) : 배열에서 원하는 값만 걸러내기
// .filter((data, i, arr) => { return 반드시 조건식(bool)으로 리턴되어야 한다.})
// 주어진 배열에서 제공된 조건식을 만족한 결과로만 모아 **새로운 배열**을 리턴해주는 메서드
const arr4 = new Array(10) // [empty * 10]
    .fill(0) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    .map((_, i) => i + 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter((data) => data % 2 === 0) // [2, 4, 6, 8, 10]
arr4.forEach((data) => console.log(data)) // void


//.reduce(callback, initialValue) – 배열을 하나의 결과값으로 줄이기
//.reduce((accumulate, current, index, array) => { return 리턴 값이 필요하다 }, 0)
// 배열의 값들을 이용해서 누적합을 구하는 메서드
// 모든 반복이 끝나면 accumulate 값이 리턴된다.
// accumulator: 첫 번째 반복(iteration)에서는 초깃값(initialValue)의 값을 가집니다.
// currentValue: 현재 반복(iteration)에서 처리 중인 배열의 요소의 값을 가집니다.
const data = [10, 20, 30, 40, 50]
const number = data.reduce((acc, cur, i, arr) => {
    return acc + cur
}, 0)
console.log(number)



//.forEach(function(){})