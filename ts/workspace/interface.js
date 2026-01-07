"use strict";
// 인터페이스도 타입이다
//type SomeType = {}
Object.defineProperty(exports, "__esModule", { value: true });
const myAnimal = {
    canSpeak: false,
    species: "강아지",
    numberOfLegs: 4
};
const mySnake = {
    canSpeak: true,
    species: "뱀",
    numberOfLegs: 0
};
const introduce = (animal) => {
    for (let key in animal) {
        const k = key;
        console.log(animal[k]);
        //console.log(key)
    }
};
introduce(mySnake);
const myHuman = {
    species: "호모 사피엔스",
    canSpeak: false,
    numberOfLegs: 2,
    age: 6
};
const myMachine = {
    powerlevel: 10,
    material: "plastic"
};
const myUnionVar = {
    age: 10,
    canSpeak: true,
    material: "metal",
    numberOfLegs: 4,
    powerlevel: 2,
    species: "인조인간"
};
const myUnionVar1 = {
    species: "동물",
    canSpeak: true,
    numberOfLegs: 10
};
const numberOrString = "10";
const numberOrString1 = 10;
function myUnionfunc(param) {
    return param;
}
//# sourceMappingURL=interface.js.map