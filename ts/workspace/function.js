"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function implicitReturnFunc() {
    return 12345;
}
let implResultl = implicitReturnFunc();
const implicitReturnFunc2 = () => {
    return 10 + "a";
};
let implResult2 = implicitReturnFunc2();
// 설명형 함수
function explicitReturnFunc() {
    return false;
}
const fun1 = explicitReturnFunc;
const fun2 = explicitReturnFunc();
const explicitReturnFunc2 = () => {
    return "some value";
};
const fun3 = explicitReturnFunc2;
const fun4 = explicitReturnFunc2();
// 매개변수
function funcWithParams(x, y, z) {
    return x + y + z;
}
const fun5 = funcWithParams(10, 20, 10);
//화살표 매개변수
const funcWithParams2 = (x, z, y) => {
    return x + y + z;
};
const fun6 = funcWithParams2(10, 30, String(30));
// 옵셔널 ?
const funcWithOptional = (x, y, z) => {
    //검증 
    if (y === undefined) {
        return x;
    }
    if (z === undefined) {
        return x + y;
    }
    return x + y + z;
};
console.log(funcWithOptional(10));
console.log(funcWithOptional(10, 20));
console.log(funcWithOptional(10, 30, 40));
const funcWithParams3 = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};
let result = funcWithParams3(10, 20, 30);
//# sourceMappingURL=function.js.map