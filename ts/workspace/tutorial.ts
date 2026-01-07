// 함축형 문법(implicit type assertion)
// 값을 통해서 타입을 알려주는 문법
let strImpl = "string value" // string
let numImpl = 10.7 // number
let boolImpl = false // boolean
let arrayImpl = [1, 2, 3, 4] // number[]
// arrayImpl = ["a"] // string[]

// 설명형 문법(explicit type annotation)
let strExpl:string = "string"
let numExpl:number = 10
let boolExpl:boolean = true
let arrayExpl:string[] = ['a', 'b', 'c']

console.log(strExpl)
console.log(numExpl)
console.log(boolExpl)
console.log(arrayExpl)