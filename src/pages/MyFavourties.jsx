import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FavouriteMovies from '../components/FavouriteMovies';

const MyFavourties = () => {
    const data = useLoaderData();
    const [favourites, setFavourites] = useState(data)
    
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {
                favourites.map(favourite => <FavouriteMovies key={favourite._id} favourite={favourite} favourites={favourites} setFavourites={setFavourites}></FavouriteMovies>)
              }
           </div>
        </div>
    );
};

export default MyFavourties;