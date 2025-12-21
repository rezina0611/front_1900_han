//1. 성과 이름을 받아서 연결해주는 함수 
function getFullName(lastName, firstName){
  let res = lastName + firstName
  return res
}
console.log(getFullName('정성','한'))



//2. 두값을 더해서 출력해주는 함수
function total(n1, n2){
  return n1 + n2
}
console.log(total(10, 20))  // 30


//3. 이름을 전달하면 5번 출력해주는 함수
function printName(Name){
  console.log(Name)
  console.log(Name)
  console.log(Name)
  console.log(Name)
  console.log(Name)
}
printName("한정성")

function printName(Name){
  for(let i = 0; i < 5; i++){
    console.log(Name)
  } 
}
printName("한정성")

//4. 이름을 전달하면 이름뒤에 "님"을 붙여주는 함수
function printName2(name){
  return name + '님'
}
let res = printName2('한정성')
console.log(res)