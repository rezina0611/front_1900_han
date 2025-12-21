import React, { useState } from 'react';

const Hobby = () => {
  // 사용자에게 취미를 입력 받고 화면에 실시간으로 출력한다.
  // 취미가 축구라면, 글자 크기를 50px로 바꾼다
  // 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.
  /**onChange 네이밍 규칙
   * handle[값]Change
   */

  const [hobby, setHobby] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setHobby(value)

    // 스타일 초기화
    setSize("");
    setColor("");
    
    // 조건 스타일 적용
    if(hobby === '축구'){
      setSize({fontSize: "50px"})
    }
    else if(hobby === '농구'){
      setColor({color: "blue"})
    }
  }
  
  return (
    <div>
      <h2 style={{color:color, fontSize:size}}>{hobby}</h2>
      <input type='text' onChange={handleChange} placeholder='취미를 입력해주세요'/>
    </div>
  );
};

export default Hobby;