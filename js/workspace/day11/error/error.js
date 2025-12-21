/**에러핸들링(Error Handling)
1) 컴파일 오류
   - 실행할 수 없는 상태를 의미한다. 즉 빨간 줄이 코드에 들어가 있는 경우이다.
2) 빌드 오류
   - 컴파일이 완료되어 만들어지면서 생기는 오류를 의미한다.
3) 런타임 오류
   - 실행중일 때 한 번이라도 정상적으로 실행되었고, 사용자에 의해서 생긴 오류를 의미한다.

try ~ catch문
   
   try {
      예외가 발생할 수 있는 문장
   } catch (error){
      예외 발생 시 실행할 문장
   } finally {
      예외 발생 여부에 상관없이 무조건 실행할 문장
      catch로 잡지 못하는 오류들을 실행해야 할 때    외부종료하는 소스가 있어야 함 
   }

name
   - 에러 이름, 정의되지 않은 변수때문에 발생한 에러라면 'ReferenceError'가 이름이 된다.

message
   - 에러 상세 내용을 담고 있는 메세지를 의미한다.
   - 표준은 아니지만 name과 message 외의 대부분의 호스트 환경에서 지원하는 프로퍼티들도 존재한다.

stack 
   - 가장 널리 사용되는 비표준 프로퍼티 중 하나이다.
   - 현재 호출 스택, 에러를 유발한 중첩 호출들을 순서대로 정보를 가진 문자열로 나열하며,
   디버깅 목적으로 사용된다.
 */

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

//비동기 함수
//1. fetch()
//2. setTimeout(() => {}, 1000) : 몇초 뒤에 실행
//3. setInterval(() => {}, 300) : 몇초 마다 실행 
//4. clearInterval()


// 소스다시 복습할것
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
