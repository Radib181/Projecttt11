import React, { useState } from "react";
import Batch1 from "../Photos/Batch1.png";
import Img2 from "../Photos/Img2.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="relative bg-[#4434F8]  py-16 px-6 md:px-16 lg:px-28">
      {/* Title Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center space-x-4">
          <img
            className="w-16 h-16 drop-shadow-lg transform transition-transform hover:scale-110"
            src={Batch1}
            alt="Badge"
          />
          <h1 className="font-extrabold text-yellow-400 text-4xl md:text-5xl lg:text-6xl uppercase">
            About $Koksal Token
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            className="rounded-lg shadow-2xl hover:shadow-yellow-500/50 transition-shadow duration-500 max-w-full"
            src={Img2}
            alt="About Koksal"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="lg:w-1/2 space-y-6 text-white">
          <h2 className="text-yellow-400 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Introducing $Koksal – The Meme Coin for Gamers and Lawn Lovers!
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Built on the lightning-fast Solana blockchain, $KOKSAL offers secure,
            low-cost transactions, making it perfect for both gamers and crypto enthusiasts.
          </p>

          {/* Conditional Content */}
          {showMore && (
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                With zero transaction taxes and a focus on community-driven growth, $KOKSAL is more than just a meme coin—it's a revolutionary cryptocurrency for those who appreciate fun, gaming, and the exciting world of blockchain technology.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Join our presale with 30% of the total supply available for early supporters.
                Backed by a clear roadmap and an enthusiastic community, $KOKSAL is ready to redefine the gaming and cryptocurrency experience. Don't miss out on the future of gaming and crypto rewards!
              </p>
            </div>
          )}

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap space-x-6 mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Join Presale
            </button>
            <button
              onClick={handleLearnMore}
              className="bg-white/10 hover:bg-white/20 text-yellow-400 font-bold py-3 px-8 rounded-lg shadow-lg border border-yellow-400 transition-transform transform hover:scale-105"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
