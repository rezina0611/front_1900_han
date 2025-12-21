//옵셔널
const movies = [
  {
    name: "체인소맨",
    price: "15000",
    detail : {
      time : '20251125',
      actor: "모름"
    }
  },
  {
    name: "위키드",
    price: "15000",
    detail : {
      time : '20251225',
      actor: '녹색'
    }
  },
  {
    name: "컨저링",
    price: "13000",
    detail : {
      time : '20240104',
      ghost: true
    }
  },
]

// actor만 모두 콘솔에 출력하기
console.log("--- for 루프 사용 ---");
for(let i = 0; i < movies.length; i++){
  console.log(movies[i].detail.actor)
}

console.log("--- forEach 사용 ---");
movies.forEach((movie) => {
  console.log(movie.detail.actor)
});

// actor만 모두 콘솔에 출력하기
movies.forEach(({detail}) => { console.log(detail?.actor ?? "익명배우") })
movies.forEach(({detail}) => { console.log(detail?.actor || "익명배우") })

//?? 병합연산자 : null 또는 undefined 일 때 대체값 지정
//?. 옵셔널 체이닝 : 앞의 값이 null 또는 undefined 일 때 undefined 반환
//위 두개를 조합해서 안전하게 접근 가능
//위 코드를 옵셔널 체이닝과 병합 연산자를 사용하여 안전하게 출력

