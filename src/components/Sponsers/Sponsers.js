// Sponsers.js
import React, { useState } from 'react';
import './Sponsers.css'; // Import the CSS
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the left and right arrows
import { sponsorsData } from './SponsersData';

const Sponsers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorsData.length); // Loop back to the first sponsor
  };

  const handlePrevSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsorsData.length) % sponsorsData.length); // Loop back to the last sponsor
  };

  const numCardsToDisplay = 4; // Number of sponsors to display at a time

  // Calculate which sponsors to display based on the current index and how many cards to show
  // const visibleSponsors = sponsorsData.slice(currentIndex, currentIndex + numCardsToDisplay);
  const visibleSponsors = [
    ...sponsorsData.slice(currentIndex, currentIndex + numCardsToDisplay),
    ...sponsorsData.slice(0, Math.max(0, (currentIndex + numCardsToDisplay) - sponsorsData.length))
  ];

  return (
    <section id="sponsers-section" className="sponsers-section">
      <div className= "title"> Our Sponsers</div>
      <div className="sponsers-container">

        <div className="cards-container">
          {visibleSponsors.map(({ id, name, logo }) => (
            <div className="sponsor-card" key={id}>
              <img src={logo} alt={name} className="sponsor-logo" />
              <p className="sponsor-name">{name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsers;
