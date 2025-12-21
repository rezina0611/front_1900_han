//웹 서버의 통신

/**fatch() 패치   4
 * axios() 라이버리  6
 * https://jsonplaceholder.typicode.com/
 */

//데이터를 요청할 주소
//fetch("URL")
const posts = fetch("http://localhost:10000/posts")
  .then((res) => res.json())
  .then((posts) => posts)
  .catch((error) => console.log(error))

console.log(posts)

// http://localhost:10000/posts 요청
// 실습 posts중에서 제목만 콘솔에 출력
const posts2 = fetch("http://localhost:10000/posts")
  .then(response => response.json())  // 응답을 JSON 객체로 파싱하여 새로운 프로미스 반환
  .then((posts) => posts.map((post) => post.title))
  .then((titles) => titles.forEach(title =>console.log(title)))
  .catch((error) => console.log(error))

