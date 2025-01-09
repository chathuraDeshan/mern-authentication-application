import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Header = () => {
    const {currentUser} = useSelector(state => state.user);
    return (
        <header className="bg-yellow-400 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or App Name */}
                <Link to='/'>
                    <h1 className="text-2xl font-bold text-white tracking-wide">
                        Authentication App
                    </h1>
                </Link>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-6 text-white font-medium">
                        <Link to='/'>
                            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
                                Home
                            </li>
                        </Link>

                        <Link to='/about'>
                            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
                                About
                            </li>
                        </Link>

                        <Link to='/profile'>
                            {currentUser ? (
                                <img src={currentUser.profilePicture} alt='profile' 
                                className='h-8 w-8 rounded-full object-cover' />
                            ) : (
                                <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
                                Sign In
                                </li>
                            )}
                            
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header