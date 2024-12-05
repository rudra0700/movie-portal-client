import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const MovieDetails = () => {
    const data = useLoaderData();
    const [allMovies, setAllMovies] = useState(data)
    const {user} = useContext(AuthContext)
     

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/movies/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = allMovies.filter(movie => movie._id !== id);
            setAllMovies(remaining)
        })
    }

    const addToFavourite = (moviePoster, title, duration, rating, genra, releaseYear, email) => {
        const favourite = {moviePoster, title, duration, rating, genra, releaseYear, email};
         fetch("http://localhost:5000/favourites", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(favourite)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
    }
    return (
        <div>
               {
                allMovies.map(movie => <div key={movie._id} className='flex justify-between items-center space-y-10'>
                    <img src={movie?.moviePoster} alt="" className='w-20' />
                     <p>{movie?.title}</p>
                     <p>{movie?.releaseYear}</p>
                     <p>{movie?.genra}</p>
                     <p>{movie?.duration}</p>
                     <p>{movie?.rating}</p>
                     <div className='space-x-2'>
                        <button className='btn' onClick={() => handleDelete(movie._id)}>Delete</button>
                        <button className='btn' onClick={() => addToFavourite(movie?.moviePoster, movie?.title, movie?.duration, movie?.rating, movie?.genra, movie?.releaseYear, user?.email)}>Favourite</button>
                     </div>
                     
                </div>)
               }
            <Link className='btn' to={'/allMovies'}>See All Movies</Link>
        </div>
    );
};

export default MovieDetails;