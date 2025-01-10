import { useSelector } from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector(state => state.user);
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
              <button className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full text-white text-xs hover:bg-green-600 transition">
                +
              </button>
              
            </div>
          </div>

          {/* Profile Form Fields */}
          <form className="space-y-4">
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

        </div>
      </main>
    </div>
  )
}

export default Profile ;