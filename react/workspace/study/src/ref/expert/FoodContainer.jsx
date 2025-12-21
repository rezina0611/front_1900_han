import React, { useRef, useState } from "react";

// 심화 실습
// 사용자가 한국 음식과 영어 음식을 입력하고 추가 버튼을 누르면 추가되어 화면에 출력된다.
// 화면에 출력된 음식들은 사용자가 체크박스를 체크하고 삭제버튼을 누르면 삭제한 음식만 삭제된다.


const FoodContainer = () => {
  const korref = useRef([])  
  const engkef = useRef([]) 

  //foods라는 상태(state) 변수를 만들고, 처음 값은 빈 배열([])로
  const [foods, setFoods] = useState([])
  
  const handleAdd = () => {  // 추가 버튼 함수
    // korref가 가리키는 한국 음식 입력창의 값(value)을 가져옵 ex> korFood = '김치찌개'
    // engkef가 가리키는 영어 음식 입력창의 값(value)을 가져옵 ex> engFood = 'Kimchi Stew'
    const korFood = korref.current.value 
    const engFood = engkef.current.value 

    //상태 변경 함수 setFoods를 사용하여 foods 배열에 새로운 음식 객체를 추가
    setFoods([...foods, {kor: korFood, eng: engFood}])
  }

  // 음식 목록을 화면에 출력하기 위한 부분
  const foodList = foods.map(({korFood, engFood}, idx) => {
    <li key={idx}>
      <input type="checkbox" />
      {`${korFood} (${engFood})`}
    </li>
  }) 

  return (
    <div>
      <form action="">
        <div>
          <label>
            <input type='text' 
            placeholder='한국 음식 이름을 입력하세요' ref={korref}/>
          </label>
          <label>
            <input type='text' 
            placeholder='영어 음식 이름을 입력하세요' ref={engkef}/>
          </label>
        </div>
        <button type='button' onClick={handleAdd}>추가</button>
        <button type='button'>삭제</button>
      </form>

      <h3>음식 이름 리스트</h3>
      <ul>
        {foodList}
      </ul>

    </div>
  );
};

export default FoodContainer;