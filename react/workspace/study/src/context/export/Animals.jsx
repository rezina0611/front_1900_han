import React from 'react';

// 2번 실습 : AnimalsContext에 저장된 동물 세마리를 버튼으로 출력하기
// input에 동물을 입력 후 엔터를 누르면 동물 버튼이 추가된다
// 동물 버튼을 클릭하면 해당 버튼이 삭제된다
// 추가, 삭제는 Context에서 제공하는 insert(), remove()를 사용해야 한다.

const Animals = () => {

  return (
    <div>
      <input type='text' />
    </div>
  );
};

export default Animals;