import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import MovieTable from './MovieTable';


const MovieDetails = () => {
    const data = useLoaderData();
    const [allMovies, setAllMovies] = useState(data)
    const {user} = useContext(AuthContext)

    return (
        <div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        allMovies.map(movie => <MovieTable key={movie._id} movie={movie} allMovies={allMovies} setAllMovies={setAllMovies}></MovieTable>)
                    }
               </div>
            <Link className='btn bg-[#E50914] text-white' to={'/allMovies'}>See All Movies</Link>
        </div>
    );
};

export default MovieDetails;