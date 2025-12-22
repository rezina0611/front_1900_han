import React, { useContext } from 'react';
import FontChild from './FontChild';
import FontContext from './FontContext';

// 실습!
// 사용자가 글자크기를 입력하고 엔터를 누르면,
// 글자크기를 변경한다.
// 입력예시) 100px
const FontParent = () => {

  console.log(useContext(FontContext))
  const {state, actions} = useContext(FontContext)
  const {fontSize} = state
  const {setFontSize} = actions

  const handleFontSizeOnKeyDown = (e) => {
    if(e.key === "Enter") {
      setFontSize(e.target.value)
    }
  }
  return (
    <div>
      {/* <FontChild /> */}
      <h2 style={{fontSize}}>context의 글자 크기를 적용시키기!😎</h2>
      <input type="text" onKeyDown={handleFontSizeOnKeyDown} />
    </div>
  );
};

export default FontParent;