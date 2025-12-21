// const sum = (num1, num2, callback) => {
//     callback(num1 + num2)
// }

// sum('a', 'b', (data) => {
//     for(let i = 0; i < 10; i++){
//         console.log(data)
//     }
// })

// 두 수를 더해서 출력하는 함수
const add = (num1, num2, callback) => {
    callback(num1 + num2)
}

add(10, 20, console.log)

// "성"과 "이름"을 받아서 연결하고 결과 값에 "님"을 붙여주는 기능
const getFullName = (lastName, firstName, callback) => {
    return callback(lastName + firstName)
}

const addNim = (data) => { 
    return data + "님"
}

console.log(getFullName("성", "이름", addNim))

