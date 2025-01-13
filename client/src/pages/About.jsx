import { FaReact, FaNodeJs, FaLock, FaDatabase, FaGithub, FaRocket } from "react-icons/fa";
import { SiMongodb, SiRedux, SiFirebase, SiJsonwebtokens, SiTailwindcss } from "react-icons/si";

const About = () => {
  return(
    <div className="min-h-screen bg-gray-900 text-white">
      

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Secure & Scalable Authentication System
        </h1>
        <p className="text-gray-300 text-lg">
          A full-stack authentication system built with MERN, JWT, Firebase, and Redux Toolkit.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">🔹 Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaLock />} 
            title="Secure Authentication" 
            description="Login with JWT, Firebase, and Google OAuth." 
          />
          <FeatureCard 
            icon={<SiRedux />} 
            title="State Management" 
            description="Manage authentication states using Redux Toolkit." 
          />
          <FeatureCard 
            icon={<FaDatabase />} 
            title="Database Integration" 
            description="Store and manage user data securely with MongoDB." 
          />
          <FeatureCard 
            icon={<SiJsonwebtokens />} 
            title="Token-Based Authentication" 
            description="Enhance security with JSON Web Tokens (JWT)." 
          />
          <FeatureCard 
            icon={<SiFirebase />} 
            title="Google OAuth" 
            description="Allow users to sign in seamlessly with Google." 
          />
          <FeatureCard 
            icon={<FaRocket />} 
            title="Easy Deployment" 
            description="Deploy your app for free using Render." 
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">🛠️ Tech Stack</h2>
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

      {/* Security Measures */}
      <section className="py-12 bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">🔒 Security Measures</h2>
        <ul className="list-disc text-gray-300 text-lg space-y-3 pl-6">
          <li>🔹 JSON Web Tokens (JWT) for authentication</li>
          <li>🔹 OAuth integration for Google sign-in</li>
          <li>🔹 Role-based authentication and protected routes</li>
          <li>🔹 Secure password hashing with bcrypt</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">⚙️ How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkflowStep number="1️⃣" title="User Registration" description="Users can sign up using email/password or Google OAuth." />
          <WorkflowStep number="2️⃣" title="Token-Based Authentication" description="Upon login, users receive a JWT token for authentication." />
          <WorkflowStep number="3️⃣" title="Secure Profile Management" description="Users can update their username, email, and password securely." />
          <WorkflowStep number="4️⃣" title="Logout & Account Deletion" description="Users can safely log out or delete their account." />
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-12 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">👨‍💻 Meet the Developer</h2>
        <p className="text-gray-300 text-lg">
          Hi, I'm a passionate full-stack developer focused on building secure, scalable applications.  
          Connect with me on GitHub:
        </p>
        <a 
          href="https://github.com/yourgithub" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition"
        >
          <FaGithub className="inline mr-2" /> View on GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-12">
        <p className="text-gray-400">© 2025 Authentication App | Built with MERN Stack</p>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
      <div className="text-4xl mb-4 text-green-400">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

// Workflow Step Component
const WorkflowStep = ({ number, title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold">{number} {title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default About