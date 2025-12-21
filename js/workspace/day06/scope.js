/**밖에서 우리집 안을 보는것 불법
 * 안에서 밖을 보는것 가능
 * 나랑 가까운애를 불림
 */
function func(){
  if(true){
      let a = 10
      console.log(a) // 10
  }
  let a = 20
  console.log(a) // a -> 오류
}

func()
// console.log(a) // a -> 오류

// let a = 10
// function myFunc2(){
//     if(true){
//         console.log(a) // 10
//     }
//     console.log(a) // 10
// }
// myFunc2()
// console.log(a) // 10

// 1 ~ 10까지 값을 전달하면 
// 짝수만 모두 더해서 반환하는 함수
const getTotal = (num) => {
    let total = 0;
    for(let i = 0; i < num; i++){
        if(num % 2 === 0){
            total += num;
        }
    }
    return total
}