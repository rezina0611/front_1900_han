import React from 'react';

const PropsComponent1 = (props) => {
  console.log(props)
  const name = props.name  // 마침표 접근법
  const age = props[age]   // 대괄호 접근법
  return (
    <>
      {name}님 환영합니다. {age + 1}살이 되시겠네요!
    </>
  );
};

export default PropsComponent1;