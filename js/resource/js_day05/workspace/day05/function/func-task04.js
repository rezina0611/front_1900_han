// 1) 어떤 정수(n)을 넘기면 n까지 모두 더한 값을 반환(리턴)해주는 함수
// 1. 어떤 수를 받는다 -> (매개변수)
// 2. for문을 사용해서 10이 들어왔다면 1~10까지 반복해서 숫자를 만든다
// 3. for문 밖에 모든 값을 더할 수 있는 변수를 만든다.
// 4. 변수에 모든 값을 반복하면서 누적한다
// 5. 사용자가 누적한 값을 궁금해하는거니까 return한다!
function sum(num){
    let total = 0
    for(let i = 0; i < num; i++){
        total += i + 1
    }
    return total
}

// 2) 0과 1을 마구잡이로 5개 전달했을 때 0과 1의 개수를 각각 구해주는 함수
// "01100"
// 5개를 매개변수
// const getCountOneAndZero = (num1, num2, num3, num4, num5) => {
//     let oneCount = num1 + num2 + num3 + num4 + num5
//     let zeroCount = 5 - oneCount
//     return `0의 개수: ${zeroCount}개, 1의 개수는 ${oneCount}개`
// }

// const getCountOneAndZero = (num1, num2, num3, num4, num5) => {
//     let oneCount = 0
//     let zeroCount = 5 - oneCount

//     num1 && oneCount++
//     num2 && oneCount++
//     num3 && oneCount++
//     num4 && oneCount++
//     num5 && oneCount++

//     return `0의 개수: ${zeroCount}개, 1의 개수는 ${oneCount}개`
// }

// console.log(getCountOneAndZero(1, 1, 0, 1, 1))

// 3) 문자열을 전달하면 문자열을 뒤집어 주는 함수
// ex) "abcde" -> "edcba"

// 1. length를 이용해서 글자만큼 반복문 돌린다. (for) 
const reverse = (data) => {
    let result = ""
    for(let i = 0; i < data.length; i++){
        result += data[data.length - 1 - i]
    }
    return result
}

