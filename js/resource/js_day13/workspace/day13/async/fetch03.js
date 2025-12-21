// https://jsonplaceholder.typicode.com/todos
// async await

// getTitles
// todos에서 title만 5개만 가져오기 (0~4)
// 값으로 가져오기
// 값으로 가져온 데이터를 "제목 : title" 내용으로 변경 출력하기

// const getTitles = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const todos = await response.json();
//   return todos
// }

// getTitles()
//   .then((todos) => todos.slice(0, 5))
//   .then((todos) => todos.map(todo => todo.title))
//   .then((titles) => titles.map((title) => `제목: ${title}`))
//   .then(console.log)
//   .catch(console.err)

// const getTitles2 = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const todos = await response.json();
//   const titles = await todos
//     .slice(0, 5)
//     .map((todo) => todo.title)
//     .map((title) => `제목 ${title}`)
//   console.log(titles)
// }
// getTitles2()


// getComments
// https://jsonplaceholder.typicode.com/comments
// email만 10개만 가져온 후 email에서 아이디만 가져오기
// [Eliseo@gardner.biz] -> ["Eliseo", ...]
// 아이디만 출력하기

// 1. 비동기 함수 구현한다. (async 키워드를 함수 앞에 붙이자!)
// 2. 데이터 요청(fetch) 
// 3. fetch함수의 리턴값은 Promise()
// 4. 데이터를 요청하면 요청 객체로 받는다. 나는 JS의 데이터가 필요하다. 
// 즉 JSON 데이터를 JS의 객체로 바꿔주는 문법이 .json()
// 5. Promise()는 성공 시 .then(), 실패 시 .catch()
// 6. async를 붙이면 then 쓰지않고, await 붙여서 받을 수 있음!
// 7. await 키워드가 붙으면 변수에 담을 수 있음!
// 8. 변수에 담아도 다시 사용할 때에는 Promise()!
// 9. 함수 리턴해도 Promise()!
const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  const datas = await response.json() // 배열
  const comments = await datas.slice(0, 10) // 배열
  const emails = await comments.map((comments) => comments.email) // 배열
  const ids = await emails.map((email) => email.split("@")[0]) // 배열
  console.log(ids)
}

getComments()

// getUsers
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// Leanne Graham -> maharG ennaeL
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const datas = await response.json()
  const names = await datas.map((user) => user.name)
  const reversedNames = await names.map((name) => name.split("").reverse().join(""))
  console.log(reversedNames)
}

getUsers()