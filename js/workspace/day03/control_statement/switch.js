//심리 테스트, 번호 입력받기
// Q. 당신이 좋아하는 색을 선택하세요.
// 1. 빨간색
// 2. 노란색
// 3. 검은색
// 4. 흰색
// 숫자를 입력받으면 아래 문장을 실행
// 빨간색 : 불같고 열정적이고 적극적이다.
// 노란색 : 발랄하고 밝고 귀엽고 개성있고 착하다.
// 검은색 : 묵묵하고 든든하고 냉철하고 멋지다.
// 흰색: 천사같고 깔끔하고 정리를 좋아하고 배려심이 많다.

let choice = 2
let result = ""
let redMessage = "불같고 열정적이고 적극적이다"
let yellowMessage = "발랄하고 밝고 귀엽고 개성있고 착하다"
let blackMessage = "묵묵하고 든든하고 냉철하고 멋지다"
let whiteMessage = "천사같고 깔끔하고 정리를 좋아하고 배려심이 많다"

switch(choice){
  case 1:
    result = redMessage;
  case 2:
    result = yellowMessage;
    break; 
  case 3:
    result = blackMessage;
    break;
  case 4:
    result = whiteMessage;
    break;
  default:
    result = "1~4번 사이의 숫자를 입력해주세요.";
}