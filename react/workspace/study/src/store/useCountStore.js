import { create } from "zustand";
import { combine } from "zustand/middleware";

const useCountStore = create(
  combine(
    {
      count: 0
    }, // 전역 상태
    (set) => ({
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }) // setter
  )
)

export default useCountStore;