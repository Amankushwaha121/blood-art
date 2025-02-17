import React, { useState } from 'react';
import LogIn from './LogIn';
import BloodDonorForm from './BloodDonorForm'; // Import the BloodDonorForm component

export default function HomePage() {
  const [showLogIn, setShowLogIn] = useState(false); // State for LogIn form
  const [showDonorForm, setShowDonorForm] = useState(false); // State for DonorForm

  const handleLogInClick = () => {
    setShowLogIn(!showLogIn); // Toggle LogIn form
  };

  const handleDonateClick = () => {
    setShowDonorForm(true); // Show DonorForm
  };

  const handleBackToHome = () => {
    setShowDonorForm(false); // Hide DonorForm and return to HomePage
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-red-600 p-4 text-white fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-3xl font-bold">Blood-ART</div>
            <ul className="flex space-x-5 " >
              <li><a href="#home"    className="hover:text-gray-400">Home</a></li>
              <li><a href="#about"   className="hover:text-gray-400">About</a></li>
              <li><a href="#donate"  className="hover:text-gray-400">Donate</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
              <li >
                <button
                  onClick={handleLogInClick}
                  className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white" 
                >
                  Log-In/Sign Up
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Show LogIn Section */}
        {showLogIn && <LogIn onClose={() => setShowLogIn(false)} />}

        {/* Show DonorForm Section */}
        {showDonorForm ? (
          <BloodDonorForm onBackToHome={handleBackToHome} />
        ) : (
          <>
            {/* Hero Section */}
            <section id="home" className="flex-grow flex items-center justify-center bg-red-600 text-white py-20">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Donate Blood, Save Lives</h1>
                <p className="text-xl mb-8">Your donation can make a difference. Join us in our mission to save lives.</p>
                <button 
                  onClick={handleDonateClick}
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition duration-600 transform hover:scale-105"
                >
                  Donate And Receive
                </button>
              </div>
            </section>

            {/* About Section */}


            <section id="about" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                  {/* Image Section */}
                  <div className="lg:w-1/2 w-full overflow-hidden rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                      alt="Blood Donation" 
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-red-600 mb-8 ">
                      About Us
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed mb-8">
                      We are a non-profit organization dedicated to connecting blood donors with those in need. Our mission is to ensure that no one suffers due to a lack of blood. Join us in our cause and help save lives today.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-600 transform hover:scale-105 " onClick={handleDonateClick}>
                      Join Us Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Donate Section */}
            <section id="donate" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-12">How to Donate</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1: Register */}
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-red-100">
                    <div className="mb-6">
                      <svg className="w-12 h-12 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Step 1: Register</h3>
                    <p className="text-gray-600">Sign up as a donor and provide your details.</p>
                  </div>

                  {/* Step 2: Find a Drive */}
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-red-100" >
                    <div className="mb-6">
                      <svg className="w-12 h-12 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Step 2: Find a Drive</h3>
                    <p className="text-gray-600">Locate a blood drive near you.</p>
                  </div>

                  {/* Step 3: Donate */}
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border hover:border-red-100">
                    <div className="mb-6">
                      <svg className="w-12 h-12 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Step 3: Donate</h3>
                    <p className="text-gray-600">Visit the drive and donate blood.</p>
                  </div>
                </div>
              </div>
            </section>

             {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-6">Contact Us</h2>
                <p className="text-gray-700 text-xl text-center max-w-2xl mx-auto mb-8">
                  If you have any questions or need more information, feel free to reach out to us. We are here to help!
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  {/* Email Button */}
                   <a href="mailto:amankumar210405@gmail.com" 
                    className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105">
                    Email Us
                  </a>
                  {/* Phone Button */}
                  <a href="tel:+91 6202429196" 
                    className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105">
                    Call Us
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Footer */}
        <footer className="bg-red-600 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Blood Donor. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}