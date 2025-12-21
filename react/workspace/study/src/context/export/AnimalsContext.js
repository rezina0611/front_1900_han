import { createContext, useState } from "react";

export const AnimalsContext = createContext({
  state: {animals: []},
  action: {insert: () => {}, remove: () => {}}
})

export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(['누렁이', '점박이', '얼룩이'])
  // 1번 실습
  // 동물을 추가하고 삭제하는 메서드 구현하기
  const insert = {}

  const remove = {}

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

