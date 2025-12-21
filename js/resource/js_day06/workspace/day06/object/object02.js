// 동물
// 이름, 나이, 다리
function Animal(name, age, leg){
    this.name = name
    this.age = age
    this.leg = leg
}

const cat = new Animal('치즈', 20, 4)
const dog = new Animal('누렁이', 5, 4)
const rabbit = new Animal('토깽이', 3, 4)

console.log(cat)
console.log(dog)
console.log(rabbit)


// const cat = {
//     name: "치즈",
//     age: 5,
//     leg: 4
// }

// const dog = {
//     name: "시고르잡종",
//     age: 10,
//     leg: 4
// }

// const rabbit = {
//     name: "토깽이",
//     age: 5,
//     leg: 10
// }