// Speakers.js

import React, { useState } from 'react';
import './Speakers.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import Font Awesome arrows
import { speakersData } from './SpeakersData';

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSpeaker = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakersData.length); // Loop back to the first speaker
  };

  const handlePrevSpeaker = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + speakersData.length) % speakersData.length); // Loop back to the last speaker
  };

  const numCardsToDisplay = 3; // Number of cards to display at a time, can adjust based on screen size

  // Calculate which speakers to display based on the current index and how many cards to show
  const visibleSpeakers = [
    ...speakersData.slice(currentIndex, currentIndex + numCardsToDisplay),
    ...speakersData.slice(0, Math.max(0, (currentIndex + numCardsToDisplay) - speakersData.length))
  ];
  

  return (
    <section className="speakers-section">
      <div className="speakers-container">
        {/* Left Arrow */}
        <div className="arrow left-arrow" onClick={handlePrevSpeaker}>
          <FaArrowLeft />
        </div>

        <div className="cards-container">
          {visibleSpeakers.map(({ id, name, graduationYear, company, summary, image }) => (
            <div className="speaker-card" key={id}>
              <div className="speaker-image">
                <img src={image} alt={name} className="speaker-img" />
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{name}</h3>
                <p className="graduation-year">{graduationYear}</p>
                <p className="company">SWE at {company}</p>
                <p className="summary">{summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div className="arrow right-arrow" onClick={handleNextSpeaker}>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Speakers;
