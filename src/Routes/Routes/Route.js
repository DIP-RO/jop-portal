import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ConnectUs from "../../Pages/ConnectUs/ConnectUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/SignUp";
import AllFresherJob from "../../Pages/Home/FresherJob/AllFresherJob";
import About from "../../Pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/contactus",
        element: <ConnectUs></ConnectUs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allfresherjob",
        element: <AllFresherJob></AllFresherJob>,
      },
    ],
  },
]);

export default router;
