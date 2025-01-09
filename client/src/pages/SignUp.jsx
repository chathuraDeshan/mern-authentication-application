import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navegate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  };

const handleSubmit = async (e) => {
  e.preventDefault(); // using this if click the submit button not the refresh page

  try{
    setLoading(true);
    const res = await fetch(
      '/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
    const data = await res.json();
    setLoading(false);
    if (data.success === false) {
      setError(true);
      return;
    }
    
    setError(false);

    navegate('/sign-in');

  } catch(error) {
    setLoading(false);
    setError(false);
  }
  
  
  
  
};
  
  return (
    <div className="min-h-screen bg-green-200 flex flex-col">
      

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
          <form 
            onSubmit={handleSubmit}
            className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                id="username"
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
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
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                onChange={handleChange}
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
                className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Create a password"
                onChange={handleChange}
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              {loading ? 'LOADING...' : 'SIGN UP'}
            </button>

            {/* Continue with Google */}
            <OAuth/>  
          </form>

          {/* Footer */}
          <div className=" text-center mt-4">
            <p className='text-red-500'>{error && '* Something went wrong'}</p>
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