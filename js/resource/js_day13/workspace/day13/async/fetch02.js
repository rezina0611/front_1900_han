// todos 데이터 중 completed가 true인 데이터들만 콘솔에 출력
// const todos = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((todos) => todos.filter((todo) => todo.completed))
//   .then((todos) => todos)
//   // .then(console.log)
//   .catch(console.error)

// console.log(todos)

// async - await 문법으로 변환
// 함수이름: getTodos
const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json()
  return todos
}

// global scope await(Node v18)
const todos = await getTodos()
const titles = todos.map((todo) => todo.title)
console.log(titles)
