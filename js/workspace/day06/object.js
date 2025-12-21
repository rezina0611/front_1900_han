//객체(레퍼런스) 선언
//new 사용하는 이유
const user1 = new Object();
const user2 = new Object();
const user3 = new Object();
const user4 = {}

user1.name = "홍길동"
user2.name = "장보고"

console.log(user1)  //{}
console.log(user2)  //{}

//추상화된 함수 : 프로토타입

//동물(나이, 이름, 다리)
// 생성자 함수
function Animal(name, age, leg){
  this.name = name
  this.age = age
  this.leg = leg
}
const cat = new Animal('치즈', 10, 4)
const dog = new Animal('누렁이', 5, 4)
const rabbit = new Animal('토깽이', 3, 4)

console.log(cat)
console.log(dog)
console.log(rabbit)

// const cat = {
//   name : '치즈',
//   age : 10,
//   leg : 4
// }

// const dog = {
//   name : '풍이',
//   age : 10,
//   leg : 4
// }

// const rabbit = {
//   name : '토깽이',
//   age : 5,
//   leg : 4
// }

//프로토타입 만들기
//이름, 나이, 주소, 핸드폰
//유저 객체를 4개 생성 콘솔 출력

function Pel(name, age, address, phone){
  this.name = name
  this.age = age
  this.address = address
  this.phone = phone
}

const a1 = new Pel('홍길동', 20, '경기', '000-0000-0000')
const a2 = new Pel('한정성', 20, '서울', '010-1234-1234')
const a3 = new Pel('정전국', 18, '부산', '010-1234-1234')
const a4 = new Pel('제이홉', 20, '광주', '010-1234-1234')
console.log(a1)


//마침표 접근법 : 변수를 사용하여 key를 선택할 수 없다
// hong.name = "장보고"
// hong.address = "서울시 종로구" // 저장공간
// console.log(hong)
// console.log(hong.name) // 값
a1.name = '이순신'
a1.address = "서울" //저장공간
console.log(a1)
console.log(a1.name)

//대괄호 접근법 : 변수를 사용하여 key를 선택할 수 있다
console.log(a1[name])



const user = {
  name : '홍길동',
  age : 30
}

user.age = 100
console.log(user.age)

// 유저에 주소 추가
// 유저에 연락처 추가
user.address = "서울시 노원구 상계동"
user.phone = "010-0000-0000"
user.phone = "1234"

//특징: **key값이 있으면 값이 수정, key값이 없으면 값이 추가
console.log(user)









