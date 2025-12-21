// 배열  객체 레퍼런스 타입 (참조형)
const array = []
const array2 = new Array();
const array3 = [10, 20, 30, 40, 50]

console.log(array)
console.log(array2)
console.log(array3)

// array3.length : 데이터의 크기
for(let i = 0; i < array3.length; i++){
  console.log(array3[i])
}

// .of(초기값1, 초기값2, ....) 배열의 초기값을 할당시키는 메서드
const array4 = [10, 20, 30, 40, 50]
const array5 = Array.of(10, 20, 30, 40, 50)
// console.log(array1)  // [ 10, 20, 30, 40, 50 ]
// console.log(array2)  // [ 10, 20, 30, 40, 50 ]

// .fill(초기값) : 초기값으로 배열의 모든 칸수를 할당시키는 메서드
array2.fill('a')
// console.log(array1)  // [ 10, 20, 30, 40, 50 ]
// console.log(array2)  // [ 'a', 'a', 'a', 'a', 'a' ]

// new Array(칸수)
const array6 = new Array()
const array7 = new Array(10).fill(0)

console.log(array6)
console.log(array7)


// 문자열 메서드
// split() : 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다
// 빈 문자열을 전달하지 않으면 모두 자른다
const phone = "010-0000-0000"
const arr1 = phone.split("-")
console.log(arr1)    //['010', '0000', '0000']

const hello = "hello, world!"
const arr2 = hello.split("")
console.log(arr2)  //['hello, world!']

// 실습1
// 반복문을 사용해서 arr2번의 l의 글자가 몇개인지 출력하시오
let count = 0
for(let i = 0; i < array6.length; i++){
  if(arr2[i] === "l"){
    count++
  }
}
console.log(count)
console.log(hello.split("l").length - 1)

// .join() : 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴한다  배열.join(구분자);
// 빈 문자열을 전달하지 앟으면 콤마(,)까지 연결된다.
// 구분자를 지정하지 않으면 쉼표(,)로 연결됩니다. join()
// 요소 사이에 공백을 넣어 문장처럼 만들 수 있습니다. join(' ')
// 구분자 없이 모든 요소들을 완전히 붙여서 하나의 문자열로 만듭니다. join('')
const arr3 = Array.of(10,20,30,40,50).join("")
console.log(arr3)  // 1020304050

// 실습2
// arr3으로 문자열 12345 만들기
const arr4 = arr3.split("0").join("")
console.log(arr4)   // 12345

// .replace("찾을 값","바꿀 값") : 전달된 매개변수 중 가장 먼저 만나는 값을 치환한다.
// .replaceAll("찾을 값","바꿀 값") : 전달된 매개변수를 모두 치환한다.
console.log(arr3.replace('0', ''))
console.log(arr3.replaceAll('0', ''))

// .push() : 배열의 맨 마지막에 값을 추가하는 메서드
const names = ['홍길동', '장보고', '이순신', '김철수', '김명희']
names.push('천주교')
names.push('신짱구')
console.log(names)   // ['홍길동', '장보고', '이순신', '김철수', '김명희', '천주교']

// .concat() : 두 개의 배열을 새로운 배열로 합쳐서 리턴하는 메서드
const names1 = ['홍길동', '장보고', '이순신']
const names2 = ['홍길동', '김명희']
const new_names = names1.concat(names2)
console.log(new_names)   // ['홍길동', '장보고', '이순신', '홍길동', '김명희']

// .pop() :  배열의 맨 마지막에 값을 제거하는 메서드
const arr5 = [10, 20, 30, 40, 50]
const removedValue = arr5.pop()
console.log(arr5) 
console.log(removedValue)  // 50

// 실습3
//1 ~ 10까지의 배열에 추가한 후 10 ~ 1까지 역순으로 출력하기
const aray = []
for(let i = 0; i < 10; i++){
  aray.push(i + 1)
}
aray.reverse()
console.log(aray);

for(let i = 0; i < 10; i++){
  console.log(aray[aray.length - 1 - i])
}

// .shift() : 맨 앞에 요소를 삭제하고 삭제된 값을 리턴해주는 메서드
const removedEl = arr6.shift()
console.log(removedEl)
console.log(arr6)

// .slice(시작인덱스, 종료인덱스) : 배열을 잘라서 **새로운 배열**을 반환하는 메서드
const arr7 = [10, 20, 30, 40, 50, 60, 70]
console.log(arr7.slice(2, 5))
console.log(arr7.slice(2))  // 2부터 끝까지
console.log(arr7.slice(-3))  // 뒤에서 3개 가져오기

// .splice(index, 갯수, 추가를 데이터) : 인덱스부터 N개를 삭제하고, 값을 추가하고 원본 배열을 수정하고, 삭제된 값을 반환하는 메서드
// 배열의 값을 수정하는것
//ex 30,40,50 => 7
console.log(arr7.splice(2, 3, 7))


// 실습 4
phone = "010-8986-0554"
// 핸드폰 번호 파싱하기
// 출력결과 : 010****0554
//const result1 = phone.replace("-8986-", "****")
//const result = phone.split("-").splice(1, 1, "****").join("")
const result = phone.split("-")
const removedArr = result.splice(1, 1, "****")
const result3 = result.join("")
console.log(result3)

const phoneArr = phone.split("-")
const resultArr = []
for(let i = 0; i < phoneArr.length; i++){
  if(i !== 1){
    resultArr.push()
  }else{
    resultArr.push("****")
  }
}
console.log(resultArr.join(""))

// .sort() : 무작위로 들어간 데이터의 값을 정렬하는 메서드  유니코드 방식대로 
const arr8 = [8, 100, 15, 25, 700, 40, 70, 400, 20]
arr8.sort()
console.log(arr8)  // [100, 15, 20, 25, 40, 400, 70, 700, 8]
const arr9 = arr8.sort((a, b) => a - b)
console.log(arr9) 

// .reverse() : 배열의 순서를 뒤집어주는 메서드
console.log(arr9)
console.log(arr9.reverse())

// .includes() : 문자열 또는 배열의 항목 중 특정값을 포함하고 있으면 true, 아니면 false
console.log("apple".includes("e"))
console.log([10, 20, 30].includes(30))


/**메서드와 함수
 * 함수 > 클래스 > 메서드 > 코드
 * . ~안에
 * 빈문자열을 넣어야 값만 붙인다
 */





