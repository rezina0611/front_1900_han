async function getMyData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json()
  return todos
}

const data = await getMyData()
console.log(data)