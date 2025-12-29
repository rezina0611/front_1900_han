import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Intro = () => {

  //console.log(useSearchParams())
  const [searchParams] = useSearchParams()
  const name = (searchParams.get("name"))

  return (
    <div>
      인트로 페이지!😍😂😍
      <p>{name}님 환영합니다.</p>
    </div>
  );
};

export default Intro;