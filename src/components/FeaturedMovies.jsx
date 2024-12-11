import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovies = ({movie}) => {
    const { moviePoster, title, duration, rating, genra, releaseYear, summery} = movie;
    return (
        <div className="card bg-base-100 border-2 border-black px-0 py-0">
        <figure className='border-2 border-black'>
          <img
            src={moviePoster}
            alt="movie-poster" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p className='text-left'>Duration: {duration} min</p>
          <p className='text-left'>Realease Year: {releaseYear}</p>
           <Link className='btn' to={'/movieDetails'}>see Details</Link>
        </div>
      </div>
    );
};

export default FeaturedMovies;