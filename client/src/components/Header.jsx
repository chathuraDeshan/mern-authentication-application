import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-orange-400 to-yellow-500 p-4 shadow-md">
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

                        <Link to='/sign-in'>
                            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
                                Sign In
                            </li>
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header