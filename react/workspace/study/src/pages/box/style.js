import styled from 'styled-components';

const S = {}

S.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 308px;

  /* 
    &: 자가 선택자
    자기 자신을 선택하는 선택자
    */
    /* & > div {
      width: 100px;
      height: 100px;
      background-color: orange;
    }

    & #box {

    }

    & .box {

    } */
`
S.Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  //color: #fff;
  color: ${(props) => props.color === 'yellow' ? '#000' : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
`

export default S