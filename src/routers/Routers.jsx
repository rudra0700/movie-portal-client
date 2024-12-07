import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";
import MovieDetails from "../components/MovieDetails";
import MyFavourties from "../pages/MyFavourties";
import ErrorPage from "../components/ErrorPage";
import UpdateMovie from "../pages/UpdateMovie";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
        },
        {
          path: '/allMovies',
          element: <AllMovies></AllMovies>,
          loader : () => fetch("http://localhost:5000/movies")
        },
        {
          path: '/movieDetails',
          element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
          loader : () => fetch("http://localhost:5000/movies")
        },
        {
          path: '/myFavourites/:email',
          element: <PrivateRoute><MyFavourties></MyFavourties></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/favourites/${params.email}`) 
        },
        {
          path: '/updateMovie/:id',
          element: <UpdateMovie></UpdateMovie>,
          loader: ({params}) => fetch(`http://localhost:5000/fav/${params.id}`)
        }
      ]
    },
  ]);

  export default router;