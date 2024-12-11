import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const {loginUser, setUser, googleLogin} = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError("")

        const email = e.target.email.value;
        const password = e.target.password.value;
          
        loginUser(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            navigate(location?.state ? location?.state.from : '/')
        })
        .catch(error => {
            setError(error.message);
        })
        
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            navigate(location?.state ? location?.state.from : '/')
        })
      }
    return (
        <div className='flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h2 className='text-4xl font-bold text-white text-left ml-8'>Sign In</h2>
      <form className="card-body"  onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered text-left" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#E50914] text-white rounded-md">Sign In</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className='btn w-64 mx-auto rounded-md'>Google login</button>
      {error && <p className='text-red-500'>{error}</p>}
      <p className='ml-10 mt-3'>New to this website? <Link className='text-blue-700' to={'/register'}>register</Link></p>
    </div>
        </div>
    );
};

export default Login;