
import img1 from '../image/google.png';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not login with google', error);
    }
  }
  return (
    <button
      type='button'
      onClick={handleGoogleClick}
      className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mt-4"
    >
      <img
        src={img1}
        alt="Google"
        className="w-9 h-6 mr-2"
      />
      CONTINUE WITH GOOGLE
    </button>
  )
}
