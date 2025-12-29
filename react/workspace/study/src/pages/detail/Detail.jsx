import React from 'react';

const Detail = () => {
  return (
    <div>
      {/**method='get' 파라미터를 쿼리스트링으로 전송한다. */}
      <form action="/intro" method='get'>
        <div>
          <span>이름:</span>
          <input type='text' name="name"/>
        </div>
        <div>
          <span>나이:</span>
          <input type='text' name="age"/>
        </div>
        <button>양식제출</button>
      </form>
    </div>
  );
};

export default Detail;