import React from 'react';
import Nav from './Nav';
import Card from './components/IndexCard/Card';
import Footer from './Footer';
import Slider from './Slider';
import Explore from './Explore';
import Carousel from './Carousel';
import Booking from './Booking';
import Contact from './Contact';
import CardContact from './CardContact';
import Rooms from './Rooms';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import Halfday from './Halfday';
import Fullday from './Fullday';
import ConferenceRoom from './ConferenceRoom';
import SlideConference from './SlideConference';

import './App.css';
import Package from './Package';


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
