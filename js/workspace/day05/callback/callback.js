//콜백함수 : 다른 함수에 인자로 전달되어 특정 작업이 완료된 후 호출되는 함수

// 두 수를 받아서 두 수를 출력하기
const add1 = (num1, num2, callback) => {
  callback(num1 + num2)
}
const print = (value) => {
  console.log(value)
}
add1(10, 20, print)
add1(10, 20, (result) => {console.log(result)})

const sum = (num1, num2, callback) => {
    callback(num1 + num2)
}

sum('a', 'b', (data) => {
    for(let i = 0; i < 10; i++){
        console.log(data)
    }
})

// 두 수를 더해서 출력하는 콜백함수
const add2 = (num1, num2, callback) => {
    callback(num1 + num2)
}
add2(10, 20, console.log)

// "성"과 "이름"을 받아서 연결하고 결과 값에 "님"을 붙여주는 기능 콜백함수
const getFullName = (lastName, firstName, callback) => {
    return callback(lastName + firstName)
}
const addNim = (data) => { 
    return data + "님"
}
console.log(getFullName("성", "이름", addNim))


// 두 정수의 덧셈 결과를 콜백함수
//두 수를 더한 뒤, 그 결과를 콜백 함수로 전달
const add3 = (n1, n2, callback) => {
  callback(n1 + n2)
}
add3(10, 20, (res) => {console.log(res)})

// 목표
// 출력결과 제외하고 모든 값은 변수에 담는다
// 함수가 리턴 값이 있다면 통째로를 리턴값으로 봐야한다.
// 콜백(callback)은 함수의 실행이 끝난 후 실행할 다른 함수를 인자로 전달하는 패턴

// 1) 두 정수의 곱셈 결과를 출력
const multiplication = (num1, num2, callback) => {
    callback(num1 * num2)
}
multiplication(10, 20, (result) => {
    console.log(result)
})

//선생님것
const multiple = (num1, num2, callback) => {
    callback(num1 * num2)
}
//값이 아니다, 변수에 담을수 없다
multiple(10, 20, console.log)



// 2) 두 정수의 곱셉을 구한뒤 결과에 2를 곱해서 반환
const multiplication2 = (num1, num2, callback) => {
    callback(num1 * num2)
}
multiplication2 (10, 20, (result) => {
    console.log(result * 2)
})

//선생님것
const multipleBy2 = (num) => num * 2
let res = getmultiple(10, 20, multipleBy2)
console.log(res)


// 3) 두 정수의 합을 구하여 결과를 출력
const myCalculator = (num1, num2, callback) => {
    let sum = num1 + num2
    callback(sum)
}
myCalculator(5, 5, (result) => {
    console.log(result)
});

// 4) 정수를 5개 전달하여 가장 큰 값과 작은 값을 구하고 큰 값과 작은 값을 문자열로 반환  
// Math.Max(),   Math.Min() String()
const getMinAndMax = (...numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i]
        }
        if(max < numbers[i]){
            max = numbers[i]
        }
    }
    return `작은 값: ${min}, 큰 값: ${max}`
}

let result4 = getMinAndMax(10, 20, 30, 40, 50)
console.log(result4)


// 5) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
const OddEven = (num, callback) => {
    //callback(n1 + n2)
    callback(num % 2 === 0 ? '짝수' : '홀수')
}
OddEven(10, 20, (result) => {
    //if(result % 2 === 0) return '짝수'
    //else return '홀수'
    OddEven(result, console.log)
})



const getOddOrEven = (num, callback) => {
    callback(num % 2 === 0 ? "짝수" : "홀수")
}

sum(10, 20, (result) => {
    getOddOrEven(result, console.log)
})