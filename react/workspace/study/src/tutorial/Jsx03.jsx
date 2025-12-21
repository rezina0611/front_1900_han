export default function Jsx03() {
  const name = "한정성"
  const age = 47
  const gender = "여성"

  return (
    <>
      {/**Jsx03을 만들고 화면에 출력한다.
       * 이름, 나이, 성별을 적어서 소개글을 적어주세요! */}
      <h2>안녕하세요 저는 {name}입니다. 나이는 {age}, 성별은 {gender}입니다.</h2>
    </>
  )
}