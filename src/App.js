import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Timer from './components/Timer/Timer';
import About from './components/About/About';
import Speakers from './components/Speakers/Speakers';
import Sponsers from './components/Sponsers/Sponsers';
import TimeLine from './components/TimeLine/TimeLine';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Timer />
        <About />
        <Speakers />
        <Sponsers />
        {/* <TimeLine /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
