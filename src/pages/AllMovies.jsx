import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../components/FeaturedMovies';

const AllMovies = () => {
    const data = useLoaderData();
     const [allMovies, setAllMovies] = useState(data);
     const [search, setSearch] = useState("");

     useEffect(() => {
        fetch(`https://movie-portal-server-theta.vercel.app/movies?searchParams=${search}`)
        .then(res => res.json())
        .then(data => {
          setAllMovies(data);
        })
      }, [search])

      console.log(search);

    return (
        <div>
               <div className="w-[400px] mx-auto mb-4">
                    <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="search"
                    className="input input-bordered w-full"
                    required
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allMovies.map(movie => <FeaturedMovies key={movie._id} movie={movie}></FeaturedMovies>)
                }
            </div>
        </div>
    );
};

export default AllMovies;