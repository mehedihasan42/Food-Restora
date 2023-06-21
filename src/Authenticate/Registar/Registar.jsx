import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Registar = () => {

  const {createUser} = useAuth()

  const {register,handleSubmit,watch,formState: { errors },} = useForm()

  const onSubmit = data =>{
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="text-center">
        <h1 className="text-5xl font-bold">Registar now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

        <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body">
                {/* -------------Name------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input
                    {...register("name",{ required: true })}
                type="text" placeholder="name" className="input input-bordered" />
                 {errors.name && <span>This field is required</span>}
            </div>
            {/* ------------------Email------------------ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email",{ required: true })}
                type="email" placeholder="email" className="input input-bordered" />
                 {errors.email && <span>This field is required</span>}
            </div>
            {/* ----------------------New Password------------------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
                {...register("password",{ required: true })}
                type="password" placeholder="new password" className="input input-bordered" />
                 {errors.password && <span>This field is required</span>}
            </div>
            {/* -----------------Confirm Password------------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                 {...register("confirm",{ required: true })}
               type="password" placeholder="confirm password" className="input input-bordered" />
                {errors.confirm && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-orange-500">Login</button>
            </div>
          </form>
          <p>Already have an account?<Link className='text-orange-500' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registar; 