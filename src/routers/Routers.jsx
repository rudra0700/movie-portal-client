import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch("http://localhost:5000/movies/featured")
        }, 
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/addMovie',
          element: <AddMovie></AddMovie>
        },
        {
          path: '/allMovies',
          element: <AllMovies></AllMovies>
        }
      ]
    },
  ]);

  export default router;