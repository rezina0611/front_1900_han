
// 실습 todos 데이터 중 전체 데이터를 콘솔에 출력
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((Response) => Response.json())
  .then((todos) => console.log(todos))
  .catch(console.log.error)
  

// 실습 todos 데이터 중 completed가 true인 데이터들만 콘솔에 출력
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((todos) => todos.filter((todo) => todo.completed === true))
  .then(console.log)
  .catch(console.error)