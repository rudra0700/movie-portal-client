import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const AddMovie = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
   

    const  addMovie = (e) => {
        e.preventDefault();

        const form = e.target;
        const moviePoster = form.moviePoster.value;
        const title = form.title.value;
        const duration = form.duration.value;
        const rating = form.rating.value;
        const genra = form.genra.value;
        const releaseYear = form.releaseYear.value
        const summery = form.summery.value;
        const email = user.email;




        if(title.length < 2){
            toast.warning("minimum have to  2 character");
            return;
        }

        if(duration < 60){
            toast.warning("duration must be above  60 min");
            return
        }
        
        if(summery.length < 10){
            toast.warning("summery should be at least 10 characters");
            return;
        }
         
        const newMovie = {moviePoster, title, duration, rating, genra, releaseYear, summery, email}

       fetch("https://movie-portal-server-theta.vercel.app/movies", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newMovie)
       })
       .then(res => res.json())
       .then(data => {
          if(data.insertedId){
            toast.success("Movie added successfully");
            navigate('/')
          }
       })


    }
    return (
    <div>
    <h2 className='text-3xl font-bold text-white mt-5 mb-10'>Add Movie</h2>
    <form onSubmit={addMovie}>
        <div className='flex flex-col md:flex-row gap-5 form-control'>
            <input type="url" placeholder="movie poster" className="input input-bordered w-full" name='moviePoster' required/>
            <input type="text" placeholder="title" className="input input-bordered w-full" name='title' required/>
        </div>

        <div className='flex flex-col md:flex-row gap-5 mt-5 form-control'>
            <select className="input input-bordered w-full" name="genra" id="day">
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="fantasy">Fantasy</option>
           </select>
            <input type="number" placeholder="duration" className="input input-bordered w-full" name='duration' required/>
        </div> 

        <div className='flex flex-col md:flex-row gap-5 mt-5 form-control'>
            <select className="input input-bordered w-full" name="releaseYear" id="day">
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
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
      </select>
            <input type="text" placeholder="rating" className="input input-bordered w-full" name='rating' required/>
      </div>

      <div>
            <textarea
                placeholder="write your thought"
                className="textarea textarea-bordered textarea-lg w-full mt-5" rows={5} name='summery' required>
            </textarea>
      </div>

       <div className="form-control mt-6 mb-5">
            <button className="btn bg-[#E50914] text-white rounded-md font-medium">Add Movie</button>
      </div>
    </form>
</div>
    );
};

export default AddMovie;