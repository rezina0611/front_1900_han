import { createContext, useState } from "react";

export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(['누렁이', '점박이', '얼룩이'])

  // 1번 실습: 동물을 추가하고 삭제하는 메서드 구현하기

  const insert = (name) => {
    // 기존 배열에 새로운 이름을 추가한 새로운 배열 생성
  }

  const remove = (idx) => {
    // 선택한 이름을 제외한 나머지로만 새로운 배열 생성
  }

  const value = {
    state: {animals: animals},
    actions: {insert: insert, remove: remove}
  }
  
  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}

