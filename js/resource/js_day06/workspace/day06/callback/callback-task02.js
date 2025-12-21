// *목표*
// 출력 결과 제외하고 모든 값은 변수에 담는다
// 함수가 리턴 값이 있다면 통째로를 리턴값으로 봐야한다.

// 1) 두 정수의 곱셈 결과를 출력
// const multiple = (num1, num2, callback) => {
//     callback(num1 * num2)
// }

// 값이 아니다. 변수에 담을 수 없다.
// multiple(10, 20, console.log)


// const getMultiple = (num1, num2, callback) => {
//     return callback(num1 * num2)
// }

// 2) 두 정수의 곱셉을 구한뒤 결과에 2를 곱해서 반환
// const multipleBy2 = (num) => num * 2

// let result2 = getMultiple(10, 20, multipleBy2)
// console.log(result2)

// 3) 두 정수의 합을 구하여 결과를 출력
const sum = (num1, num2, callback) => {
    callback(num1 + num2)
}

// sum(10, 20, console.log)

// 4) 정수를 5개 전달하여 가장 큰 값과 작은 값을 구하고 큰 값과 작은 값을 문자열로 반환
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
const getOddOrEven = (num, callback) => {
    callback(num % 2 === 0 ? "짝수" : "홀수")
}

getOddOrEven(10, 20, (result) => {
    console.log(result)
})