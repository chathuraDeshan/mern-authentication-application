import React from 'react'
import img1 from '../image/google.png'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col">
      

      {/* Sign-Up Form */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96">
          {/* Tabs */}
          <div className="flex justify-between mb-6">
            <button className="text-white font-semibold text-lg border-b-2 border-green-500">
              <Link to= '/sign-up'>Sign Up</Link>
            </button>
            <button className="text-gray-400 font-semibold text-lg">
              <Link to= '/sign-in'>Sign In</Link>
            </button>
          </div>

          {/* Sign-Up Form */}
          <form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your username"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Create a password"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              SIGN UP
            </button>

            {/* Continue with Google */}
            <button
              type="button"
              className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mt-4"
            >
              <img 
                src= {img1}
                alt="Google"
                className="w-9 h-6 mr-2"
              />
              CONTINUE WITH GOOGLE
            </button>
          </form>

          {/* Footer */}
          <div className=" text-center mt-4">
            <p className="text-sm text-gray-400">
              Have an account? 
              <Link to= '/sign-in' className="text-green-400 hover:underline"> Sign in
              </Link>
            </p>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp