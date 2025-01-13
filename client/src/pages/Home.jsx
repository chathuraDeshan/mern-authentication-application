import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase, FaLock, FaGoogle, FaCogs, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiFirebase, SiJsonwebtokens } from "react-icons/si";

const Home = () => {
  return (
    
      <div className="min-h-screen bg-gray-900 text-white">
        
  
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            Secure & Scalable Authentication System
          </h1>
          <p className="text-gray-300 text-lg px-4">
            A full-stack authentication system built with MERN, JWT, Firebase, and Redux Toolkit.  
            Implement secure login, dynamic profile management, and advanced authentication methods.
          </p>
          <Link to="/sign-up">
            <button className="mt-6 bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition">
              Get Started
            </button>
          </Link>
        </section>
  
        {/* Technology Stack */}
        <section className="py-12 bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 text-5xl">
            <FaReact className="text-blue-400 hover:scale-110 transition" title="React.js" />
            <SiTailwindcss className="text-cyan-400 hover:scale-110 transition" title="Tailwind CSS" />
            <FaNodeJs className="text-green-400 hover:scale-110 transition" title="Node.js" />
            <SiMongodb className="text-green-500 hover:scale-110 transition" title="MongoDB" />
            <SiJsonwebtokens className="text-yellow-400 hover:scale-110 transition" title="JWT Token" />
            <SiFirebase className="text-orange-400 hover:scale-110 transition" title="Firebase" />
            <SiRedux className="text-purple-500 hover:scale-110 transition" title="Redux Toolkit" />
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaLock />} 
              title="Authentication Mastery" 
              description="Secure login with JWT, Firebase, and Google OAuth." 
            />
            <FeatureCard 
              icon={<FaCogs />} 
              title="State Management" 
              description="Effortless global state handling using Redux Toolkit." 
            />
            <FeatureCard 
              icon={<FaRocket />} 
              title="Deployment & Sharing" 
              description="Deploy with Render and showcase your skills to the world." 
            />
            <FeatureCard 
              icon={<FaGoogle />} 
              title="Google OAuth" 
              description="Seamless sign-ins using Google authentication." 
            />
            <FeatureCard 
              icon={<FaDatabase />} 
              title="Master CRUD Operations" 
              description="Create, Read, Update, and Delete using MongoDB." 
            />
            <FeatureCard 
              icon={<FaLock />} 
              title="Profile Security" 
              description="Dual-layered protection on client and backend sides." 
            />
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-center py-6 mt-12">
          <p className="text-gray-400">© 2025 Authentication App | Built with MERN Stack</p>
        </footer>
      </div>
    );
  };
  
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <div className="text-4xl mb-4 text-green-400">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    );
  
}

export default Home