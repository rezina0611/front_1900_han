import React, { useRef, useState } from "react";

// 사용자가 체크박스를 클릭하면 체크한 취미를 화면에 실시간으로 보여준다.
// 사용자가 체크박스를 해제하면 체크한 취미도 화면에서 사라진다.

const CheckBoxRef02 = () => {
  const [hobbies, setHobbies] = useState("")
  const inputRef = useRef([])

  const handleNameChange = () => {
    const hobby = inputRef.current
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(", ")

    setHobbies(hobby)
  }

  return (
    <div>
      <p>{hobbies}</p>
      <div>
        <label>
          <span>미드보기</span><input type="checkbox" value="미드" onChange={handleNameChange}
            name="hobby" ref={(el) => inputRef.current[0] = el}/>
        </label>
        <label>
          <span>음악감상</span><input type="checkbox" value="음악" onChange={handleNameChange}
            name="hobby" ref={(el) => inputRef.current[1] = el}/>
        </label>
        <label>
          <span>운동하기</span><input type="checkbox" value="운동" onChange={handleNameChange}
            name="hobby" ref={(el) => inputRef.current[2] = el}/>
        </label>
      </div>
    </div>
  );
}
export default CheckBoxRef02;