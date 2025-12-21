//실습
//1. 이름, 국어점수, 수학점수, 영어점수, 과학점수
//변수 또는 상수로 임의로 입력
//2. 총점과 평균 구하기
//3. 평균이 60점이상이면 합격, 평균이 60점 미만이면 불합격, 0이면 재평가 출력

let name = "한정성"
let kor = 80
let math = 70
let eng = 90
let sci = 60
let grade = "";

let total = kor + math + eng + sci 
let avg = total / 4 

if(avg >= 60){
  grade ="합격"
}else if(avg < 60){
  grade ="불합격"
}else if(avg === 0){
  grade ="재평가"
}

//템플릿 리터럴(ES6) ``
//console.log("이름:" + name + " " + grade);
let res = `이름: ${name}은 총점 : ${total} 평균 : ${avg} 학점 : ${grade}`
console.log(res);
