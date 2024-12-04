import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../components/FeaturedMovies';

const AllMovies = () => {
    const data = useLoaderData();
     const [allMovies, setAllMovies] = useState(data);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allMovies.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>)
                }
            </div>
        </div>
    );
};

export default AllMovies;