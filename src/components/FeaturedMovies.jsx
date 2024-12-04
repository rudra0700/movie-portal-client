import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovies = ({movie}) => {
    const { moviePoster, title, duration, rating, genra, releaseYear, summery} = movie;
    return (
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
          <p>Duration: {duration} min</p>
          <p>Realease Year: {releaseYear}</p>
          <p>{summery}</p>
           <Link className='btn' to={'/movieDetails'}>see Details</Link>
        </div>
      </div>
    );
};

export default FeaturedMovies;