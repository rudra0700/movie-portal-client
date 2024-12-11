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
import Premiere from "../pages/Premiere";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch("https://movie-portal-server-theta.vercel.app/movies/featured")
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
          loader : () => fetch("https://movie-portal-server-theta.vercel.app/movies")
        },
        {
          path: '/movieDetails',
          element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
          loader : () => fetch("https://movie-portal-server-theta.vercel.app/movies")
        },
        {
          path: '/myFavourites/:email',
          element: <PrivateRoute><MyFavourties></MyFavourties></PrivateRoute>,
          loader: ({params}) => fetch(`https://movie-portal-server-theta.vercel.app/favourites/${params.email}`) 
        },
        {
          path: '/updateMovie/:id',
          element: <UpdateMovie></UpdateMovie>,
          loader: ({params}) => fetch(`https://movie-portal-server-theta.vercel.app/fav/${params.id}`)
        },
        {
          path: '/premiere',
          element: <Premiere></Premiere>
        }
       
        
      ]
    },
  ]);

  export default router;