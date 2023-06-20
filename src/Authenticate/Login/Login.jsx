import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  
  const [disable,setDisable] = useState(true)
  const {  register,handleSubmit,watch,formState: { errors } } = useForm()

  const captchaRef = useRef(null)
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleValidateCaptcha = () =>{
      const user_captcha_value = captchaRef.current.value;
      if(validateCaptcha(user_captcha_value)){
        setDisable(false)
      }
      else{
        setDisable(true)
      }

  }

  const onSubmit = data =>{
         console.log(data.email,data.password)
  }

  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

        <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email",{ required: true })}
                type="email" placeholder="email" className="input input-bordered" />
                 {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                 {...register("password",{ required: true })}
               type="password" placeholder="password" className="input input-bordered" />
                 {errors.password && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {/* -------------------captcha----------------------- */}
            <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
              </label>
              <input
                 {...register("captach",{ required: true })}
                 placeholder='type the text above'
               type="text" className="input input-bordered" ref={captchaRef} />
                 {errors.captach && <span>This field is required</span>}
                 <button  onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-24">Validate</button>
            </div>
            <div className="form-control mt-6">
              <button disable={disable} type="submit" className="btn bg-orange-500">Login</button>
            </div>
          </form>
          <p>New User?<Link className='text-orange-500' to='/registar'>Registar</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;