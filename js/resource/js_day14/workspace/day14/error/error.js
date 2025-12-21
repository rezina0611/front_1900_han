// 에러 핸들링
// try {
//   // Error를 발생시키는 객체
//   throw new Error(`Erorr 강제로 발생!`)
//   console.log("오류 발생하지 않음!") // 데드 코드
// } catch (error) {
//   console.log("오류가 발생함!")
// } finally {
//   console.log("무조건 한 번 실행하는 코드!")
// }

// try {
//   console.log({a} = 10)
// } catch(error){
//   console.log(`${error.name} 발생!`)
//   console.log("a를 찾지 못했습니다.")
// } 

// console.log(10 / 0)
// console.log("a")

// SyntaxError 문법의 대한 오류
// try ~ catch로 잡을 수 없다.
// try {
//   let number =+= 10;
// } catch (error){
//   console.log(`${error.name}`)
// }


// 비동기 함수
// 1. fetch()
// 2. setTimeout(() => {}, 10000): 몇 초 뒤에 실행
// 3. setInterval(() => {}, 3000): 몇 초 마다 실행
// 4. clearInterval()

try {
  // 비동기 함수의 예외를 잡을 수 없다.
  setTimeout(() => {
    try {
      badcode;
    } catch (error){
      console.log("setTimeout 잘못된 코드 발생!")
    }
  }, 4000)

  console.log("정상 코드 블라블라~")

} catch(error){
  console.log("오류 발생! 비상!")
}

