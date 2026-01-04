import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getPosts } from '../../api/posts/getPosts';

//select
// 선택함수(select)를 사용하면 가져온 데이터를 변형(선택)을 할수 있습니다.
// 쿼리 함수가 반환하는 데이터로 인수로 받아 선택 함수에서 처리하고 반환하면 최종데이터가 됩니다.

const Tanstack04 = () => {

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['posts', 'body'],
    queryFn: getPosts,
    select: (posts) => posts.map((post) => post.body),
    staleTime: 1000 * 60 * 60
  })

  const bodyList = data?.map((body, i) => (
    <li key={i} style={{padding:'0 10px'}}>{body}</li>
  ))

  return (
    <div>
      <ul>
        {bodyList}
      </ul>
    </div>
  );
};

export default Tanstack04;