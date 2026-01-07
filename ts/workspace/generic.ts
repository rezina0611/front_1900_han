// 제네릭(generic)
// 재사용성 높은 컴포넌트를 만들 때 사용
// 한가지 타입보다 여러타입에서 동작하는 컴포넌트를 생성할때 사용하는 타입
// 사용할때 타입을 지정해주는 방식
// function genericText(value: string| number): string | number {
//   return value
// }

// 일반함수
function genericText<T>(value: T): T {
  return value
}
genericText<number>(123)
genericText<string>("hello")
genericText<boolean>(true)

// 화살표함수
const genericArrowFunc = <T>(value: T): T => {
  return value
}
genericArrowFunc<number>(456)
genericArrowFunc<string>("world")
genericArrowFunc<boolean>(false)

// 타입 가드
//const genericWithGuard = <T>(value: T): T => {}  너무빠름

//인터페이스 + 제네릭
interface GenericIdentity{
  <T>(text: T): T;
}

const genericInterface: GenericIdentity = <T>(value: T): T => {
  return value
}

//제네릭으로 들어온 타입을 정의한 키 타입으로만 사용하도록 제한하고 싶을때
interface ProductItems{
  name: string;
  price: number;
  stock: number;
}

const getProductItems = <T extends keyof ProductItems>(item: T): T => {
  return item
}
getProductItems("name")

