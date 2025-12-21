import React from 'react';
import S from './style';

// 아이콘 또는 이미지 3장을 가져와서 레이아웃 완성시키기
const Steyle03 = () => {
  return (
    <div>
      <h1>태그</h1>
      <p>태그</p>
      <S.ImageWrapper>
        <S.IconWrapper>
          <S.Img
            width={"100px"}
            src={`${process.env.PUBLIC_URL}/assets/images/styled/icon01.png`} alt='아이콘' />
          <S.Img
            width={"200px"}
            src={`${process.env.PUBLIC_URL}/assets/images/styled/icon02.png`} alt='아이콘' />
          <S.ImgBg
            width={"300px"}
            height={"300px"}
            alt='아이콘' />
        </S.IconWrapper>
      </S.ImageWrapper>
    </div>
  );
};

export default Steyle03;