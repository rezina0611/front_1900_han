// {}
// const array = []
// const array2 = new Array();
// const array3 = [10, 20, 30, 40, 50]

// console.log(array)
// console.log(array2)
// console.log(array3)

// array3.length: 데이터의 크기
// for(let i = 0; i < array3.length; i++){
//     console.log(array3[i])
// }

// .of(초기값1, 초기값2, ...): 배열의 초기값을 할당시키는 메서드
// const array1 = [10, 20, 30, 40]
// const array2 = Array.of(10, 20, 30, 40)
// console.log(array1)
// console.log(array2)

// .fill(초기값): 초기값으로 배열의 모든 칸 수를 할당시키는 메서드
// 주로 초기화할 때 사용
// array2.fill('a')
// console.log(array1)
// console.log(array2)

// new Array(칸수)
// const array3 = new Array()
// const array4 = new Array(10).fill(0)

// console.log(array3)
// console.log(array4)

// for(let i = 0; i < array4.length; i++){
//     console.log("test")
// }

// 문자열 메서드
// .split() : 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// 빈 문자열을 전달하지 않으면 모두 자른다.
// const phone = "010-1234-5789"
// const array5 = phone.split("-")
// console.log(array5)

// const hello = "hello, world!😎"
// const array6 = hello.split("")

// 실습1
// 반복문을 사용해서, array6번의 l의 글자가 몇 개 인지 출력하시오!
// let count = 0;
// for(let i = 0; i < array6.length; i++){
//     if(array6[i] === 'l'){
//         count++
//     }
// }

// console.log(count)
// console.log(hello.split("l").length - 1)

// .join(): 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴하는 배열의 메서드
// 빈 문자열을 전달하지 않으면 콤마(,)까지 연결된다.
// const array7 = Array.of(10, 20, 30, 40, 50).join("")

// console.log(array7)

// 실습 2번
// array7으로 문자열 12345 만들기
// console.log(array7.split("0").join(""))

// 문자열의 메서드
// .replace('찾을 값', '바꿀 값'): 전달된 매개변수 중 가장 먼저 만나는 값을 치환한다.
// .replaceAll('찾을 값', '바꿀 값'): 전달된 매개변수를 모두 치환한다.
// console.log(array7.replace('0', ''))
// console.log(array7.replaceAll('0', ''))

// .push(): 기존의 배열의 마지막에 값을 추가하는 메서드
// const names = ['홍길동', '장보고', '이순신', '김철수', '김영희']
// names.push('흰둥이')
// names.push('신짱구')

// console.log(names)

// .concat(): 두 개의 배열을 *새로운 배열*로 합쳐서 리턴하는 메서드
// const arr1 = ['홍길동', '장보고', '이순신']
// const arr2 = ['김철수', '김영희']

// const arr3 = arr1.concat(arr2)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// .pop(): 배열의 마지막 요소를 제거하고, 그 값을 리턴해주는 메서드
// const arr4 = [10, 20, 30, 40, 50]
// const removedValue = arr4.pop()
// console.log(arr4)
// console.log(removedValue)

// 실습3
// 1 ~ 10까지 배열에 추가한 후 10 ~ 1까지 역순으로 출력하기
// Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// const arr5 = new Array()
// for(let i = 0; i < 10; i++){
//     arr5.push(i + 1)
// }

// for(let i = 0; i < 10; i++){
//     console.log(arr5[arr5.length - 1 - i])
// }

// .unshift(): 맨 앞에 요소를 추가하는 메서드
// const arr6 = [10, 20, 30]
// arr6.unshift(100)
// console.log(arr6)

// .shift(): 맨 앞에 요소를 삭제하고 삭제된 값을 리턴해주는 메서드
// const removedEl = arr6.shift()
// console.log(removedEl)
// console.log(arr6)

// .slice(시작인덱스, 종료인덱스): 배열을 잘라서 **새로운 배열**을 반환하는 메서드
// 종료 인덱스를 포함하지 않는다.
// const arr7 = [10, 20, 30, 40, 50, 60, 70]
// console.log(arr7.slice(2, 5))
// console.log(arr7.slice(2)) // 2부터 끝까지
// console.log(arr7.slice(-3)) // 뒤에서 3개

// .splice(인덱스, 개수, 추가할 데이터): 인덱스부터 N개를 삭제하고, 
// 값을 추가하고 원본 배열을 수정하고, 삭제된 값을 반환하는 메서드 
// 배열의 값을 수정
// console.log(arr7.splice(2, 3, 7))
// console.log(arr7.splice(-1, 1, 100))
// console.log(arr7)

const phone = "010-7807-7878"
// 핸드폰 번호 파싱하기
// 출력결과: 010****7878
// const result = phone.replace("-7807-", "****")
// const result = phone.split("-")
// const removedArr = result.splice(1, 1, '****')
// const result3 = result.join("")
// console.log(result3)

// const phoneArr = phone.split("-")
// const resultArr = []

// for(let i = 0; i < phoneArr.length; i++){
//     if(i !== 1){
//         resultArr.push(phoneArr[i])
//     }else {
//         resultArr.push("****")
//     }
// }

// console.log(resultArr.join(""))

// .sort(): 무작위로 들어간 데이터의 값을 정렬하는 메서드
const arr8 = [8, 100, 15, 25, 700, 40, 20, 400]
const arr9 = arr8.sort((a, b) => a - b)

// .reverse(): 배열의 순서를 뒤집어주는 메서드
// console.log(arr9)
// console.log(arr9.reverse())

// .includes(): 문자열 또는 배열의 항목 중 특정값을 포함하고 있으면 true, 아니라면 false
console.log("apple".includes("e"))
console.log([10, 20, 30].includes(30))
