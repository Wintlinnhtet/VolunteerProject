import React from 'react'
import '../components/styles/LoginRegister.css'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'sonner';


const Login = () => {
  const [test,setTest] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email,password
    }
    console.log(payload)
    try {
      const response = await fetch("http://localhost:9000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
                if(data.status==400){
                    toast.error("Wrong Email or Password!")
                    return
                }
      localStorage.setItem("userInfo",JSON.stringify(data?.user))
      localStorage.setItem("userToken",data?.token)
      toast.success(`Welcome ${data?.user?.name}`)
      navigate('/')
      // console.log("Login successful:", data);
      // Redirect or update state as needed
    } catch (error) {
      console.log("Error during login:", error.message);
      toast.error(error.message);
    }
  }
  return (
    <div>
      <div className="card">
        <div className='bg-[--card-bg-dark]'>
          <p className='text-center mx-10 my-32 text-white'>Hello Welcome to our organiztion</p>
        </div>
        <div className="card-body">
           <div className="card-header">Login</div>
          <div className='input-box'>
            <label htmlFor="email"></label>
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} id=""   className="input-field" placeholder='email'/>
          </div>
          <div className="input-box">
            <label htmlFor="password"></label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} id="" placeholder='password' className="input-field"/>
          </div>
          <button className='button' type="submit" onClick={handleLogin}>
            <div  >Login</div>
          </button>
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
