// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// postTitle만 콘솔에 출력하기
// 1) fetching 후 전체를 console.log로 출력

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

// const getPosts = async ():Promise<Post[]> => {
//   const respone = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const datas = await respone.json()
//   return datas
// }
// getPosts()
//   .then(console.log)  //전체출력


// 제네릭 문법으로 user의 모든 데이터 출력
// https://jsonplaceholder.typicode.com/users

type Users = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
}

const getUsers = async ():Promise<Users> => {
  const respone = await fetch("https://jsonplaceholder.typicode.com/users")
  const user = await respone.json()
  return user
}

getUsers().then(console.log)

