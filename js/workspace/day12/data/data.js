console.log(new Date());   //Tue Nov 25 2025 19:34:58 GMT+0900 (한국 표준시)
// getter / setter 
// getter는 객체의 속성(property) 값을 반환하는 메서드
// setter는 객체의 속성(property) 값을 설정, 변경하는 메서드

/**Date객체의 주요 메소드
getFullYear(): 4자리 년도
getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
getDate(): 한 달 내의 날짜(28~31)
getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
getHours(): 0~23사이의 정수
getMinutes(): 0~59사이의 정수
getSeconds(): 0~59사이의 정수
getMilliseconds(): 0~999사이의 정수
getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
setFullYear(year): 년도 저장
setMonth(month): 월 저장
setDate(date): 한 달 내의 날짜 값 지정
setHours(hour): 시간 저장
setMinutes(minute): 분 저장
setSeconds(second): 초 저장
setMilliseconds(ms): 밀리초 저장
setTime(t): 밀리초 단위인 t값으로 시간 저장
 */

const now = new Date();
console.log(now.toLocaleDateString());  //2025. 11. 25.
now.setHours(10)
console.log(now.toLocaleTimeString());  //오전 10:44:19

const date1 = new Date('2025-12-25');
console.log(date1.toLocaleDateString());  //2025. 12. 25.

const date2 = new Data('2025-12-25 10:30:00');
console.log(date2.toLocaleString());  //2025. 12. 25. 오전 10:30:00
console.log(date2.getTime());  //1766461800000
console.log(date2.getHours());  //10
console.log(date2.getMinutes());  //30
console.log(date2.getSeconds());  //0

//리뷰달때 몇초, 방금전, 몇분 참고하세요 
function timeForToday(datetime) {
  const today = new Date();
  const date = new Date(datetime);
  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60)

  if(gap < 1){
    return "방금 전"
  }

  if(gap < 60){
    return `${gap}분 전`
  }

  // 시간 단위
  gap = Math.floor(gap / 60)

  if(gap < 24){
    return `${gap}시간 전`
  }

  gap = Math.floor(gap / 24)

  if(gap < 32) {
    return `${gap}일 전`
  }

  gap = Math.floor(gap / 31)

  if(gap < 13) {
    return `${gap}개월 전`
  }

  gap = Math.floor(gap / 12)

  return `${gap}년 전`

  // console.log("today", today.getTime())
  // console.log("date", date.getTime())
  // console.log("gap", gap)
}
timeForToday('2025-11-25 09:00:00');
