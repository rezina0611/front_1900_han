// 은행(Bank) 클래스가 존재한다. 
// 회원(Member)들에게 관리비를 5만원 가져가야하는 경우
// 1. 회원이 가진 돈에서 5만원을 빼야한다.
// 2. 은행에 5만원을 추가해야한다.

class Bank{
    constructor(bankName, bankMoney){
        this.bankName = bankName;
        this.bankMoney = bankMoney;
    }

    withdraw(member){
        member.memberMoney -= 50000
        this.bankMoney += 50000
    }
}

class Member{
    constructor(memberName, memberMoney){
        this.memberName = memberName;
        this.memberMoney = memberMoney;
    }
}

const kb = new Bank("국민은행", 1000000)
const hong = new Member('홍길동', 70000)

console.log(hong.memberMoney)
console.log(kb.bankMoney)
kb.withdraw(hong)
console.log(hong)
console.log(hong.memberMoney)
console.log(kb.bankMoney)