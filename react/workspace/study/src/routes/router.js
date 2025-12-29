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
    path: "*",
    element: <NotFound />
  },
])

export default router

