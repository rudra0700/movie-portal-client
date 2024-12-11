import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit } from "react-icons/fa";

const FavouriteMovies = ({favourite, favourites, setFavourites}) => {
    const {_id, moviePoster, title, duration, rating, genra, releaseYear} = favourite;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://movie-portal-server-theta.vercel.app/favourites/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            toast.success("Movie deleted successfully")
            const remaining = favourites.filter(item => item._id !== id);
            setFavourites(remaining)

          }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={moviePoster}
      alt="movie-poster" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary rounded-full">{rating}</div>
    </h2>
    <p className='text-left'>Duration : {duration}</p>
    <p className='text-left'>Genra : {genra}</p>
    <p className='text-left'>Realease Year : {releaseYear}</p>
        
      <div className='flex gap-4'>
          <FaTrashAlt className='text-3xl' onClick={() => handleDelete(_id)}/>
          <Link to={`/updateMovie/${_id}`} className='text-3xl'><FaEdit /></Link>
      </div>
      
  </div>
</div>
        </div>
    );
};

export default FavouriteMovies;