import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import Home from "../component/Home";
import Login from "../component/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
      ]
    },
  ]);

  export default router;