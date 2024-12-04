import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const MovieDetails = () => {
    const data = useLoaderData();
    const [allMovies, setAllMovies] = useState(data)
     

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
    return (
        <div>
               {
                allMovies.map(movie => <div key={movie._id} className='flex justify-between items-center space-y-10'>
                    <img src={movie?.moviePoster} alt="" className='w-20' />
                     <p>{movie?.title}</p>
                     <p>{movie?.releaseYear}</p>
                     <p>{movie?.genra}</p>
                     <p>{movie?.rating}</p>
                     <div className='space-x-2'>
                        <button className='btn' onClick={() => handleDelete(movie._id)}>Delete</button>
                        <button className='btn'>Favourite</button>
                     </div>
                     
                </div>)
               }
            <Link className='btn' to={'/allMovies'}>See All Movies</Link>
        </div>
    );
};

export default MovieDetails;