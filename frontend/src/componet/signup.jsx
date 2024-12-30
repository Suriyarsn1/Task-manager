import { useState } from "react"
import axios from "axios"
function Signup()
{
const [name,setName]=useState("")
const [newEmail,setNewEmail]=useState("")
const [newPass,setNewPass]=useState("")

function handlesignup(){
 axios.post("http://localhost:5000/signup",{name:name,newEmail:newEmail,newPass:newPass}).then((data)=>{
    if(data.data==true)
    {
        alert("Signup Sucessfully Click to Sign-In")
    }
 })
}

    return (<> <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center sm:text-3xl mb-6">
            Create Your Account
          </h2>
       
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input onChange={(e)=>setName(e.target.value)} value={name}
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input onChange={(e)=>setNewEmail(e.target.value)} value={newEmail}
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input onChange={(e)=>setNewPass(e.target.value)} value={newPass}
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Create a password"
              />
            </div>
            {/* Confirm Password Field */}
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit" onClick={handlesignup}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
         
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div></>)
}export default Signup