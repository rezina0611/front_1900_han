import React from 'react';

const PropsComponent2 = (props) => {
  
  //구조 분해 할당
  const {name, age} = props
  console.log(props)

  return (
    <>
      {name}님 환영합니다. {age + 1}살이 되시겠네요!
    </>
  );
};

export default PropsComponent2;