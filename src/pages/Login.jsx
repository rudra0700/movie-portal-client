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
            console.log(res);
            const user = res.user;
            setUser(user);
            navigate(location?.state ? location?.state.from : '/')
        })
        .catch(error => {
            console.log(error.message);
        })
        
    }

    const handleGooglLogin = () =>{
        googleLogin()
        .then(() =>{
            navigate(location?.state ? location?.state.from : '/')
        })
      }
    return (
        <div className='flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body"  onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGooglLogin} className='btn'>Google login</button>
      {error && <p className='text-red-500'>{error}</p>}
      <p className='ml-10 mt-3'>New to this website? <Link className='text-blue-700 font-medium' to={'/register'}>register</Link></p>
    </div>
        </div>
    );
};

export default Login;