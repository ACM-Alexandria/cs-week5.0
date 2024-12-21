// TimeLine.js
import React from 'react';
import './TimeLine.css'; // Import the custom styles

const TimeLine = () => {
  const events = [
    { day: 'Day 1: Keynote', description: 'Introduction to the event and opening ceremony.' },
    { day: 'Day 2: Tech Games', description: 'Fun and engaging tech-related games for participants.' },
    { day: 'Day 3: Tech Talks', description: 'Learn from industry leaders and experts.' },
    { day: 'Day 4: Hackathon', description: 'Showcase your skills in a competitive coding environment.' },
  ];

  return (
    <section id="schedule" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">Event Schedule</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-circle"></div>
            <div className="timeline-content">
              <h3 className="timeline-day">{event.day}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;
