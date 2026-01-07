"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 
const explicitObject = {
    attr1: 123456,
    attr2: "some value",
    someFunc: () => 10 > 11
};
const testObj = {
    attr1: [10, 20, 30],
    attr2: ["a", "b", "c"],
    attr3: 10,
    attr4: function () {
        console.log("hello TS!");
    }
};
/**객체 특징
 * key가 있으면 수정, 없으면 추가
 */
// const indexSigObject: {
//   attr1:string
//   attr2:string
//   attr3:string
//   attr4:string
// } = {
//   arr1: "some value",
//   arr2: "some value",
//   arr3: "some value",
//   arr4: "some value"
// }
//타입이 string이 중복돼면 
const indexSigObject = {
    arr1: "some value",
    arr2: "some value",
    arr3: "some value",
    arr4: "some value"
};
const limitedSigObject = {
    a: 10
};
//# sourceMappingURL=object.js.map