import React, { useRef, useState } from "react";

// 3번 실습
// hobbies를 문자열이 아닌 li태그(컴포넌트)로 분리하여 출력한다.

const CheckBoxRef03 = () => {
  const [hobbies, setHobbies] = useState([])
  const inputRef = useRef([])

  const handleHobbiesOnChange = () => {
    const hobbyList = 
      inputRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)

      setHobbies(hobbyList)
  }

  return (
    <div>
      <ul>
        {hobbies.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <div>
        <label>
          <span>미드보기</span><input type="checkbox" value="미드" onChange={handleHobbiesOnChange}
            name="hobby" ref={(el) => inputRef.current[0] = el}/>
        </label>
        <label>
          <span>음악감상</span><input type="checkbox" value="음악" onChange={handleHobbiesOnChange}
            name="hobby" ref={(el) => inputRef.current[1] = el}/>
        </label>
        <label>
          <span>운동하기</span><input type="checkbox" value="운동" onChange={handleHobbiesOnChange}
            name="hobby" ref={(el) => inputRef.current[2] = el}/>
        </label>
        <label>
          <span>사진찍기</span><input type="checkbox" value="사진" onChange={handleHobbiesOnChange}
            name="hobby" ref={(el) => inputRef.current[3] = el}/>
        </label>
      </div>
    </div>
  );
}
export default CheckBoxRef03;