import React from 'react'
import '../Components/styles/LoginRegister.css'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="card">
        <div className='bg-[--card-bg-dark]'>
          <p className='text-center mx-10 my-32'>Hello Welcome to our organiztion</p>
        </div>
        <div className="card-body">
           <div className="card-header">Login</div>
          <div className='input-box'>
            <label htmlFor="username"></label>
            <input type="text" name="username" id=""   className="input-field" placeholder='username'/>
          </div>
          <div className="input-box">
            <label htmlFor="password"></label>
            <input type="password" name="password" id="" placeholder='password' className="input-field"/>
          </div>
          <div className='button'>
            <input type="submit" value="Login" className="" />
          </div>
          <div className='flex gap-2 text-xs  mt-4 text-[--text-color-dark] '>Haven't an account?
            <div>
              <Link to="/register" className='underline hover:text-[--hover-text]'>Register now</Link>
            </div>
          </div>
          
        </div>
      </div>
        
    </div>
  )
}

export default Login
