import React from 'react';
import { Link } from 'react-router-dom';

const FavouriteMovies = ({favourite, favourites, setFavourites}) => {
    const {_id, moviePoster, title, duration, rating, genra, releaseYear} = favourite;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/favourites/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = favourites.filter(item => item._id !== id);
          setFavourites(remaining)
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
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>Duration : {duration}</p>
    <p>Genra : {genra}</p>
    <p>Realease Year : {releaseYear}</p>
      <button className='btn' onClick={() => handleDelete(_id)}>Delete Favourite</button>
      <Link className='btn' to={`/updateMovie/${_id}`}>Update Favourite</Link>
  </div>
</div>
        </div>
    );
};

export default FavouriteMovies;