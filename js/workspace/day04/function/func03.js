//함수 -> 뭐 할래
//즉시 실행 함수()()  익명함수
(() => {
  console.log("출력")
})();


(function(){
  console.log("출력")
})();

(function() { // 즉시 실행 함수
    let a = 1;
    let b = 2;
    let c = a + b;
    console.log(c);
})();
let a = 2; // 즉시 실행 함수의 변수 a와 충돌이 발생하지 않음



