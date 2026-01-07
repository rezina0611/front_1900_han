function implicitReturnFunc(){
  return 12345
}
let implResultl:number = implicitReturnFunc()


const implicitReturnFunc2 = () => {
  return 10 + "a"
}
let implResult2:string = implicitReturnFunc2()


// 설명형 함수
function explicitReturnFunc():boolean {
  return false
}
const fun1:() => boolean = explicitReturnFunc;
const fun2:boolean = explicitReturnFunc()

const explicitReturnFunc2 = (): string => {
  return "some value"
}
const fun3:() => string = explicitReturnFunc2
const fun4:string = explicitReturnFunc2()

// 매개변수
function funcWithParams(x:number, y:number, z:number):number {
  return x + y + z
}
const fun5:number = funcWithParams(10, 20, 10)

//화살표 매개변수
const funcWithParams2 = (x:number, z:number, y:string) => {
  return x + y + z
}
const fun6:string = funcWithParams2(10, 30, String(30))

// 옵셔널 ?
const funcWithOptional = (x:number, y?:number, z?:number) => {
  //검증 
  if(y === undefined){
    return x
  }
  if(z === undefined){
    return x + y
  }
  return x + y + z
}
console.log(funcWithOptional(10))
console.log(funcWithOptional(10, 20))
console.log(funcWithOptional(10, 30, 40))


const funcWithParams3 = (...numbers:number[]):number => {
  let total = 0
  for(let number of numbers){
    total += number
  }
  return total
}
let result:number = funcWithParams3(10, 20, 30)

