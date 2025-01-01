import React from "react";
import GoogleLogo from "../Photos/GoogleLogo.png";
import watch from "../Photos/watch.png";
import Youtubre from "../Photos/Youtubre.png";
import Img from "../Photos/Img.png";

function PlayKoksal() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 py-16 px-6 md:px-16 lg:px-28 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 lg:space-x-16">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-snug">
            Play Koksal Baba Game <br />
            <span className="text-yellow-600">Your Way!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            Download the game on your favorite platform or play directly on the
            web. Start earning $8 as you go and laugh your way to the top!
          </p>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center lg:justify-start">
            {[1, 2, 3, 4].map((_, idx) => (
              <img
                key={idx}
                className="h-14 w-auto transform transition-transform duration-200 hover:scale-110"
                src={GoogleLogo}
                alt="Download Platform Logo"
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-8 mt-8">
            <img
              className="h-20 w-auto transform transition-transform duration-200 hover:scale-105"
              src={watch}
              alt="Watch Trailer"
            />
            <img
              className="h-20 w-auto transform transition-transform duration-200 hover:scale-105"
              src={Youtubre}
              alt="YouTube"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative max-w-full group">
            <div className="relative">
              <img
                className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                src={Img}
                alt="Koksal Baba Game"
              />
              {/* Subtle Fire Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-400 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-50 blur-md"></div>
            </div>
            <div className="absolute -top-10 -right-10 bg-yellow-500 text-blue-900 font-bold text-lg px-4 py-2 rounded-full shadow-lg transform rotate-6">
              New Release
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300 rounded-full blur-2xl opacity-30"></div>
    </section>
  );
}

export default PlayKoksal;
