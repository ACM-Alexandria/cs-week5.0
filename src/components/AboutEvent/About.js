import React, { useEffect } from 'react';
import './About.css'; // Importing custom CSS for styling

const About = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.about-content p');
    
    const animateParagraphs = () => {
      paragraphs.forEach((paragraph, index) => {
        const text = paragraph.textContent;
        paragraph.innerHTML = ''; // Clear the original text

        const words = text.split(' '); // Split the text into words
        words.forEach((word, i) => {
          const span = document.createElement('span');
          span.textContent = word + ' '; // Add space after each word
          span.style.opacity = 0; // Initially hidden
          span.style.transition = `opacity 0.5s ease-out, transform 0.5s ease-out ${i * 0.3}s`;
          span.classList.add('magic-effect'); // Add class for magical effect
          paragraph.appendChild(span);

          // Add delay for each word to appear
          setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)'; // Make it rise up as it fades in
          }, i * 300);
        });
      });
    };

    // Using IntersectionObserver to detect when the section comes into the view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateParagraphs();
          observer.disconnect(); // Stop observing after the animation starts
        }
      },
      {
        threshold: 0.3, // Trigger when 50% of the section is in the viewport
      }
    );

    // Observe the section element
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (aboutSection) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About ACM CS Week</h2>
        <p>
          ACM CS Week is a four-day event designed to bring together students, professionals, and
          enthusiasts in the fields of computer science, technology, and innovation. We aim to foster
          collaboration, learning, and skill development through a series of workshops, talks, debates, and
          hands-on activities. The event will feature both technical and non-technical sessions, ensuring
          that there is something for everyone.
        </p>
        <p>
          Join us for an unforgettable experience of learning, networking, and fun! Whether you're interested in
          coding, presentation skills, or just exploring new technologies, ACM CS Week has something for you.
        </p>
      </div>
    </section>
  );
};

export default About;
