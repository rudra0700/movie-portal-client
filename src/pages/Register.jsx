import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    
    const {createUser, setUser, updateProfileUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();

     const handleSubmit = (e) => {
        e.preventDefault();
        setError("")

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if(password.length < 6){
          setError("Length must be at least 6 character")
          return;
         }

         if(!regex.test(password)){
          setError("password must contain at least one uppercase and lowercase");
          return;
       }

        
        createUser(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            updateProfileUser({
                displayName: name,
                photoURL : photo
            })
            .then(() => {
                navigate('/')
            })

        })
        .catch(error => {
            toast.error(error.message);
        })
     }

     const handleGoogleLogin = () =>{
      googleLogin()
      .then(() =>{
          navigate(location?.state ? location?.state.from : '/')
      })
    }
    return (
        <div className='flex justify-center items-end mt-8'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-4xl font-bold text-white text-left ml-8'>Sign Up</h2>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div> 
         <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#E50914] text-white rounded-md">Sign Up</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className='btn w-64 mx-auto rounded-md'>Google login</button>
      {error && <p className='text-red-500'>{error}</p>}
      <p className='ml-10 mt-3'>Already have an account? <Link className='text-blue-700' to={'/login'}>login</Link></p>
    </div>
        </div>
    );
};

export default Register;