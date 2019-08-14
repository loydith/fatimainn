// React
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import axios from 'axios';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Rooms from './components/Rooms/Rooms';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ConferenceRoom from './components/ConferenceRoom/ConferenceRoom';

// Pages

import Dashboard from './pages/Dashboard';
import DiaCompleto from './pages/DiaCompleto';
import Explore from './pages/Explore';
import Home from './pages/Home';
import MedioDia from './pages/MedioDia';
import PaqueteTuristico from './pages/PaqueteTuristico';
import Reservaciones from './pages/Reservaciones';
import Salir from './pages/Salir';
import './App.css';
import Booking from './components/Booking/Booking';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: '',
      isAdmin: false,
      isUser: true,
      isLoggedIn: false,
      userName: ''
    }
  }
  handleEmail = (email) => {
    // axios.post('/email', data).then(res => {
    //   console.log('EMAIL RESPONSE', res);
    // })
  }
  handleLogin = (user) => {
    console.log(user);
    axios.post('/api/login', user).then(res => {
      this.setState({
        isAdmin:res.data.adminUser,
        isUser:!res.data.adminUser,
        isLoggedIn: true,
        username: res.data.username,
        id: res.data.id
      });
    }).catch( error => alert("Login failed"))
  }
  handleReservaciones = (reservation) => {
    console.log(reservation)
    axios.post('/reservations', reservation).then(res => {
      console.log('Reservations', res);
    })
  }
  handleSignup = (user) => {
    console.log(user);
    axios.post('/api/signup', user).then(res => {
      console.log('SIGN UP RESPONSE', res);
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Nav isAdmin={this.state.isAdmin} isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.isAdmin ? (
                <Redirect to="/dashboard" />
              ) : (
                <Home />
                )
            )} />
            <Route exact path="/Index" component={Home} />
            <Route exact path="/Auditorio" component={ConferenceRoom} />
            <Route exact path="/contactos" component={() => (<Contact handleChange={this.handleChange} handleEmail={this.handleEmail} />)} />
            <Route exact path="/dashboard" component={() => (this.state.isAdmin ? (<Dashboard/>) : (<Redirect to="/" />))} />
            <Route exact path="/diacompleto" component={DiaCompleto} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/habitaciones" component={Rooms} />
            <Route exact path="/login" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/" />
              ) : (<Login handleChange={this.handleChange} handleLogin={this.handleLogin} />))} />
            <Route exact path="/mediodia" component={MedioDia} />
            <Route exact path="/paqueteturistico" component={PaqueteTuristico} />
            <Route exact path="/reservaciones" component={() => (<Booking handleChange={this.handleChange} handleReservaciones={this.handleReservaciones} />)} />
            <Route exact path="/salir" component={Salir} />
            <Route exact path="/signup" component={() => (<Signup handleChange={this.handleChange} handleSignup={this.handleSignup} />)} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
