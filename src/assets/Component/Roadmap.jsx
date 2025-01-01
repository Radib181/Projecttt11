import React, { useState, useEffect } from 'react';
import Roadmapimg from "../Photos/Roadmapimg.png";

function Roadmap() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-28 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all hover:text-yellow-400">
          Our Roadmap -- Journey of $KOKSAL
        </h1>
        <h4 className="text-gray-700 text-lg md:text-xl mx-auto max-w-3xl">
          From launch to global domination, our roadmap ensures steady growth and exciting milestones for both players and investors. Here's what you can expect:
        </h4>
      </div>

      {/* Roadmap Image Section with Dynamic Glow */}
      <div className="relative flex justify-center mb-12">
        <div
          className="relative w-full"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <img
            className="w-full rounded-lg transition-transform duration-500"
            src={Roadmapimg}
            alt="Roadmap"
            style={{
              transform: hovering ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hovering ? '0 12px 24px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          />
          {/* Glowing light effect */}
          <div
            className="absolute rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-40 pointer-events-none"
            style={{
              left: `${mousePosition.x - 150}px`,
              top: `${mousePosition.y - 150}px`,
              width: '300px',
              height: '300px',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.3s ease-out',
              zIndex: -1,
            }}
          ></div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Join us on this exciting journey as we revolutionize the gaming and crypto world. The best is yet to come!
        </p>
        <button className="bg-yellow-500 text-black font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110">
          Join the Revolution
        </button>
      </div>
    </section>
  );
}

export default Roadmap;
