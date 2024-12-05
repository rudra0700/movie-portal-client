import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateMovie = () => {
    const singleMovie = useLoaderData();
     const { _id , moviePoster, title, duration, rating, genra, releaseYear} = singleMovie;
  
   
   

     const  addMovie = (e) => {
         e.preventDefault();
 
         const form = e.target;
         const moviePoster = form.moviePoster.value;
         const title = form.title.value;
         const duration = form.duration.value;
         const rating = form.rating.value;
         const genra = form.genra.value;
         const releaseYear = form.releaseYear.value
       
 
 
 
 
         if(title.length < 2){
             alert("minimum have to  2 character");
             return;
         }
 
         if(duration < 60){
             alert("duration must be above  60 min");
             return
         }
         
       
          
         const newMovie = {_id , moviePoster, title, duration, rating, genra, releaseYear}
 
        fetch(`http://localhost:5000/fav/${_id}`, {
         method: "PATCH",
         headers: {
             "content-type" : "application/json"
         },
         body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
        })
 
 
     }
    return (
        <div className='flex justify-center items-center mt-8'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
   <form className="card-body" onSubmit={addMovie}>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Movie Poster</span>
       </label>
       <input type="url" placeholder="movie-poster" defaultValue={moviePoster} name='moviePoster' className="input input-bordered" required />
     </div>
      <div className="form-control">
       <label className="label">
         <span className="label-text">Title</span>
       </label>
       <input type="text" placeholder="title" name='title' defaultValue={title} className="input input-bordered" required />
     </div>  
      <div className="form-control">
       <label className="label">
         <span className="label-text">Genra</span>
       </label>
          <select className="input input-bordered " name="genra" id="day" defaultValue={genra}>
             <option value="comedy">Comedy</option>
             <option value="horror">Horror</option>
             <option value="action">Action</option>
             <option value="drama">Drama</option>
             <option value="romance">Romance</option>
             <option value="science-fiction">Science Fiction</option>
             <option value="fantasy">Fantasy</option>
           </select>
     </div> 
     
      
     <div className="form-control">
       <label className="label">
         <span className="label-text">Duration</span>
       </label>
       <input type="number" placeholder="duration" name='duration' defaultValue={duration} className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Release Year</span>
       </label>
       <select className="input input-bordered " name="releaseYear" defaultValue={releaseYear} id="day">
             <option value="2000">2000</option>
             <option value="2001">2001</option>
             <option value="2002">2002</option>
             <option value="2003">2003</option>
             <option value="2004">2004</option>
             <option value="2005">2005</option>
             <option value="2006">2006</option>
             <option value="2007">2007</option>
             <option value="2008">2008</option>
             <option value="2009">2009</option>
             <option value="2010">2010</option>
             <option value="2011">2011</option>
             <option value="2012">2012</option>
             <option value="2013">2013</option>
             <option value="2014">2014</option>
             <option value="2015">2015</option>
             <option value="2016">2016</option>
             <option value="2017">2017</option>
             <option value="2018">2018</option>
             <option value="2019">2019</option>
             <option value="2020">2020</option>
             <option value="2021">2022</option>
             <option value="2021">2023</option>
             <option value="2023">2024</option>
             <option value="2025">2025</option>
           </select>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Rating</span>
       </label>
       <input type="text" placeholder="rating" name='rating' defaultValue={rating} className="input input-bordered" required />
     </div>
   
     <div className="form-control mt-6">
       <button className="btn btn-primary">Update Movie</button>
     </div>
   </form>
 </div>
     </div>
    );
};

export default UpdateMovie;