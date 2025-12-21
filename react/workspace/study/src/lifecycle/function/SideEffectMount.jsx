import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {
  const [users, setUsers] = useState([])
  const [id, setId] = useState(1)

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const datas = await response.json()
    return datas
  }
  //마운트가 될때 1번만 실행
  useEffect(() => {
    getUsers()
      .then(setUsers)
  }, [id])

  const handleIdOnClick = () => {
    setId(id + 1)
  }
  console.log(users)
  console.log(id)

  // console.log("리랜더링")
  // console.log(users)
  // const names = users.map(({name}, i) => (
  //   <p key={i}>{name}</p>
  // ))

  return (
    <div>
      {users.name}
      <button onClick={handleIdOnClick}>아이디 +1</button>
    </div>
  );
};

export default SideEffectMount;