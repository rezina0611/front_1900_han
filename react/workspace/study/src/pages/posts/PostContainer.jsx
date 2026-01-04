import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostContainer = () => {
  //https://jsonplaceholder.typicode.com/posts
  //화면에 타이틀만 모두 출력하기

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas = await response.json()
    setPosts(datas)
    }

    getPosts()
  }, [])
  
  const titles = posts.map(({id, title}, i) => {
    return (
      <li key={i}>
        <Link to={`/posts/read/${id}`}>{title}</Link>
      </li>
    )
  })

  return (
    <div>
      <h2>PostContainer</h2>
      <ul>
        {titles}
      </ul>
      
    </div>
  );
};

export default PostContainer;