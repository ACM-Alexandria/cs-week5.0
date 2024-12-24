import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Timer from './components/CS-Week/Timer';
import About from './components/AboutEvent/About';
import Speakers from './components/Speakers/Speakers';
import Sponsers from './components/Sponsers/Sponsers';
import Prizes from './components/Prizes/Prizes';
import TimeLine from './components/Schedule/TimeLine';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Timer />
        <About />
        <Speakers />
        {/* <TimeLine />
        <Sponsers />
        <Prizes />
        <AboutUs /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
