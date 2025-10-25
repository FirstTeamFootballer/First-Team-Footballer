import React from "react";
import "./index.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "./assets/logo.jpg";


function App() {
  return (
    <div className="app-background flex flex-col justify-between min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-black bg-opacity-60 text-white">
        <div className="md:ml-6">
<img
  src={logo}
  alt="I.R Tactics Logo"
  className="ml-6"
  style={{
    height: "90px",      // 👈 postage-stamp size
    width: "90px",
    objectFit: "contain", // keeps it proportional
    display: "inline-block",
    verticalAlign: "middle",
marginTop: "-12px", // 👈 moves logo slightly up

  }}
/>



</div>


        <div className="flex gap-8 md:mr-6">
          <a href="#home" className="text-white text-lg font-medium hover:text-green-400 transition">
            Home
          </a>
          <a href="#teams" className="text-white text-lg font-medium hover:text-green-400 transition">
            Game
          </a>
          <a href="#fixtures" className="text-white text-lg font-medium hover:text-green-400 transition">
            Academy
          </a>
          <a href="#contact" className="text-white text-lg font-medium hover:text-green-400 transition">
            Contact
          </a>
        </div>
      </nav>

     {/* Hero Section */}
<main
  className="flex flex-col justify-center items-center text-center flex-grow px-6 bg-black bg-opacity-40 py-10 relative"
  style={{ marginTop: "-4vh" }} // moves up slightly
>
  <h1
  className="hero-text text-white font-extrabold mb-4 drop-shadow-2xl tracking-wide leading-none"
  style={{
    fontSize: "4rem",      // change this to adjust size if you want (e.g. "6rem")
    lineHeight: "1",
    maxWidth: "90vw",
    wordWrap: "break-word",
    marginTop: "-280px",    // 👈 moves text up on all screens (~2cm)
  }}
>
  Welcome to First Team Footballer
</h1>




</main>


      {/* Footer */}
     <footer className="bg-black bg-opacity-60 py-3 flex flex-col items-center space-y-3 fade-in-footer">
  <div className="social-icons flex space-x-8 text-[1.8rem]">
    <a
      href="https://www.facebook.com/profile.php?id=61581997703444"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:scale-110 transition-transform duration-300"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.instagram.com/firstteamfootballer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:scale-110 transition-transform duration-300"
    >
      <FaInstagram />
    </a>
    <a
      href="https://x.com/1teamfootballer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-500 hover:scale-110 transition-transform duration-300"
    >
      <FaTwitter />
    </a>
  </div>
  <p className="text-white text-sm text-center">
    © 2025 First Team Footballer. All rights reserved.
  </p>
</footer>

    </div>
  );
}

export default App;



























