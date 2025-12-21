const promise = new Promise((resolve, reject) => {
  let check = false
  if(check){
    resolve("성공 했음!😎")
  }else{
    reject("실패했음!")
  }
})


// 성공 시 .then()
// 실패 시 .catch()
promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))

