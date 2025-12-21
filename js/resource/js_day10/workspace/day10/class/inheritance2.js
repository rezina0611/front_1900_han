class Human {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log("먹기")
    }

    sleep(){
        console.log("잠자기")
    }

    walk(){
        console.log("두 발 걷는다")
    }
}

class Alcoholman extends Human{
    constructor(name){
        super(name)
    }

    walk(){
        console.log("네 발로 걷는다")
    }
}

const human1 = new Human('홍길동')
const human2 = new Alcoholman('장보고')

human1.walk()
human2.walk()
