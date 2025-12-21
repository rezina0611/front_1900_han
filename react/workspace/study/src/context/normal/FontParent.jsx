import React, { useContext, useState } from 'react';
import FontChild from './FontChild';

// 실습!
// 사용자가 글자크기를 입력하고 엔터를 누르면,
// 글자크기를 변경한다.
// 입력예시) 100px
const FontParent = () => {


  return (
    <div>
      <FontChild />
      
    </div>
  );
};

export default FontParent;