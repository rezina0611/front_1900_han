import React, { useRef, useState } from "react";

const CheckBoxRef = () => {
  const [hobbies, setHobbies] = useState("")
  const inputRef = useRef([])

  const handleNameonClick = () => {
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
          <span>미드보기</span><input type="checkbox" value="미드"
            name="hobby" ref={(el) => inputRef.current[0] = el}/>
        </label>
        <label>
          <span>음악감상</span><input type="checkbox" value="음악"
            name="hobby" ref={(el) => inputRef.current[1] = el}/>
        </label>
        <label>
          <span>운동하기</span><input type="checkbox" value="운동"
            name="hobby" ref={(el) => inputRef.current[2] = el}/>
        </label>
      </div>
      <button type='button' onClick={handleNameonClick}>취미 확인하기😍</button>
    </div>
  );
};

export default CheckBoxRef;