import styled from "styled-components";
import { flexCenter, flexCenterColumn, flexColumn, h1Bold, h3Regular } from "../../styles/common";
import { fadeIn } from "../../keyframes/keyframes";
import { media } from "../../styles/breakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const S = {}

  S.Wrapper = styled.form`
    ${flexColumn}
    width: 200px;
  `

  S.InputWrap = styled.div`
    ${flexColumn}
  `
  S.Img = styled.img`
    width: ${({width}) => width};
  `
  S.ImgBg = styled.div`
    width: ${({width}) => width};
    height: ${(height) => height};
    /* /: public 경로 */
    background-image: url("/assets/images/styled/icon03.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `
  S.ImageWrapper = styled.div`
    width: 800px;
    height: 800px;
    border: solid 1px blue;
    ${flexCenter}
  `
  S.IconWrapper = styled.div`
    ${flexCenterColumn}
  `

  S.Title = styled.p`
    ${h1Bold}
    opacity: 0;
    animation: ${fadeIn} 0.4s ease-in 1s forwards;

    @media ${media.mobile}{
      font-size: 10px;
    }
  `

  S.SubTitle = styled.p`
    ${h3Regular}
  `

  // 아이콘 스타일링
  S.CommentIcon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: blue;
  `

  // S.ImgBg = styled.div`
  //   width: ${({width}) => width};
  //   height: ${({height}) => height};
  //   /**public 경로 */
  //   background-image: url("/");
  //   background-repeat: no-repeat;
  //   background-position: center;
  // `

  // //Styled02
  // S.Img = styled.img`
  //   width: 100px;
  // `

  // //Styled02
  // S.ImageWrapper = styled.div`
  //   width: 400px;
  //   height: 400px;
  //   border: 1px solid blue;
  // `

  // //Styled01
  // S.Wrapper = styled.form`
  //   display: flex;
  //   flex-direction: column;
  // `
  // S.Inputwrap = styled.div`
  //   display: flex;
  //   flex-direction: column;
  // `

export default S;