"use strict";
// 확장형 문법
// 유저의 타입 붙이기
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: {
//     street: "Kulas Light",
//     city: "Gwenborough",
//     zipcode: 92998-3874,
//     geo: {
//         lat: -37.3159,
//         func: () => { return [1,2,3] }
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874", // 숫자가 아닌 문자열로 감싸야 합니다. (하이픈 포함)
        geo: {
            lat: "-37.3159", // 타입 정의(string)에 맞춰 따옴표를 추가했습니다.
            func: () => { return [1, 2, 3]; }
        }
    }
};
//# sourceMappingURL=objec-task.js.map