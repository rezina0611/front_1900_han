import React, { useRef } from 'react';

const Check = () => {
  //아이디, 비밀번호를 버튼을 눌렀을때 유효성 검사
  const expressionRef = useRef([])
  const formRef = useRef()

  const handleNameonClick = () => {
    for(let input of expressionRef.current){
      if(!input.value){
        console.error(`${input.name}의 값이 없습니다.`)
        alert(`${input.name}의 값이 없습니다.`)
        return;
      }
    }
    //데이터 전송~
    formRef.current.submit()
  }

  return (
    <div>
      <form action="" ref={formRef}>
        <div>
          <span>아이디</span>
          <input type="text" ref={(el) => (expressionRef.current[0] = el)} name='id'/>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" ref={(el) => (expressionRef.current[1] = el)} name='pw'/>
        </div>
        <button typen="button" onClick={handleNameonClick}>완료</button>
      </form>
    </div>
  );
};

export default Check;