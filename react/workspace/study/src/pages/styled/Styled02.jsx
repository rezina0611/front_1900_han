import React from 'react';
import S from './style';

const Styled02 = () => {
  return (
    <S.ImageWrapper>
      <img src={`${process.env.PUBLIC_URL}/assets/images/styled/cat.jpg`} alt='옛날에 취한 고양이' />
    </S.ImageWrapper>
      
    // <div className='ImageWrapper'>
    //   <img src={`${process.env.PUBLIC_URL}/assets/images/styled/cat.jpg`} alt='옛날에 취한 고양이' />
    // </div>
  );
};

export default Styled02;