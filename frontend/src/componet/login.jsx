import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login()
{
 const [email,setEmail]=useState("")
 const [pass,setPass]=useState("")
const navigate=useNavigate()

 function handlelogin(){
     axios.post("http://localhost:5000/login",{email:email,pass:pass}).then(function(data){
        console.log(data)
        if(data.data==true)
        {
             navigate("/dashboard")
        }else
        {
           alert("Signup Please!! OR Email Password Invalid")
        }
     })
 }


 


    return (<> <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center sm:text-3xl mb-6">
            Welcome Back
          </h2>
        
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email}
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input onChange={(e)=>setPass(e.target.value)} value={pass}
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit" onClick={handlelogin}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
         
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div></>)
}export default Login