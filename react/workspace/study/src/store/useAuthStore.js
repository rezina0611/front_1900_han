import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    combine(
      {
        isLogin: false,
        currentUser: {
          name: "홍길동"
        },
        previousUrl: "/"
      },  //전역 상태
      (set) => ({
        setIsLogin: (status) => set((state) => ({
          isLogin: status
        })),
        setCurrentUser: (user) => set((state) => ({
          currentUser: user
        })),
        setPreviousUrl: (url) => set((state) => ({
          previousUrl: url
        })),
      })  // setter
    ),
    {
      name: "auth-store"
    }
  )
)

export default useAuthStore;
