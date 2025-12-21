// 실습
// 마켓(Market)은 한 가지 상품을 판매한다.
// 구매자(Customer)는 회원마다 각각 할인율이 다르다.
// 마켓은 구매자의 할인율에 맞게 판매하여 수익을 올린다.
// 판매가 완료되면 마켓의 상품의 가격, 재고, 수익을 출력하고
// 구매자의 남은 돈을 출력하세요.

class Market{
    static {
        console.log("개업 축하드립니다~!😎")
    }

    constructor(marketName, productName, productPrice, productStock){
        this.income = 0;
        this.marketName = marketName;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productStock = productStock;
    }

    sell(customer, count){
        const totalPrice = count * ( this.productPrice * (1 - customer.customerDiscount / 100))
        if(this.productStock < count){
            return console.log("재고가 부족합니다.")
        }
        
        if(customer.customerMoney < totalPrice){
            return console.log("고객의 돈이 부족합니다.")
        }

        this.income += totalPrice;
        customer.customerMoney -= totalPrice;
        this.productStock -= count;

        console.log(`${customer.customerName}님이 ${this.productName}을 ${count}만큼 구매했습니다.`)
    }

    showTotalIncome(){
        console.log(`총 수익: ${this.income}원`)
        console.log(`남은 ${this.productName}의 재고: ${this.productStock}개`)
    }
}

class Customer {
    constructor(customerName, customerMoney, customerDiscount){
        this.customerName = customerName;
        this.customerMoney = customerMoney;
        this.customerDiscount = customerDiscount;
    }

    showMoney(){
        console.log(`${this.customerName}님의 잔고는: ${this.customerMoney}원입니다.`)
    }
}

const market = new Market("또또마켓", "사과", 30000, 30)
const hong = new Customer("홍길동", 100000, 30)
const jang = new Customer("장보고", 2000, 10)

market.sell(hong, 2)
market.sell(jang, 1)
market.showTotalIncome()
hong.showMoney()
jang.showMoney()