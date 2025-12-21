const user = {
    name: "홍길동",
    age: 30
}

// user.age = 100
// console.log(user.age)

// 유저에 주소 추가
// 유저에 연락처 추가
user.address = "서울시 강남구"
user.phone = "010-0000-0000"
user.phone = "1234"

// 특징: **key값이 있으면 값이 수정, key값이 없으면 값이 추가
console.log(user)