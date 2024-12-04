import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    
    const {createUser, setUser, updateProfileUser } = useContext(AuthContext);

    const navigate = useNavigate();
     const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        
        createUser(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            console.log(user);
            updateProfileUser({
                displayName: name,
                photoURL : photo
            })
            .then(() => {
                navigate('/')
            })

        })
        .catch(error => {
            console.log(error.message);
        })
     }
    return (
        <div className='flex justify-center items-end mt-8'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Register;