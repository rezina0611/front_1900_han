// 테마 관련 스타일 파일
// UI/UX 가이드에 정의된 값을 정의하는 파일

const theme = {};
  theme.PALETTE = {
    primary : {
      main : '#ffd159',
      sub: '#fff4d8'
    },
    secondary: "#f1ebf5",
    white: "#fff",
    gray: {
      100: "#f1ebf5",
      200: "#aea8b2",
      300: "#605866"
    },
    error: "#eb6144",
    background: {
      white: "#eee",
      gray: "#f1ebf5",
      black: "#333"
    }
  }

  theme.FONT_SIZE = {
    h1: "55px",
    h2: "40px",
    h3: "30px",
    h4: "21px",
    h5: "18px",
    h6: "16px",
    h7: "13px",
    h8: "11px",
    h9: "8px"
  }

  theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    bold: "bold",
  }

  theme.FONT_LINE = {
    h1: "75px",
    h2: "55px",
    h3: "41px",
    h4: "29px",
    h5: "25px",
    h6: "22px",
    h7: "17px",
  }

export default theme;