import React, { useState } from 'react';

const Name = () => {

  const [name, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
  }

  //실습
  //사용자가 입력한 이름을 화면에 출력하기
  return (
    <div>
      {name}
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Name;