// https://jsonplaceholder.typicode.com/

// 데이터를 요청할 주소 
// fetch("URL")
// const posts = fetch("http://localhost:10000/posts")
//   .then((res) => res.json())
//   .then((posts) => posts)
//   .catch((error) => console.log(error))

// console.log(posts)


// http://localhost:10000/posts 요청
// posts중에서 제목만 콘솔에 출력

fetch("http://localhost:10000/posts")
  .then((response) => response.json())
  .then((posts) => posts.map((post) => post.title))
  .then((titles) => titles.forEach(title => console.log(title)))
  .catch((error) => console.log(error))