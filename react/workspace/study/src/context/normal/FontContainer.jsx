import React from 'react';
import FontParent from './FontParent';
import { FontProvider } from './FontContext';

/**React에서 전역적으로 폰트 관련 설정 관리
Context API를 사용하여 font Context.js와 font Container.jsx (Provider 역할을 하는 컴포넌트) 파일 구현 */
const FontContainer = () => {
  return (
    <FontProvider>
      <FontParent />
    </FontProvider>
  );
};

export default FontContainer;