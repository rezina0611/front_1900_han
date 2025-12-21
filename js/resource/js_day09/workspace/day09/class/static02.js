// 회사의 회사원이 3명이다.
// 회사원이 벌어온 수입을 회사에서 관리해야하는 상황이라면?

class Company{

    static totalIncome = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    work(income){
        return Company.totalIncome += income
    }
}

const hong = new Company('홍길동', 20)
const jang = new Company('장보고', 25)
const lee = new Company('이순신', 35)

hong.work(10_000)
jang.work(20_000)
lee.work(-100_000)

console.log(hong.income)
console.log(jang.income)
console.log(lee.income)
console.log(Company.totalIncome)