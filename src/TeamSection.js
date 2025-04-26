import React from 'react';
import team from './assets/imgs/team.png';

// Single image display, fully responsive
const TeamSection = () => (
  <section className="py-12 sm:py-16 bg-peach">
    <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
      <h2 className="text-3xl sm:text-5xl md:text-7xl text-darkgray font-bold">
        We Follow No Rules, But Own
      </h2>
      <h2 className="text-3xl sm:text-5xl md:text-7xl text-coral font-bold mb-8">
        Responsibilities
      </h2>
    </div>

    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left content */}
      <div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-darkgray font-bold mb-4">
          Meet Our Key Players
        </h3>
        <p className="text-darkgray mb-6">
          Our team of experts drives innovation and excellence. Get to know the visionaries behind our success.
        </p>
      </div>

      {/* Right: Single team image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={team}
          alt="Our Team"
          className="w-64 sm:w-80 md:w-96 lg:w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 text-center mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-darkgray font-bold">
        WFO = WFH
      </h2>
      <h4 className="text-base sm:text-xl md:text-2xl text-darkgray font-medium mt-2">
        We work with the same ease and comfort of home
      </h4>
    </div>
  </section>
);

export default TeamSection;
