// 프로토타입 만들기 
// 이름, 나이, 주소, 핸드폰
// 유저 객체를 4개 생성 콘솔 출력
function User(name, age, address, phone){
    this.name = name
    this.age = age
    this.address = address
    this.phone = phone
}

const hong = new User('홍길동', 20, '서울시 강남구', '010-0000-0000')
// console.log(hong)


// 마침표 접근법
// hong.name = "장보고"
// hong.address = "서울시 종로구" // 저장공간
// console.log(hong)
// console.log(hong.name) // 값

// 대괄호 접근법
// console.log(hong["name"])

// 마침표 접근법은 변수를 사용하여 key를 선택할 수 없다.
let key = "name"
console.log(hong.key)
// 대괄호 접근법은 변수를 사용하여 key를 선택할 수 있다.
console.log(hong[key])



