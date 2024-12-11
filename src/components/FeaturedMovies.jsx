import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovies = ({movie}) => {
    const { moviePoster, title, duration, rating, genra, releaseYear, summery} = movie;
    return (
        <div className="card bg-base-100 border-2 border-black px-0 py-0">
        <figure className='border-2 border-black'>
          <img
            src={moviePoster}
            alt="movie-poster"
            className='' />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold">
             <span className=''>{title}</span>
            <div className="badge badge-secondary ml-2 rounded-full">{rating}</div>
          </h2>
          <p className='text-left ml-14'>Duration: {duration} min</p>
          <p className='text-left ml-14'>Realease Year: {releaseYear}</p>
           <Link className='btn w-2/4 mx-auto rounded-full mt-3 hover:bg-[#E50914] text-white' to={'/movieDetails'}>see Details</Link>
        </div>
      </div>
    );
};

export default FeaturedMovies;