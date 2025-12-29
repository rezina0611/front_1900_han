import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Introcude = () => {
  const [searchParmas] = useSearchParams()
  const name = searchParmas.get("name")
  const age = searchParmas.get("age")

  console.log(name)
  console.log(age)
  return (
    <div>
      introduce 페이지!
      <p>{name}님의 나이는 {age}살, 만 나이는 {age - 1}살</p>
    </div>
  );
};

export default Introcude;