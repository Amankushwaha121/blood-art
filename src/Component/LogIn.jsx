
import React, { useState } from 'react';

// AuthPage Component (Parent Component)
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and SignUp
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

  const toggleAuthMode = () => {
    setIsLogin(!isLogin); // Switch between Login and SignUp
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set user as logged out
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : isLogin ? (
        <LogIn onToggleAuthMode={toggleAuthMode} onLogin={handleLogin} />
      ) : (
        <SignUp onToggleAuthMode={toggleAuthMode} onLogin={handleLogin} />
      )}
    </div>
  );
}

// LogIn Component
function LogIn({ onToggleAuthMode, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', { email, password });
    onLogin(); // Call the onLogin function to set the user as logged in
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-red-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Blood Donor</div>
          <ul className="flex space-x-4 items-center">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#donate" className="hover:text-gray-200">Donate</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Login Form Section */}
      <section className="flex-grow flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Log In</h2> 
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
              />
            </div>
             <button 
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={onToggleAuthMode}
                className="text-red-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// SignUp Component
function SignUp({ onToggleAuthMode, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp Data:', { name, email, password, confirmPassword });
    onLogin(); // Call the onLogin function to set the user as logged in
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-red-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Blood Donor</div>
          <ul className="flex space-x-4 items-center">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#donate" className="hover:text-gray-200">Donate</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* SignUp Form Section */}
      <section className="flex-grow flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Confirm your password"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onToggleAuthMode}
                className="text-red-600 hover:underline"
              >
                Log-In
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// HomePage Component
function HomePage({ onLogout }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-red-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Blood Donor</div>
          <ul className="flex space-x-4 items-center">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#donate" className="hover:text-gray-200">Donate</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            <li>
              <button onClick={onLogout} className="text-white hover:text-gray-200">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Page Content */}
      <section className="flex-grow flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Welcome to Blood-ART</h1>
          <p className="text-gray-700">You are now logged in.</p>
          <div className='m-8'>
          <a href='#home'><button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-600 transform hover:scale-105 ">Continue</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}


