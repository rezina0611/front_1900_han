//if문
// 시험점수가 90점 이상 A등급, 80점 이상 B등급, 70점 이상 C등급, 60점 이상 D등급, 60점 미만 F등급
let score = 65;
let grade = "";

if(score >= 90){
  grade = "A등급"
}else if(score >= 80){
  grade = "B등급";
}else if(score >= 70){
  grade = "C등급";
}else if(score >= 60){
  grade = "D등급";
}else{
  grade = "F등급";
}

console.log(grade)