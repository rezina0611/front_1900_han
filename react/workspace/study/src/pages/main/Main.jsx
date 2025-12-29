import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const name = "홍길동"

  return (
    <div>
      메인페이지!😂😍
      <div>
        {/**a 사용하지 마라!  ctrl+shift+R => 캐시까지 새로고침 */}
        <Link to={`/intro?name=${name}`}>인트로페이지 이동</Link>
        {/* <Link to={"/Detail"}>이동</Link> */}
      </div>
    </div>
  );
};

export default Main;