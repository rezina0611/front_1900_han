import React from 'react';
import LuckyComponent from './LuckyComponent';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import UnLuckyComponent from './UnLuckyComponent';

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장가능"
// 성인이 아니라면 "입장불가"
// 성인과 관계없이 age가 짝수라면 "당첨"을 출력
// 모든 값을 변수선언, 조건식 삼항연산자도 변수선언을 사용하여 작성
const age = 21;
//const [lucky, unLucky, pass, notPass] = ["당첨", "꽝", "입장 가능", "입장 불가"]

// 컴포넌트 분리 실습
//const luckyComponent = <p>{lucky}</p>;
//const unLuckyComponent = <p>{unLucky}</p>;
//const passComponent = <p>{pass}</p>;
//const notPassComponent = <p>{notPass}</p>;

const isAdult = age > 19
const isLucky = age % 2 === 0
const enter = isAdult ? <PassComponent /> : <NotPassComponent />
const win = isLucky ? <LuckyComponent/> : <UnLuckyComponent />

const Jsx05 = () => {
  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;

// const Jsx05 = () => {
//   const age = 20
//   return (
//     <>
//       {age >= 19 ? "입장가능" : "입장불가"}
//       <br />
//       {age % 2 === 0 ? "당첨" : ""}
//     </>
//   );
// };

// export default Jsx05;