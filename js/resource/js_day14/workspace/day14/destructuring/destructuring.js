// https://jsonplaceholder.typicode.com/users

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const datas = await response.json()
  const data = await datas[0];

  // 객체의 구조 분해 할당
  const { name, email, userName, id, address } = await data;
  const { city } = await address;
  // console.log(name)
  // console.log(email)
  // console.log(userName)
  // console.log(id)
  // console.log(city)
  // console.log("===========")
  // console.log(data)
}
getUsers()


// 배열의 구조 분해 할당
const arr = [1, 2, 3, 4]
const [one, two, three, four] = arr

console.log(one, two, three, four)