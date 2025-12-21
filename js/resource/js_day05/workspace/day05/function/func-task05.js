// 문자열에서만 사용가능!
// .indexOf(): 해당 문자의 index 번호를 리턴하는 메서드
// "abcde".indexOf("d")

// .charAt(): 해당 index에 있는 문자를 리턴하는 메서드
// "abcde".charAt(3)
// "abcde"[3]

// 브론즈
// 1. 어떤 값을 받으면 어떤 값을 출력해주는 함수
// const print = (data) => {
//     console.log(data)
// }

// print(10)
// print("홍길동")

// 2. 3개의 정수를 받아서 3개 모두 빼주는 함수
// ex) 10, 20, 30 -> 10 - 20 - 30
// const getTotalSubtract = (num1, num2, num3) => num1 - num2 - num3

// let result = getTotalSubtract(10, 20, 30)
// console.log(result)


// 실버
// 3. 홍길동을 n번 출력해주는 함수
const printByCount = (count) => {
    for(let i = 0; i < count; i++){
        console.log("홍길동")
    }
}

printByCount(10)

// 4. 홀수인지 짝수인지 알려주는 함수
const getIsOddOrEven = (data) => data % 2 === 0 ? "짝수" : "홀수"
let result4 = getIsOddOrEven(15)
console.log(result4)


// 골드 (목표)
// 5. 1~n까지 홀수만 출력해주는 함수
const printOdd = (count) => {
    let num = i + 1
    for(let i = 0; i < count; i++){
        if(num % 2 === 0) { continue; }
        console.log(num)
    }
}

// 6. 문자열과 찾을 문자를 입력받고 찾을 문자의 개수를 구해주는 함수
const getCount = (content, char) => {
    let count = 0;
    for(let i = 0; i < content.length; i++){
        if(content[i] === char){
            count++
        }
    }
    return count
}

let result6 = getCount("abcdefgas", "a")
console.log(result6)



// 플레티넘
// 7. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024

const changeToInt = (hangle) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""
    for(let i = 0; i < hangle.length; i++){
        result += hangles.indexOf(hangle.charAt(i))
    }
    return result
}

let result7 = changeToInt("공삼육칠")
console.log(result7)

// 다이아
// 8. 정수를 한글로 바꿔주는 함수
// ex) 1024 -> "일공이사"
const changeToHangle = (number) => {
    let hangles = "공일이삼사오육칠팔구"
    let str = number + "";
    let result = ""
    for(let i = 0; i < str.length; i++){
        result += hangles.charAt(str.charAt(i))
    }
    return result
}

let result8 = changeToHangle(1027)
console.log(result8)
