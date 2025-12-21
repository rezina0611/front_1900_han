
// 클래스는 인스턴스 전체에서 접근 가능한 프로퍼티로 만들어야 하므로
// function, let, const 등 키워드 없이 선언해야 한다.

class Data {
    data = 10
    static dataS = 10

    increase(){
        this.data++
    }

    sIncrease(){
        Data.dataS++
    }

}

// 객체화
// let staticTest = new Data() // 100번지
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest = new Data() // 200번지
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// staticTest.increase()
// console.log(staticTest.data)

let staticTest2 = new Data() // 100
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2 = new Data() // 200
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
staticTest2.sIncrease()
console.log(Data.dataS)



