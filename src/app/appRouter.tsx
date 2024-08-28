import { createBrowserRouter } from "react-router-dom";
import { MainPage, LoginPage, MyPage, SignupPage, TeamPage } from "../pages";

export const AppRouter = () =>

  createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    // {
      // element: <MainLayout />, 
      // children: [
        {
          path: "/mypage",
          element: <MyPage />,
        },
        {path: "/signup",
          element: <SignupPage/>
        },
        {
          path: "/teampage",
          element: <TeamPage />,
        },
      // ],
    // },
  ])