// 글로벌 스타일 정의 파일

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /**스타일 reset */
  ${reset}

  *{
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    color: #131313;
    margin: 0;
    padding: 0;
  }

  body{
    line-height: 1.25;
    font-family: 'Pretendard';
  }

  button{
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  /**폰트 적용  눈누 - 프리텐다드 폰트  public-편집용, web-웹용 static
  cdn 사용시 인터넷이 끝기면 문제가 생기기 때문에 사용하지 말것
  다운로드해서 폰트 적용
  */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:  url(/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: url(/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
  }

`



export default GlobalStyle;