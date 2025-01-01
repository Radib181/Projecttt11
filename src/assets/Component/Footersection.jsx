import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"; // Importing icons
import Eggole from "../Photos/Eggole.jpg"; // Ensure the correct path to the Eggole image
import Logo from "../Photos/Logo.png";

function Footersection() {
  return (
    <section className="py-10  bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 px-6">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-40 h-20 sm:w-56 sm:h-32 cursor-pointer transition-transform transform hover:scale-110"
          />
        </div>

        {/* Rights Reserved Text */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-5xl  font-extrabold text-[#4234FE]">
            All rights reserved
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 transition-transform duration-300"
          >
            <FaTwitter />
          </a>

          {/* Telegram Icon */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl bg-gradient-to-r from-teal-400 to-blue-600 hover:scale-110 transition-transform duration-300"
          >
            <FaTelegramPlane />
          </a>

          {/* Discord Icon */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-110 transition-transform duration-300"
          >
            <FaDiscord />
          </a>

          {/* Eggole Image Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 hover:scale-110 transition-transform duration-300">
            <img
              className="h-10 w-10 rounded-full"
              src={Eggole}
              alt="Eggole"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footersection;
