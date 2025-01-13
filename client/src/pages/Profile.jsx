import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
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

              <input
                type='file'
                ref={fileRef}
                hidden
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
              />
              <img
                src={formData.profilePicture || currentUser.profilePicture}
                alt='profile'
                className='h-24 w-24 self-center cursor-pointer rounded-full border-4 border-gray-600 mt-2'
                onClick={() => fileRef.current.click()}
              />
              <p className='text-sm self-center'>
                {imageError ? (
                  <span className='text-red-700'>
                    Error uploading image (file size must be less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span className='text-green-700'>Image uploaded successfully</span>
                ) : (
                  ''
                )}
              </p>
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
                {loading ? 'Loading...' : 'Update'}
              </button>
            </div>
          </form>
          <div className="flex justify-between p-3">
            <span
              onClick={handleDeleteAccount}
              className="text-red-500">Delete Account</span>

            <span
              onClick={handleSignOut}
              className="text-red-500">Sign out</span>
          </div>
          <div>
            <p className="text-red-500 flex justify-center">{error && 'Something went wrong!'}</p>
            <p className="text-green-500 flex justify-center ">{updateSuccess && 'User is updated success'}</p>
          </div>
        </div>
      </main>
    </div>
  )
}


