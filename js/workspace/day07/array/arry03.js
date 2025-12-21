//.indexOf(찾을 값): 값을 해당 Array에서 찾은 뒤 인덱스 번호를 반환(리턴), 없으면 -1
console.log([10,20,30,40].indexOf(40))

//.find(callback) : 조건식을 만족하는 값을 리턴한다
//.find((value) => { return 반드시 리턴 필요. (조건식) })
console.log([10,20,30,40].find((data) => data % 3 === 0))

// .some(callback)
// .some(() => {}): 배열의 값들 중 하나라도 조건식을 만족하면 true, 아니면 false
console.log([10, 20, 30, 40].some((data) => data % 7 === 0))

