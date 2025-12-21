// https://jsonplaceholder.typicode.com/todos
// async await

// getTitles 함수이름
// todos에서 title만 5개만 가져오기 (0~4)
// 값으로 가져오기
// 값으로 가져온 데이터를 "제목 : title" 내용으로 변경 출력하기
// fetch('https://jsonplaceholder.typicode.com/todos')
/**비동기에서 변수를 담고싶으며 await 사용 */

const getTitles2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos = await response.json();
  const titles = await todos
    .slice(0, 5)
    .map((todo) => todo.title)
    .map((title) => `제목 : ${title}`)
  console.log(titles)
}
getTitles2()
/**결과
 *'제목 : delectus aut autem',
  '제목 : quis ut nam facilis et officia qui',
  '제목 :  fugiat veniam minus',
  '제목 : et porro tempora',
  '제목 : laboriosam mollitia et enim quasi adipisci quia provident illum'
 */

/*const getTitles = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos') 
  const todos = await response.json()  
  return todos
}
getTitles() 
.then((todos) => todos.slice(0, 5))   
.then((todos) => todos.map(todo => todo.title))
.then((titles) => titles.map((title) => `제목: ${title}`))
.then(console.log)
.catch(console.error)*/



// getComments 함수이름
// https://jsonplaceholder.typicode.com/comments
// email만 10개만 가져온 후 email에서 아이디만 가져오기
// [Eliseo@gardner.biz] -> ["Eliseo", ...]
// 아이디만 출력하기
const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await response.json();
  const email = await comments.slice(0, 10).map((comment) => comment.email)
  const emailParts = await email.split('@')
  const ids = await emailParts[0]
  console.log(ids)
}
getComments()



// getUsers 함수이름
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// Leanne Graham -> maharG ennaeL
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();
  const names = await users.map((user) => user.name)
  const reversedNames = await names.map((name) => name.split('').reverse().join(''))
  console.log(reversedNames)
}
getUsers()
