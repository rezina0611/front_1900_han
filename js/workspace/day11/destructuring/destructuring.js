/**
 * 구조분해 할당(destructuring)
   - 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다. 
   배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.
   https://jsonplaceholder.typicode.com/users
   소스 에러 발생 다시 보기
*/

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


// 배열 구조분해 할당 예시
const arr = [1, 2, 3, 4, 5];
const [one, two, three, four] = arr;

console.log(one, two, three, four);