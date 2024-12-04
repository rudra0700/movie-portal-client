import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../components/FeaturedMovies';

const Home = () => {
    const data = useLoaderData();
    const [featuredMovies, setFeaturedMovies] = useState(data)
    console.log(featuredMovies);
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   featuredMovies.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>) 
                }
            </div>
        </div>
    );
};

export default Home;