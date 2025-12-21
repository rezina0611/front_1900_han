// 1. 두 정수의 덧셈 결과를 콜백함수로 출력하기
const add = (num1, num2, callback) => {
    callback(num1 + num2)
}

add(10, 20, (result) => { console.log(result) })