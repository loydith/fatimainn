// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ContactCard from './components/ContactCard/ContactCard';
import Rooms from './components/Rooms/Rooms';
import Modal from './components/Modal/Modal';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ConferenceRoom from './components/ConferenceRoom/ConferenceRoom';
import SlideConference from './components/SlideConference/SlideConference';

// Pages
import Auditorio from './pages/Auditorio';
import Dashboard from './pages/Dashboard';
import DiaCompleto from './pages/DiaCompleto';
import Explore from './pages/Explore';
import Home from './pages/Home';
import MedioDia from './pages/MedioDia';
import PaqueteTuristico from './pages/PaqueteTuristico';
import Reservactiones from './pages/Reservaciones';
import Salir from './pages/Salir';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auditorio" component={Auditorio} />
          <Route exact path="/contactos" component={Contact} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/diacompleto" component={DiaCompleto} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/habitaciones" component={Rooms} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mediodia" component={MedioDia} />
          <Route exact path="/paqueteturistico" component={PaqueteTuristico} />
          <Route exact path="/reservaciones" component={Reservactiones} />
          <Route exact path="/salir" component={Salir} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
