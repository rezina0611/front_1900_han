class Human {
  constructor(name){
    this.name = name
  }

  eat(){
    console.log('먹기')
  }

  sleep(){
    console.log('잠자기')
  }

  walk() {
    console.log('두 발 걷기')
  }
}

class Alcoholman extends Human{
  constructor(name){
    super(name)
  }

  walk() {
    console.log('네 발로 걷는다')
  }
}

const human1 = new Human('홍길동')
const human2 = new Alcoholman('춘향이')

human1.walk()  // 두 발 걷기
human2.walk()  // 네 발로 걷는다

