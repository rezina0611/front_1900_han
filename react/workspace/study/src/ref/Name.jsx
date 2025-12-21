import React, { useState } from 'react';
/**레퍼런스 - useRef는 저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook이다. 
   여기서 Ref는 reference, 즉 참조를 뜻한다.
   사용자가 이름을 입력하고 완료버튼을 누르면 이름 뒤에 "님"을 붙인다.
   완료 버튼을 여러번 눌러도 님자가 한 번만 붙을 수 있도록 수정하기
 */
const Name = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  const handleNameChange = (e) => { 
    setName(e.target.value) 
    setCount(0)
  }
  const handleNameonClick = (e) => { 
    //setName(name + '님')
    setCount(count + 1)
    if(!(count > 0)){
      if(name.includes("님")){
        setName(name + name.slice(name.length - 1, -1).replaceAll("님", "") + "님")
      }
    }else{
      setName(name + "님")
    }
  }

  return (
    <div>
      <input type='text' 
        placeholder='이름을 입력하세요'
        onChange={handleNameChange}
      />
      <p>{name}</p>
      <button onClick={handleNameonClick}>완료 버튼</button>
    </div>
  );
};

export default Name;