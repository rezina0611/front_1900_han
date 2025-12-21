import React, { useState } from "react";

const Count = () => {

  //상태를 바꾸는 React의 Hook함수
  //cnst [변수, 세터] = useState("초기값")
  const [number, setNumber] = useState(0); // 초기값 0으로 설정

  //리액트 이전의 카운터 구현 방법
  //1. selector -> DOM API
  //2. addEventListener
  //3. +=, -=
  //리액트는 DOM를 쓸수 없다

  const decrease = () => { setNumber(number - 1) }
  const increase = () => { setNumber(number + 1) }

  return (
    <>
      <button id='subtract' onClick={decrease}>-1</button>
      {number}
      <button id='sum' onClick={increase}>+1</button>
    </>
  );
};

export default Count;