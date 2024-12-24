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

  const numCardsToDisplay = 1; // Number of cards to display at a time, can adjust based on screen size

  // Calculate which speakers to display based on the current index and how many cards to show
  const visibleSpeakers = [
    ...speakersData.slice(currentIndex, currentIndex + numCardsToDisplay),
    ...speakersData.slice(0, Math.max(0, (currentIndex + numCardsToDisplay) - speakersData.length))
  ];
  

  return (
    <section className="speakers-section">
    
      <div class="image-container">
        <div className="arrow left-arrow" onClick={handlePrevSpeaker}>
          <FaArrowLeft />
        </div>

        <img src="assets/speakers.png" alt="Background" class="responsive-image" />
        <div class="overlay-text-title">MEET OUR SPEAKERS</div>
        {visibleSpeakers.map(({ id, name, graduationYear, company, summary, image }) => (
          <>
            <img src={image} alt="speaker Img" class="overlay-image" />
            <div class="overlay-text-name">{name}</div>
            <div class="overlay-text-job">{company}</div>
          </>
        ))}

        <div className="arrow right-arrow" onClick={handleNextSpeaker}>
          <FaArrowRight />
        </div>

      </div>

    </section>
  );
};

export default Speakers;
