import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Intro from "../pages/intro/Intro";
import Detail from "../pages/detail/Detail";
import Introcude from "../pages/introduce/Introcude";
import PostContainer from "../pages/posts/PostContainer";
import Post from "../pages/posts/Post";
import Layout from "../pages/layout/Layout";
import Join from "../pages/join/Join";
import Login from "../pages/login/Login";
import MyPage from "../pages/mypage/MyPage";
import NotFound from "../pages/error/NotFound";
import Tanstack01 from "../pages/tanstack/Tanstack01";
import Tanstack02 from "../pages/tanstack/Tanstack02";
import Tanstack03 from "../pages/tanstack/Tanstack03";
import Tanstack04 from "../pages/tanstack/Tanstack04";
import Tanstack05 from "../pages/tanstack/Tanstack05";
import Zustand01 from "../zustand/Zustand01";
import ZustandLayout from "../zustand/ZustandLayout";
import Zustand02 from "../zustand/Zustand02";
import Zustand03 from "../zustand/Zustand03";

/**router.js의 역할은 애플리케이션의 URL 경로(path)에 따라 보여줄 컴포넌트(페이지)를 연결 관리 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "/posts",
        element: <PostContainer />
      },
      {
        path: "/posts/read/:id",
        element: <Post />
      },
      {
        path: "/join",
        element: <Join />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/my-page",
        element: <MyPage />
      },
    ]
  },
  {
    path: "/intro",
    element: <Intro />
  },
  {
    path: "/detail",
    element: <Detail />
  },
  {
    path: "/introduce",
    element: <Introcude />
  },
  {
    path: "/tanstack01",
    element: <Tanstack01 />
  },
  {
    path: "/tanstack02",
    element: <Tanstack02 />
  },
  {
    path: "/tanstack03",
    element: <Tanstack03 />
  },
  {
    path: "/tanstack04",
    element: <Tanstack04 />
  },
  {
    path: "/tanstack05",
    element: <Tanstack05 />
  },
  {
    path: "/Zustand",
    element: <ZustandLayout />,
    children: [
      {
        path: "01",
        element: <Zustand01 />
      },
      {
        path: "02",
        element: <Zustand02 />
      }
    ]
  },
  {
    path: "/zustand/03",
    element: <Zustand03 />
  },
  {
    path: "*",
    element: <NotFound />
  },
])

export default router

