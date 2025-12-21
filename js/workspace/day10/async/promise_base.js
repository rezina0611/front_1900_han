const promise = new Promise((resolve, reject) => {
  // resolve("성공 했음!")
  // reject("실패했음!")
  let check = true
  if(check){
    resolve("성공 했음!")
  }else{
    reject("실패했음!")
  }
})

//console.log(promise.then)  //비동기
// catch()  실패시
// then()  성공시
promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
