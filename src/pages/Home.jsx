import React, { useState } from 'react';
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../components/FeaturedMovies';
import { FaPlayCircle } from "react-icons/fa";

const Home = () => {
    const data = useLoaderData();
    const [featuredMovies, setFeaturedMovies] = useState(data)
    console.log(featuredMovies);
    return (
        <div>
            <Banner></Banner>
            <h3 className='text-3xl font-bold mt-5 text-left ml-8'>Featured Movies</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   featuredMovies.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>) 
                }
            </div>
            <h3 className='text-3xl font-bold text-left mb-5'>Playing now on</h3> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
                 <div>
                   <img src="https://i.ibb.co.com/6mw8Sbd/ghost-show.jpg" alt="movie-poster" />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>Ghost Show</p>
                        <p className='text-left text-sm'>2024</p>
                     </div>
                 </div>
                 <div>
                   <img src="https://i.ibb.co.com/mXWyK6f/burb-patrol.jpg" alt="movie-poster" />
                   <div className='mt-2'>
                        <p className='text-left text-sm'>Burb Patrol</p>
                        <p className='text-left text-sm'>2021</p>
                     </div>
                 </div>
                 <div>
                   <img src="https://i.ibb.co.com/NFTs06p/wise-guy.jpg" alt="movie-poster" />
                   <div className='mt-2'>
                        <p className='text-left text-sm'>Wise Guy</p>
                        <p className='text-left text-sm'>1987</p>
                    </div>
                 </div>
                 <div>
                   <img src="https://i.ibb.co.com/rfx4JZr/playhouse.jpg" alt="movie-poster" />
                   <div className='mt-2'>
                        <p className='text-left text-sm'>Pee Wees Playhouse</p>
                        <p className='text-left text-sm'>1986</p>
                    </div>
                 </div>
                 <div>
                   <img src="https://i.ibb.co.com/CtdB6LR/hunger.jpg" alt="movie-poster" />
                   <div className='mt-2'>
                        <p className='text-left text-sm'>Hunger</p>
                        <p className='text-left text-sm'>1997</p>
                    </div>
                 </div>
                 <div>
                    <img src="https://i.ibb.co.com/mzrrkyw/wild-cat.jpg" alt="movie-poster" />
                    <div className='mt-2'>
                        <p className='text-left text-sm'>Wild Cat</p>
                        <p className='text-left text-sm'>2002</p>
                    </div>

                 </div>
            </div>

            <div className='flex gap-3 items-center mt-20'>
                 <FaPlayCircle className='text-6xl text-red-600'/>
                 <div className='text-left'>
                    <h3 className='text-2xl font-bold tracking-widest'>PREMIERE</h3>
                    <p>Watch new movies at home, every friday</p>
                 </div>
            </div>
             
             <div className='flex justify-between items-center mt-10 mb-3'>
                 <div>
                    <h3 className='text-3xl font-bold mt-5 text-left'>Premiers</h3>
                    <p className='text-left text-sm'>Brand new release every Friday</p>
                 </div> 
                 <Link className='text-red-600' to={'/premiere'}>See All</Link>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
                 <div>
                    <img src="https://i.ibb.co.com/86xBgxb/beekeper.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>The BeeKeeper</p>
                        <p className='text-left text-sm'>English</p>
                     </div>
                 </div> <div>
                    <img src="https://i.ibb.co.com/qpjZQK7/cotton-Tail.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>CottonTail</p>
                        <p className='text-left text-sm'>English</p>
                     </div>
                 </div> <div>
                    <img src="https://i.ibb.co.com/JRSKNDP/gumastan.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>Gumastan</p>
                        <p className='text-left text-sm'>Telegu</p>
                     </div>
                 </div> <div>
                    <img src="https://i.ibb.co.com/KFRqxzK/thekku-vedakku.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>Thekku Vedakku</p>
                        <p className='text-left text-sm'>Telegu</p>
                     </div>
                 </div> <div>
                    <img src="https://i.ibb.co.com/4FdrZvs/the-crow.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>The Crow</p>
                        <p className='text-left text-sm'>English</p>
                     </div>
                 </div> <div>
                    <img src="https://i.ibb.co.com/hYM7Rfc/dancing-village.jpg" alt="" className='w-full lg:w-52' />
                     <div className='mt-2'>
                        <p className='text-left text-sm'>Dancing Village</p>
                        <p className='text-left text-sm'>Indonesian</p>
                     </div>
                 </div>
                 
                
             </div>

        </div>
    );
};

export default Home;