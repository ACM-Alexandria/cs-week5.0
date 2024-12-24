import React from 'react';
import { Link } from 'react-scroll';
import './Prizes.css'; // Importing custom CSS file for the header

const Prizes = () => {
  return (
    <section className="prizes" id="prizes-section">
      <div className="container">
        <h1>Prizes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          imperdiet odio. Integer bibendum, nunc nec vestibulum luctus, nunc
          nulla ultricies nunc, nec ultricies lacus tellus non justo. Nullam
          eget sapien ac nunc dignissim tempor. Nullam nec turpis auctor,
          tincidunt neque nec, tincidunt nisl. Suspendisse potenti. Nulla
          facilisi. Suspendisse potenti. Nulla facilisi. Suspendisse potenti.
          Nulla facilisi. Suspendisse potenti. Nulla facilisi. Suspendisse
          potenti. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
        </p>
        <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default Prizes;
