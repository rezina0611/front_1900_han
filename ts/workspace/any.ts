let someValue:any = 10

someValue = 11
someValue = "a"
someValue = true

//https://jsonplaceholder.typicode.com/posts
//데이터 확인용으로 개발단계에서만 사용한다
const getPost = async ():Promise<any> => {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts")
  const datas = await respone.json()
  return datas
}