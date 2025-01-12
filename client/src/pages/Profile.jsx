import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState, } from "react";
import { useDispatch } from "react-redux";

import { updateUserStart,updateUserFailure,updateUserSuccess } from "../redux/user/userSlice";


const Profile = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  const {currentUser, loading, error} = useSelector(state => state.user);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  
  return (
    <div className="min-h-screen bg-green-200 flex flex-col">
     

      {/* Profile Form */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96">
          {/* Profile Heading */}
          <h2 className="text-center text-2xl font-bold mb-4">Profile</h2>

          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
          
            <div className="relative">
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-600"
              />
              <input type="file" ref={fileRef} hidden accept="image/*"/>
              <button
              onClick={() => fileRef.current.click()} 
              className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full text-white text-xs hover:bg-green-600 transition">
                +
              </button>
              
            </div>
          </div>

          {/* Profile Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="username">
                Username
              </label>
              <input
                defaultValue={currentUser.username}
                type="text"
                id="username"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                placeholder="Your Username"
                onChange={handleChange}
                
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                defaultValue={currentUser.email}
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                placeholder="Your Email"
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
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                placeholder="New Password"
                onChange={handleChange}
                
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center p-3  ">
              {/* Update Button */}
              <button
                type="submit"
                className=" bg-green-500 text-white py-2 px-24 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Update
              </button>
              </div>
          </form>
          <div className="flex justify-between p-3">
            <span className="text-red-500">Delete Account</span>
            <span className="text-red-500">Sign out</span>
          </div>
          {/* <div>
            <p className="text-red-500 mt-5">{error && 'Something went wrong!'}</p>
            <p className="text-green-500 mt-5">{updateSuccess && 'User is updated success'}</p>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Profile ;