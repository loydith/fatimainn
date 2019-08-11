import React from 'react';
import Nav from './components/Nav/Nav';
import Card from './components/IndexCard/Card';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import Explore from './components/Explore/Explore';
import Carousel from './components/Carousel/Carousel';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import ContactCard from './components/ContactCard/ContactCard';
import Rooms from './components/Rooms/Rooms';
import Modal from './components/Modal/Modal';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Halfday from './components/Halfday/Halfday';
import Fullday from './components/Fullday/Fullday';
import ConferenceRoom from './components/ConferenceRoom/ConferenceRoom';
import SlideConference from './components/SlideConference/SlideConference';

import './App.css';
import Package from './components/Package/Package';


function App() {
  return (
    <div className="App">
      <Nav/>
      <SlideConference/>
    <ConferenceRoom/>
      <Footer/>
    </div>
  );
}

export default App;
