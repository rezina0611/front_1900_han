import React, { useState } from 'react';

const Name2 = () => {
  const [name, setName] = useState("")
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const nameRef = useRef();
  const handleNameonClick = () => {
    console.log(nameRef.current.innerText + "님")
  }
  
  return (
    <div>
      <input type='text' 
        placeholder='이름을 입력하세요'
        onChange={handleNameChange}
      />
      <p ref={nameRef}>{name}</p>
      <button onClick={handleNameonClick}>완료 버튼</button>
    </div>
  );
};

export default Name2;