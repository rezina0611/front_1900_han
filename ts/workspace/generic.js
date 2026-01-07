"use strict";
// 제네릭(generic)
// 재사용성 높은 컴포넌트를 만들 때 사용
// 한가지 타입보다 여러타입에서 동작하는 컴포넌트를 생성할때 사용하는 타입
// 사용할때 타입을 지정해주는 방식
// function genericText(value: string| number): string | number {
//   return value
// }
Object.defineProperty(exports, "__esModule", { value: true });
// 일반함수
function genericText(value) {
    return value;
}
genericText(123);
genericText("hello");
genericText(true);
// 화살표함수
const genericArrowFunc = (value) => {
    return value;
};
genericArrowFunc(456);
genericArrowFunc("world");
genericArrowFunc(false);
const genericInterface = (value) => {
    return value;
};
const getProductItems = (item) => {
    return item;
};
getProductItems("name");
//# sourceMappingURL=generic.js.map