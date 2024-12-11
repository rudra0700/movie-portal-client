import React, { useContext } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MovieTable = ({movie, allMovies, setAllMovies}) => {
    const {user} = useContext(AuthContext)
    const {_id , moviePoster, title, rating, duration, genra, releaseYear} = movie;
    const navigate = useNavigate()

    const handleDelete = (id) => {
        fetch(`https://movie-portal-server-theta.vercel.app/movies/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              toast.success("Movie Deleted Successfully")
              const remaining = allMovies.filter(movie => movie._id !== id);
              setAllMovies(remaining)
              navigate('/allMovies')
            }
        })
    }

    const addToFavourite = (moviePoster, title, duration, rating, genra, releaseYear, email) => {
        const favourite = {moviePoster, title, duration, rating, genra, releaseYear, email};
         fetch("https://movie-portal-server-theta.vercel.app/favourites", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(favourite)
         })
         .then(res => res.json())
         .then(data => {
            if(data.insertedId){
              toast.success("Movie added in favouite list");
              navigate(`/myFavourites/${user?.email}`)

            }
         })
    }
    return (
        <div className="card bg-base-100">
        <figure>
          <img
            src={moviePoster}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary rounded-full">{rating}</div>
          </h2>
           <p className='text-left'>Genre: {genra}</p>
           <p className='text-left'>Duration: {duration} min</p>
           <p className='text-left'>Release Year: {releaseYear}</p>
          <div className="card-actions justify-end">
            <FaTrashAlt className='text-2xl' onClick={() => handleDelete(_id)}/>
            <FaHeart className='text-2xl text-red-600' onClick={() => addToFavourite(moviePoster, title, duration, rating, genra, releaseYear, user?.email)}/>
          </div>
        </div>
      </div>
    );
};

export default MovieTable;